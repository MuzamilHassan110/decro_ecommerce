import { Navigate } from "react-router-dom";

const LoginProtected = ({ children, user }) => {
  console.log("Protected !", user);
  return user ? children : <Navigate to="/login" />;
}

export default LoginProtected;
