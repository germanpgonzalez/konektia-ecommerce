import Layout from "../../Components/Layout";

const Contacto = () => {
  const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center px-4 py-10">

        <form className="flex flex-col gap-4 w-full max-w-lg bg-white shadow-md rounded-lg p-6">
          <div>
            <label htmlFor="nombre" className="text-sm block mb-1">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="Nombre"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
            />
          </div>

          <div>
            <label htmlFor="tel" className="text-sm block mb-1">
              Teléfono:
            </label>
            <input
              type="tel"
              id="tel"
              placeholder="Teléfono"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="text-sm block mb-1">
              Mensaje:
            </label>
            <textarea
              id="mensaje"
              placeholder="Mensaje"
              className="w-full p-2 border border-gray-300 rounded min-h-[150px] resize-none focus:outline-none focus:ring-2 focus:ring-primario/70"
            />
          </div>

          <input
            type="submit"
            value="Enviar"
            onClick={handleSubmit}
            className="bg-primario text-white w-full py-2 rounded hover:opacity-80 transition duration-200 cursor-pointer"
          />
        </form>
      </section>
    </Layout>
  );
};

export default Contacto;
