import React, { useContext, useEffect, useState } from "react";
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
    faShoppingBasket,
    faBars,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { CartContext } from "../Cart/CartContext"; // Import CartContext

interface NavbarDefaultProps {
  title: string;
}

export function NavbarDefault({ title }: NavbarDefaultProps) {
  const [openNav, setOpenNav] = useState(false);
  const { getTotal } = useContext(CartContext); // Use CartContext to get total price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  useEffect(() => {
    setTotalPrice(parseFloat(getTotal().toFixed(2))); // Update total price from cart context with 2 decimal places
  }, [getTotal]);

  const navList = (
    <ul className="mt-2 mb-4 flex font-black flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="flex items-center gap-x-2 p-1 font-medium text-green-500 hover:text-green-700">
        <FontAwesomeIcon icon={faHouse}/>
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <Link to="/menu" className="flex items-center gap-2 text-gray-100 hover:text-gray-700">
          <FontAwesomeIcon icon={faPizzaSlice} />
          Menu
        </Link>
      </li>
      <li className="flex items-center gap-x-2 p-1 font-medium">
        <FontAwesomeIcon icon={faMapLocationDot} />
        <Link to="/location-and-hours" className="flex items-center text-red-500 hover:text-red-700">
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
        <IconButton
          variant="text"
          className="mr-4 h-6 w-6 flex items-center justify-center lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {openNav ? (
            <FontAwesomeIcon icon={faTimes} className="h-6 w-6 text-green-500" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-green-500" />
          )}
        </IconButton>
        <Link to="/" className="mr-4 cursor-pointer py-1.5 font-medium text-gray-100 hover:text-gray-500 lg:text-green-500 lg:hover:text-green-700">
          Pinos RVA
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1 lg:order-none order-1">
          <li className="flex items-center gap-x-2 p-1 font-medium cursor-pointer text-red-500 hover:text-red-700">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <Link to="/cart" className="flex items-center">
              Order
            </Link>
            <span className="ml-2 text-gray-100">(${totalPrice})</span> {/* Display active total price */}
          </li>
        </div>
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