import { useRoutes, HashRouter } from "react-router-dom";
import { CartContextProvider } from "../../Context";
import { AuthContextProvider } from "../../AuthContext";
import { ProductModalRoute } from "../../Components/ProductModalRoute";
import Home from "../Home";
import Celulares from "../Celulares";
import Contacto from "../Contacto";
import NotFount from "../NotFound";
import Login from "../Login";
import Logout from "../Logout";
import Admin from "../Admin";
import ProtectedRoute from "../../Components/ProtectedRoute";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/celulares", element: <Celulares /> },
    { path: "/contacto", element: <Contacto /> },
    { path: "/producto/:id", element: <ProductModalRoute /> },
    { path: "/login", element: <Login /> },
    { path: "/logout", element: <Logout /> },
    { path: "/admin",  element: (
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      ),},
    { path: "/*", element: <NotFount /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <CartContextProvider>
      {/* Uso HashRouter para que funcione Github Pages */}
      <HashRouter>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </HashRouter>
    </CartContextProvider>
  );
};

export default App;
