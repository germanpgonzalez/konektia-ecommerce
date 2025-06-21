import { BsWhatsapp, BsInstagram, BsTwitterX } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#a0008b] to-[#320030] text-white py-10 px-6 shadow-inner mt-30">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <ul className="flex justify-center gap-6 text-xl">
          <li><BsWhatsapp /></li>
          <li><BsInstagram /></li>
          <li><BsTwitterX /></li>
          <li><AiFillTikTok /></li>
        </ul>

        <div className="text-center md:text-right text-sm">
          <h4>
            Creado por{" "}
            <a href="mailto:germangonzalezdev@gmail.com" className="underline hover:text-gray-300 transition-colors">
              <strong>Germán Pablo Gonzalez</strong>
            </a>
          </h4>
          <p>© 2025 Konektia Smartphones. Todos los derechos reservados.</p>
          <p>Talento Tech - 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
