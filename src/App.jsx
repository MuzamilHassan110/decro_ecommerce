import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ShoppingCard from "./components/ShoppingCard/ShoppingCard";
import Layout from "./components/Layout";
import Home from "./Home/Home";
import Main from "./components/Details/Main";
import Order from "./components/Order/Order";
import Shop from "./components/Shop/Shop";
import ContactPage from "./components/contactPage/ContactPage";
import SignUpPage from "./components/Authentication/SignUpPage.jsx";
import { fetchProductData } from "./redux/features/productsDetails.js";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./components/Authentication/LoginPage.jsx";
import AboutUS from "./components/AboutUs/AboutUS.jsx";
import { auth } from "./firebase/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import LoginProtected from "./components/ProtectedRoutes/LoginProtected.jsx";
import { Spin } from 'antd';
import Products from "./Products.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state?.products);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);
const currentPath= window.location.path;
useEffect(() => {
    // const currentPath = window.location.pathname;
    if (currentPath === "/detail/shopping_card/order" && auth) {
      navigate("/login");
    } 
  }, [auth, navigate]);
  
  useEffect(() => {
    const accessUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => accessUser();
  }, []);

  useEffect(() => {
    if (!loading) {
      const currentPath = window.location.pathname;
      if (!user && currentPath == "/detail/shopping_card/order") {
        navigate("/login");
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <Spin size="large" fullscreen={true}/>
  }

  return (
    <div>
     <Routes>
   
    <Route path="/signup" element={<SignUpPage />} />
    <Route path="/login" element={<LoginPage />} />

  
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Main products={products} />} />
      <Route path="/detail/shopping_card" element={<ShoppingCard products={products} />} />
      <Route path="/detail/shopping_card/order" element={
        <LoginProtected user={user}>
          <Order />
        </LoginProtected>
      } />
      <Route path="/products" element={<Products />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<AboutUS />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>
  </Routes>
    </div>
  );
}

export default App;
