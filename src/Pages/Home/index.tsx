import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="text-black container mx-auto mt-48 min-h-screen">
        <h1>Página Home 💒</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum
          consectetur sapiente officiis nisi blanditiis porro optio maiores et.
          Officia, ipsum! Dolores dignissimos veritatis, culpa tenetur
          blanditiis reprehenderit distinctio cupiditate!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
