import "./Settings.scss"
import {Row, Col, Typography, Flex} from "antd"




import { RiLogoutCircleLine } from "react-icons/ri";

import { NavLink, Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "../../firebase/firebase";
import { auth, db } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";


const {Text} = Typography;
const Settings = () => {
  
    const [user, setUser] = useState(null);

    const [userDetails, setUserDetails] = useState(null);
    const [searchToggle, setSearchToggle] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cartItems} =useSelector((state) => state.cartSlice)
    const [current, setCurrent] = useState("home");
    const onClick = (e) => {
         setCurrent(e.key);
    };
    const handleSearch = () => {
      setSearchToggle((current) => !current);
    };
  
    const logOut = async () => {
      try {
        await auth.signOut().then(() => {
          toast.success("Logged out successfully!");
          localStorage.removeItem("authToken");
          dispatch(changeCartItems([]));
          navigate("/login");
        });
      } catch (error) {
        toast.error("Error in signing out! " + error.message);
      }
    };
  const currentPath = window.location.path
    useEffect(() => {
      const logOut = onAuthStateChanged(auth, (currentUser) => {
        if(!currentUser && currentPath == "/detail/shopping_card/order"){
          navigate('/login')
        }
        setUser(currentUser);
      });
      return () => logOut();
    }, []);
  
    const fetchData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
  
          try {
            const docRef = doc(db, "User", user.uid);
            const docGetData = await getDoc(docRef);
            if (docGetData.exists) {
              setUserDetails(docGetData.data());
            }
          } catch (error) {
            console.error("Error fetching user details: ", error);
          }
        }
      });
    };
  
    useEffect(() => {
      fetchData();
    }, []);


  return (
    <div className="settings_container"> 
    <Row gutter={[16, 16]}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
        <Text>Language:</Text>
        <div className="country">
            <Flex gap={10} align="center" justify="space-around" style={{padding: "0.534em"}}>
                <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/l/1.jpg"/>
                <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/l/2.jpg"/>
                <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/l/3.jpg"/>
            </Flex>
            <Flex gap={10} align="center" justify="space-around" style={{padding: "0.534em"}}>
                <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/l/4.jpg"/>
                <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/l/5.jpg"/>
                <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/l/6.jpg"/>
            </Flex>
        </div>
        <div>
            <Text>Currency:</Text>
            <div className="currency">
               <div>
               <Flex justify="space-around" className="eur_usd">
                    <Text>
                        EUR
                    </Text>
                    <Text style={{color: "#EB7025"}}>
                        USD
                    </Text>
                </Flex>
               </div>

            </div>
        </div>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
           <Flex style={{flexDirection: "column"}} className="login_section">
           <Link to={"/login"} className="no-gap"> <Text >Sign In</Text></Link>
            
           <Link className="no-gap"> <Text>Register</Text></Link>
            <Text className="no-gap">My Account</Text>  
            <Text className="no-gap">Wishlist (0)</Text>          

        </Flex>
            {/* {!user ? (
              <Link to="/login">
                <Flex
                  justify="center"
                  align="center"
                  gap={2}
                  className="login_img"
                >
                  <img
                    src="https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette-thumbnail.png"
                    alt="Login Icon"
                    className="login_pic"
                  />
                 <Text>Login</Text>
                </Flex>
              </Link>
            ) : (
              <Flex
                justify="center"
                align="center"
                gap={2}
                className="login_img"
                onClick={logOut}
              >
                {userDetails ? (
                  <>
                    <span className="login_name"> {userDetails.name}</span>
                  </>
                ) : (
                  <span className="login_name">Loading...</span>
                )}
                <img
                  src="https://w7.pngwing.com/pngs/505/761/png-transparent-login-computer-icons-avatar-icon-monochrome-black-silhouette-thumbnail.png"
                  alt="Logout Icon"
                />
                <RiLogoutCircleLine /> LogOut
              </Flex>
            )}
         */}
            
        </Col>
    </Row>
    
    </div>
  )
}

export default Settings
