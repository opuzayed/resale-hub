import React from "react";

const BookingModal = ({singleProduct}) => {
    const {name} = singleProduct;
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form className="grid grid-cols-1 gap-3">
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              <input type="text" placeholder="Type here" className="input input-bordered w-full" />
              <br />
              <input className="btn w-full text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="submit" value="Submit"/>
          </form>
         
        </div>
      </div>
    </>
  );
};

export default BookingModal;
