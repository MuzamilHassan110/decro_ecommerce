// import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom";


// const Protected = ({children}) => {

//   const [token, setToken] = useState(null)
//     const navigate = useNavigate();
//     useEffect(() => {
//         const token = localStorage.getItem("authToken");
//            if(token){
//             setToken(token)
//         }
//     },[])
    
//     if(token){
//       navigate('/')
//     } else {
//       return children
//     }
// }

// export default Protected
