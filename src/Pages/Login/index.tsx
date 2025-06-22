import { useState } from "react";
import Layout from "../../Components/Layout";
import { useAuth } from "../../AuthContext";

const Login = () => {
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (auth) {
      auth.login({ username, password });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center px-4 -mt-40">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-md flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            Iniciar Sesión
          </h2>

          <div className="flex flex-col">
            <label htmlFor="usuario" className="text-sm mb-1">
              Usuario:
            </label>
            <input
              type="text"
              id="usuario"
              placeholder="Usuario"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm mb-1">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Ingresar"
            className="bg-primario text-white py-2 px-4 rounded hover:opacity-90 transition-opacity duration-200 cursor-pointer"
          />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
