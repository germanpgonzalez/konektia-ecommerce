import Layout from "../../Components/Layout";
import { ProductList } from "../../Components/ProductList";


const Home = () => {
  return (
    <Layout>
        <h1>Página Home 💒</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
          consectetur sapiente officiis nisi blanditiis porro optio maiores et.
          Officia, ipsum! Dolores dignissimos veritatis, culpa tenetur
          blanditiis reprehenderit distinctio cupiditate!
        </p>
        <ProductList />
    </Layout>
  );
};

export default Home;
