import React from "react";
import {
  Navbar,
  MobileNav,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faPizzaSlice, 
    faHouse, 
    faMapLocationDot, 
    faShoppingBasket
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

interface NavbarDefaultProps {
  title: string;
}

export function NavbarDefault({ title }: NavbarDefaultProps) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex font-black flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="flex items-center gap-x-2 p-1 font-medium hover:text-green-500">
        <FontAwesomeIcon icon={faHouse}/>
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link to="/menu" className="flex items-center gap-2 hover:text-yellow-500">
          <FontAwesomeIcon icon={faPizzaSlice} />
          Menu
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <FontAwesomeIcon icon={faMapLocationDot} />
        <Link to="/location-and-hours" className="flex items-center">
          Location & Hours
        </Link>
      </li>
    </ul>
  );

  return (
    <Navbar 
      className="w-full px-4 py-2 lg:px-8 lg:py-4 bg-gray-900 shadow-md sticky top-0 z-50" 
      placeholder={undefined} 
      onPointerEnterCapture={undefined} 
      onPointerLeaveCapture={undefined}>

      <div className="container mx-auto flex items-center justify-between text-black-900">
        <Link to="/" className="mr-4 cursor-pointer py-1.5 font-medium text-white hover:text-yellow-500">
          Pinos RVA
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1 lg:order-none order-1">
          <li className="flex items-center gap-x-2 p-1 font-medium cursor-pointer text-white hover:text-yellow-500">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <Link to="/cart" className="flex items-center">
              Order
            </Link>
          </li>
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 flex items-center justify-center hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarDefault;