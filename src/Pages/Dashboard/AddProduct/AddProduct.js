import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const navigate = useNavigate();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://doctors-portal-server-rust.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imgData.data.url,
          };

          // save doctor information to the database
          fetch("https://doctors-portal-server-rust.vercel.app/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-4xl">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.name && <p className="text-error">{errors.name.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            {...register("price", {
              required: "Price is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.price && <p className="text-error">{errors.price.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location", {
              required: "Location is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.location && (
            <p className="text-error">{errors.location.message}</p>
          )}
        </div>

        <div className='form-control w-full max-w-xs'>
          <label className="label">
            {" "}
            <span className="label-text">Condition Type</span>
          </label>
          <select
            {...register("condition", {
              message: "Please select one",
            })}
            className="input input-bordered w-full"
          >
            <option value="excellent" selected>
              Excellent
            </option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Year Of Purchase</span>
          </label>
          <input
            type="text"
            {...register("purchase", {
              required: "Year is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.purchase && (
            <p className="text-error">{errors.purchase.message}</p>
          )}
        </div>
        <div className='form-control w-full max-w-xs'>
          <label className="label">
            {" "}
            <span className="label-text">Product Category</span>
          </label>
          <select
            {...register("product", {
              message: "Please select product category",
            })}
            className="input input-bordered w-full"
          >
            <option value="microsoft" selected>Microsoft</option>
            <option value="hp">HP</option>
            <option value="dell">DELL</option>
          </select>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-500">{errors.img.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            {" "}
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="text"
            {...register("mobile", {
              required: "Mobile number is Required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.mobile && <p className="text-error">{errors.mobile.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
        <label className="label">
            {" "}
            <span className="label-text">Message</span>
          </label>
        <textarea className="textarea textarea-bordered" placeholder="Product Description"></textarea>
        </div>
        <input
          className="btn btn-accent w-full mt-4"
          value="Add Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
