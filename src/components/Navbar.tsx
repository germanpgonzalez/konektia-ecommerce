import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { RiLoginBoxLine, RiLogoutBoxLine } from "react-icons/ri";
import { Cart } from "../Components/Cart";
import { useAuth } from "../AuthContext";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const auth = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ActiveStyle = "border-b-2 border-primario pb-1 font-semibold";

  return (
    <header>
      <nav className="text-primario mt-0 flex items-center justify-between border-b shadow-md p-3 fixed top-0 left-0 right-0 bg-white z-50">


        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img src={Logo} alt="logo" width={200} />
          </Link>
        </div>


        <button
          className="sm:hidden p-2 ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-primario mb-1"></div>
          <div className="w-6 h-0.5 bg-primario mb-1"></div>
          <div className="w-6 h-0.5 bg-primario"></div>
        </button>


        <ul
          className={`${
            isMenuOpen
              ? "flex flex-col absolute top-full left-0 right-0 bg-white shadow-md p-4 sm:static sm:flex-row"
              : "hidden sm:flex"
          } gap-6 items-center text-black justify-center flex-1`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? ActiveStyle : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/celulares"
              className={({ isActive }) => (isActive ? ActiveStyle : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Celulares
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacto"
              className={({ isActive }) => (isActive ? ActiveStyle : undefined)}
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </NavLink>
          </li>
        </ul>


        <ul className="hidden sm:flex gap-4 items-center text-primario">
          <li className="cursor-pointer">
            {auth?.user ? (
              <Link to="/logout">
                <RiLogoutBoxLine size={25} />
              </Link>
            ) : (
              <Link to="/login">
                <RiLoginBoxLine size={25} />
              </Link>
            )}
          </li>
          <li className="cursor-pointer" onClick={() => setIsCartOpen(true)}>
            <GrCart size={25} />
          </li>
        </ul>


        {isMenuOpen && (
          <ul className="flex flex-col gap-4 p-4 sm:hidden text-primario">
            <li className="cursor-pointer">
              {auth?.user ? (
                <Link to="/logout" onClick={() => setIsMenuOpen(false)}>
                  <RiLogoutBoxLine size={25} />
                </Link>
              ) : (
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                  <RiLoginBoxLine size={25} />
                </Link>
              )}
            </li>
            <li className="cursor-pointer" onClick={() => {
              setIsCartOpen(true);
              setIsMenuOpen(false);
            }}>
              <GrCart size={25} />
            </li>
          </ul>
        )}

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </nav>
    </header>
  );
};

export default Navbar;
