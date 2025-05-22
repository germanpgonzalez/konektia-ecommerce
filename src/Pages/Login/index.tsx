import Layout from "../../Components/Layout";

const Login = () => {

    const handleSubmit = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        e.preventDefault();
    }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <form action="" className="flex flex-col gap-4 w-full max-w-lg">
          <label htmlFor="usuario" className="text-sm mb-1">
            Usuario:
          </label>
          <input
            type="text"
            placeholder="Usuario"
            id="usuario"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
          />
          <label htmlFor="password" className="text-sm mb-1">
            Password:
          </label>
          <input
            type="pasword"
            placeholder="Password"
            id="password"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario/70"
          />
          <input 
            type="submit" 
            value="Ingresar" 
            className="bg-primario text-white w-full py-2 cursor-pointer hover:opacity-80"
            onClick={(e) => handleSubmit(e)}
            />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
