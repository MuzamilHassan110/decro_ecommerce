import { Outlet } from "react-router-dom"
import Header from "./Header/AppHeader";
import Footer from "./Footer/AppFooter";
import IconWarpper from './IconWrapper';


const Layout = ({handlLoggedOut}) => {

 
  return (
    <>
     <Header handlLoggedOut={handlLoggedOut} /> 
     <IconWarpper />
     <Outlet />   
     <Footer />
    </>
  )
}

export default Layout
