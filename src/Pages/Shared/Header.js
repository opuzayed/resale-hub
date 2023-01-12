import { Navbar } from "flowbite-react";
import { NavbarToggle } from "flowbite-react/lib/esm/components/Navbar/NavbarToggle";
import { useContext } from "react";
import { Link } from "react-router-dom";
import laptop from "../../assets/Images/laptop.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar fluid={true} rounded={true} className="nav-center">
        <Navbar.Brand href="#">
          <img src={laptop} className="mr-3 h-6 sm:h-9" alt="laptop Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Computers Hub
          </span>
        </Navbar.Brand>
        <NavbarToggle></NavbarToggle>
        <Navbar.Collapse id="navbar-hamburger">
          <Link to="/" active={true}>
            Home
          </Link>
          <Link to="/blog">Blog</Link>
          {user?.uid ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="#">
                <button
                  onClick={handleLogOut}
                  className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Sign out
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Register
                </button>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
