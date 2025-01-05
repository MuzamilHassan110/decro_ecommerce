// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const ShoppingProtected = ({ children }) => {
//   const [token, setToken] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const authToken = localStorage.getItem("authToken");
   
//     if (authToken) {
//       setToken(authToken);
//     }
//   }, []);

 
//   if (token) {
//     return children;
//   } else {
//     navigate('/login')
//   }
// };

// export default ShoppingProtected;
