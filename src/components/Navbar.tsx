import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Cart } from "../Components/Cart";
import { useAuth } from "../AuthContext";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const auth = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const ActiveStyle = "border-b-2 border-primario pb-1 ";

  return (
    <header>
      <nav className="text-primario mt-0 flex justify-between items-center border-b-1 shadow-md p-3 fixed top-0 left-0 right-0 bg-white z-10">
        <div>
          <img src={Logo} alt="logo" width={200} />
        </div>
        <div>
          <ul className="flex gap-4 text-black">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? ActiveStyle : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/celulares"
                className={({ isActive }) =>
                  isActive ? ActiveStyle : undefined
                }
              >
                Celulares
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={({ isActive }) =>
                  isActive ? ActiveStyle : undefined
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4">
            {auth?.user ? (
              <li className="cursor-pointer">
                <Link to="/logout">
                  <RiLogoutBoxLine size={25} />
                </Link>
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link to="/login">
                  <RiLoginBoxLine size={25} />
                </Link>
              </li>
            )}
            <li className="cursor-pointer" onClick={() => setIsCartOpen(true)}>
              <GrCart size={25} />
            </li>
          </ul>
        </div>
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </nav>
    </header>
  );
};

export default Navbar;
