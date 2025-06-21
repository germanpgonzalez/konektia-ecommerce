import { useRef } from "react";
import Layout from "../../Components/Layout";
import { ProductList } from "../../Components/ProductList";
import HeroImg from "../../assets/hero.png";


const Home = () => {

  const productosRef = useRef<HTMLDivElement>(null);

  const scrollToProductos = () => {
    productosRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 sm:px-6 py-8 mb-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            La mejor tecnología, a un clic de distancia
          </h1>
          <p className="text-gray-600 mb-6">
            Descubrí nuestros smartphones al mejor precio y con la mejor calidad
            del mercado.
          </p>
          <button
            onClick={scrollToProductos}
            className="bg-primario text-white py-2 px-4 rounded-2xl hover:bg-primario/80 transition duration-200 inline-block cursor-pointer"
          >
            Ver productos
          </button>
        </div>

        <div className="md:w-1/2">
          <img
            src={HeroImg}
            alt="Smartphone"
            className="w-full h-auto max-w-2xl mx-auto"
          />
        </div>
      </section>
      <div ref={productosRef}>
        <ProductList/>
      </div>
    </Layout>
  );
};

export default Home;
