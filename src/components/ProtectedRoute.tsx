import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth?.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
