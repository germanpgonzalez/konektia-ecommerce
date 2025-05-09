import { GrCart } from "react-icons/gr";
import { IoIosLogIn } from "react-icons/io";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="text-primario mt-1 flex justify-between items-center border-b-1 shadow-md p-5 fixed top-0 left-0 right-0 bg-white z-10">
        <div>
            <img src={Logo} alt="logo" width={200} />
        </div>
        <div>
            <ul className="flex gap-4 text-black">
                <li>Celulares</li>
                <li>Nosotros</li>
                <li>Contacto</li>
            </ul>
        </div>
        <div>
            <ul className="flex gap-4">
                <li><IoIosLogIn size={25}/></li>
                <li><GrCart size={25} /></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar