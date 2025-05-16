import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#a0008b] to-[#320030] text-white py-10 px-6 shadow-inner mt-30">
        <div>
            <ul className="flex justify-center gap-4 mt-4">
                <li><BsWhatsapp /></li>
                <li><BsInstagram /></li>
                <li><BsTwitterX /></li>
                <li><AiFillTikTok /></li>
            </ul>
        </div>
        <div className="text-center mt-4">
            <p>© 2025 Konektia Smartphones. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer