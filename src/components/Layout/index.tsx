import Footer from "../Footer";
import Navbar from "../Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen text-black">
      <Navbar />
      <main className="flex-grow container mx-auto mt-48">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
