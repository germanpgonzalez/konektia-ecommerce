import Layout from "../../Components/Layout";
import { ProductList } from "../../Components/ProductList";
import HeroImg from "../../assets/hero.png";

const Home = () => {
  return (
    <Layout>
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-8 mb-3">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            La mejor tecnología, a un clic de distancia
          </h1>
          <p className="text-gray-600 mb-6">
            Descubrí nuestros smartphones al mejor precio y con la mejor calidad
            del mercado.
          </p>
          <a
            href="#productos"
            className="bg-primario text-white py-2 px-4 rounded-2xl hover:bg-primario/80 transition duration-200 inline-block"
          >
            Ver productos
          </a>
        </div>

        <div className="md:w-1/2">
          <img
            src={HeroImg}
            alt="Smartphone"
            className="w-full max-w-2xl mx-auto"
          />
        </div>
      </section>
      <div id="productos">
        <ProductList />
      </div>
    </Layout>
  );
};

export default Home;
