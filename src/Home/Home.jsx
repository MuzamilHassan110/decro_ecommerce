import ProductsList from "../components/ProducstList/ProductsList";
import Products from "../components/Products/Products";
import  Element_Section from "../components/Elementer_Section/Elementor_Section";
import Elementor from "../components/Elementor/Elementor";
import IconWarpper from "../components/IconWrapper";

const Home = () => {
  return (
    <>
     <Products /> 
     <ProductsList />
     <Elementor />
     <Element_Section />
     <IconWarpper />   
    
    </>
  )
}

export default Home

