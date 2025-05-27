import { useAuth } from "../../AuthContext";
import Layout from "../../Components/Layout";

const Logout = () => {

  const auth = useAuth();

  const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (auth) {
    auth.logout();
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <form
          action=""
          className="flex flex-col gap-4 w-full max-w-lg"
          onSubmit={(e) => handleLogout(e)}
        >
          <label htmlFor="logout" className="text-sm mb-8 text-center">
            ¿Deseas salir?
          </label>

          <button
            type="submit"
            className="bg-primario text-white w-full py-2 cursor-pointer hover:opacity-80"
          >
            Salir
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Logout;
