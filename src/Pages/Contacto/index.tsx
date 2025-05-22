import Layout from "../../Components/Layout";

const Contacto = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  }
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center">
          <form action="" className="flex flex-col gap-4 w-full max-w-lg">
            <label htmlFor="nombre" className="text-sm mb-1">Nombre:</label>
            <input type="text" placeholder="Nombre" id="nombre" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"/>
            <label htmlFor="email" className="text-sm mb-1">Email:</label>
            <input type="email" placeholder="Email" id="email" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"/>
            <label htmlFor="tel" className="text-sm mb-1">Teléfono:</label>
            <input type="tel" name="tel" id="tel" placeholder="Teléfono" className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"/>
            <label htmlFor="mensaje" className="text-sm mb-1">Mensaje:</label>
            <textarea name="mensaje" id="mensaje" placeholder="Mensaje" className="p-2 border border-gray-300 rounded min-h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-primario/70"></textarea>
            <input 
              type="submit" 
              value="Enviar" 
              className="bg-primario text-white w-full py-2 cursor-pointer hover:opacity-80"
              onClick={(e) => handleSubmit(e)}
            />
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Contacto;
