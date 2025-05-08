import { GrCart } from "react-icons/gr";
import { IoIosLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="text-primario mt-1 flex justify-between items-center border-b-1 shadow-md p-5 ">
        <div>
            <h3><span className="text-3xl font-bold">Konektia</span><span className="text-black font-semibold">Smartphones</span></h3>
        </div>
        <div>
            <ul className="flex gap-4">
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