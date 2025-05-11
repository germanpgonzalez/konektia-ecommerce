import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from '../Home';
import Celulares from '../Celulares';
import Contacto from '../Contacto';
import NotFount from '../NotFound';
import './App.css'

const AppRoutes = () => {
  
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/celulares', element: <Celulares /> },
    { path: '/contacto', element: <Contacto /> },
    { path: '/*', element: <NotFount /> },
  ]);

  return routes;
}

const App = () => {

  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  );
}

export default App
