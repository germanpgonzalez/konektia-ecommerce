import { useRoutes, BrowserRouter } from 'react-router-dom';
import { CartContextProvider } from '../../Context';
import Home from '../Home';
import Celulares from '../Celulares';
import Contacto from '../Contacto';
import NotFount from '../NotFound';
import Login from '../Login';
import './App.css'

const AppRoutes = () => {
  
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/celulares', element: <Celulares /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/login', element: <Login /> },
    { path: '/*', element: <NotFount /> },
  ]);

  return routes;
}

const App = () => {

  return (
    <CartContextProvider>
      <BrowserRouter basename="/konektia-ecommerce">
        <AppRoutes />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App
