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
      <div className="flex flex-col items-center justify-center">
        <form action="" className="flex flex-col gap-4 w-full max-w-lg" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="usuario" className="text-sm mb-1">
            Usuario:
          </label>
          <input
            type="text"
            placeholder="Usuario"
            id="usuario"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="text-sm mb-1">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Ingresar"
            className="bg-primario text-white w-full py-2 cursor-pointer hover:opacity-80"
          />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
