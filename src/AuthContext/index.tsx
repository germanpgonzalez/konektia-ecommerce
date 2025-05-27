import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type UserType = {
  username: string;
  password: string;
};

type AuthContextType = {
  user: UserType | null;
  login: (credentials: { username: string; password: string }) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const navigate = useNavigate();

  const login = ({ username, password }: { username: string; password: string }) => {

    if (username === "prueba" && password === "prueba") {
      setUser({ username, password });
      navigate("/admin");
    } else {
      alert("Usuario o contraseña incorrectos");
    }

  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export { AuthContextProvider, useAuth };
