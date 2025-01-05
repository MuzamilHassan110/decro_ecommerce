import "./AppHeader.scss";
import { Layout, Menu, Flex, Drawer, Button,Form, Input } from "antd";

import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { RiLogoutCircleLine } from "react-icons/ri";
// import { RxCross1 } from "react-icons/rx";
import { NavLink, Link, useNavigate } from "react-router-dom";
//  import HoverShopDetails from "./HoverShopDetails";
import { useEffect, useState } from "react";
import AddToCartList from "../AddToCartList/AddToCartList";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import toggle_icon from "../../images/toggle-icon.png";
import { useDispatch, useSelector } from "react-redux";
import { changeCartItems } from "../../redux/features/cartSlice";

import Settings from "./Settings/Settings";


const { Header } = Layout;


const items = [
  {
    key: "home",
    label: <NavLink to="/">Home</NavLink>,
    children: [
      { label: "Home1", key: "Home1" },
      { label: "Home2", key: "Home2" },
      { label: "Home3", key: "Home3" },
      { label: "Home4", key: "Home4" },
    ],
  },
  {
    key: "shop",
    label: (
      // <Popover
      //   content={<HoverShopDetails />}
      //   trigger="hover"
      //   placement="bottom"
      // >
      <NavLink to="/shop">Shop</NavLink>
      // </Popover>
    ),
  },
  {
    key: "product",
    label: <NavLink to="/products">Product</NavLink>,
  },
  {
    key: "blog",
    label: <NavLink to="/blog">Blog</NavLink>,
  },
  {
    key: "pages",
    label: <NavLink to="/about">Pages</NavLink>,
  },
  {
    key: "contact",
    label: <NavLink to="/contact">Contact</NavLink>,
  },
];

const AppHeader = () => {
 
  const products = useSelector(state => state.products.products)

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isShown, setIsShown] = useState(false);
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSearch = () => {
    const result = products.filter(item => item.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    return setSearchResults(result);    
  }
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
        localStorage.removeItem("authToken");
        dispatch(changeCartItems([]));
        navigate("/login");
      });
    } catch (error) {
      console.log(error)
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

  const handleClick = () => {
    setIsShown((current) => !current);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Header className="app-header">
        <div className="header">
          <div>
            <NavLink to="/">
              <img
                src="https://demo80leotheme.b-cdn.net/prestashop/vt_decor/img/logo-1685434770.jpg"
                alt="Logo"
                className="logo"
              />
            </NavLink>
          </div>
          <>
            <div className="header-menu">
              <Menu
                className=""
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
              />
            </div>
          </>

         

          <Flex gap={12} className="header_icon">
            {/* {!searchToggle ? (
              <div className="search_box">
                <SearchOutlined
                  className="search-icon"
                  onClick={handleSearch}                  
                />
              
              </div>
            ) : (
              <>
              <div className="search_box">
                <RxCross1 className="search-icon" onClick={handleSearch} />          
              </div>
              </>
            )} */}
             <SearchOutlined
                  className="search-icon"
                  onClick={handleSearch}                  
                />

                <div className="user_details">
               <UserOutlined className="search-icon"  />
               <div className="settings">
                <Settings />
               </div>
                  
                </div>
                <div className="icon-container" onClick={handleClick} style={{ position: 'relative', display: 'inline-block' }}>
              <ShoppingCartOutlined className="search-icon" disabled={cartItems.length === 0} />
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </div>
          
          </Flex>
          <div className="login_sign_header">
            {!user ? (
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
                  Login
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
          </div>
        </div>

        {/* ____________________________________________________________________________ */}

        <img
          src={toggle_icon}
          alt="toggle"
          className="toggle-img"
          onClick={showDrawer}
        />

        <Drawer
          placement={"left"}
          width={200}
          open={open}
          closable={false}
          onClose={onClose}
          className="drawer"
        >

         
              <Menu
                className=""
                onClick={onClick}
                selectedKeys={[current]}              
                items={items}
              />
           
        
        </Drawer>
      </Header>
      {isShown && <AddToCartList handleClick={handleClick} />}
      {searchToggle && 
    
          <Form className="searchBar" onFinish={onSearch}>
            <Form.Item>
                <Input
                   placeholder= "Search Products"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="search_item"
                   suffix={<Button htmlType="submit"><SearchOutlined className="search"/></Button>}
                />
            </Form.Item>
        </Form>
   
      }


      <ToastContainer />
    </>
  );
};

export default AppHeader;
