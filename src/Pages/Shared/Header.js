import { Avatar, Dropdown, Navbar, Tooltip } from "flowbite-react";
import { useContext } from "react";
import laptop from "../../assets/Images/laptop.png";
import ThemeSwitcher from "../../component/ThemeSwitcher/ThemeSwitcher";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
        const {user, logOut} = useContext(AuthContext);

        const handleLogOut = () => {
          logOut()
          .then(()=> {})
          .catch(error => console.error(error));
        }

  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img src={laptop} className="mr-3 h-6 sm:h-9" alt="laptop Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Computers Hub
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
           
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Tooltip content="Toogle dark theme">
            <ThemeSwitcher></ThemeSwitcher>
          </Tooltip>
          
          <Navbar.Toggle />
          </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={true}>Home</Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
          <Navbar.Link href="/signup">
          <button className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign up</button>
          </Navbar.Link>
          { user?.uid ?
            <Navbar.Link href="/login">
            <button onClick={handleLogOut} className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign out</button>
          </Navbar.Link>
          :
          <Navbar.Link href="/login">
            <button className="btn text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Log in</button>
          </Navbar.Link>
          }
         
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
