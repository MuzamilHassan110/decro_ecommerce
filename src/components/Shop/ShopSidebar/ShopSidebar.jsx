import "./ShopSidebar.scss";
import { Typography, Flex, Radio, Divider, Button, Drawer } from "antd";
import { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { MdLegendToggle } from "react-icons/md";
import { FaToggleOn } from "react-icons/fa";
import Brand from "./Brand";
import { fetchProductData } from "../../../redux/features/productsDetails";
import { useSelector,useDispatch } from "react-redux";



const { Title } = Typography;

const ShopSidebar = () => {
  
  const [value, setValue] = useState(1);
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [sortData, setSortData] = useState([]);

  const {products} = useSelector(state => state.products);
  
  const dispatch = useDispatch();

  useEffect( () => {
   setSortData(products)
  },[sortData])

  useEffect( () => {
    dispatch(fetchProductData)
  },[dispatch])

     const handleApicall=() =>{
        dispatch(fetchProductData(null))
  }

  const filterResult = async (cat) => {
    products.filter((product) => product.category === cat);
    dispatch(fetchProductData(`/category/${cat}`));
    
};

 const filterBrand = async (brand) => {
   products.filter((brn) => brn.brand === brand) ;
   dispatch(fetchProductData(`/search?q=${brand}`));  
 }

 const lowSortedItem = () => {
   const sortedData = [...products].sort((a, b) => a.price - b.price); 
   setSortData(sortedData)
    console.log("sortedData", sortedData)
  //  dispatch(fetchProductData(sortedData))
   };

   const highSortItem = () =>{
     const sortedData  = [...products].sort((a, b) => b.price - a.price);
     setSortData(sortedData)
     console.log("HighSortData", sortedData)
      // dispatch(fetchProductData(null))
   }


  const handleSort = () => {
    lowSortedItem(products);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const hideDrawer = () =>{
    setOpen(false)
  }
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
    
     <MdLegendToggle  className="response-toggle" onClick={showDrawer} />      
      <Drawer  onClose={onClose} open={open} closable = {false} >
      <FaToggleOn  className="btn-sidebar-close" onClick={hideDrawer}/>
      <Flex justify="space-between" className="sidebar-toggle">
        Sort By Price
        <PlusOutlined onClick={() => setToggle(!toggle)} />
      </Flex>
      {toggle ? (
        <>
        <div className="sidebar-sorting">
        <Button  onClick={handleSort}>
            Low price Item
          </Button>
          <br />
          <Button
          
            onClick={() => highSortItem(products)}
          >
            High Price Item
          </Button>
        </div>
         
        </>
      ) : null}

     <Divider />
      <div className="sidebar-catgory">
        <Title level={4} style={{ fontWeight: "bold" }} className="title-cagetory">
          Category
        </Title>
        <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
          <Flex gap={10} className="size-check">
            <Radio value={2} onClick={() => filterResult("laptops")}>
              <span className="text">Laptops</span>
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={3} onClick={() => filterResult("smartphones")}>
              SmartPhones
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={4} onClick={() => filterResult("fragrances")}>
              Fragrances
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={5} onClick={() => filterResult("skincare")}>
              Skincare
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={6} onClick={() => filterResult("groceries")}>
              Groceries
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={7} onClick={() => filterResult("home-decoration")}>
              Home-Decoration
            </Radio>
          </Flex>

          <Flex gap={10} className="size-check">
            <Radio value={1} onClick={handleApicall}>
              All
            </Radio>
          </Flex>
        </Radio.Group>
        <Divider />
      </div>

      <Brand
        filterResult={filterResult}
        handleApicall={handleApicall}
        filterBrand={filterBrand}
      />
      </Drawer>
    

    <div className="shop-siderbar">
     
      <Flex justify="space-between" className="sidebar-toggle">
          Sort By Price
        <PlusOutlined onClick={() => setToggle(!toggle)} />
      </Flex>
      {toggle ? (
        <>
        <div className="sidebar-sorting">
        <Button  onClick={lowSortedItem}>
            Low price Item
          </Button>
          <br />
          <Button
           
            onClick={highSortItem}
          >
            High Price Item
          </Button>
        </div>
         
        </>
      ) : null}

      <Divider />

      <div className="sidebar-catgory">
        <Title level={4} className="categroy">
          Category
        </Title>
        <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
          <Flex gap={10} className="size-check">
            <Radio value={2} onClick={() => filterResult("laptops")}>
              Laptops
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={3} onClick={() => filterResult("smartphones")}>
              SmartPhones
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={4} onClick={() => filterResult("fragrances")}>
              Fragrances
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={5} onClick={() => filterResult("skincare")}>
              Skincare
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={6} onClick={() => filterResult("groceries")}>
              Groceries
            </Radio>
          </Flex>
          <Flex gap={10} className="size-check">
            <Radio value={7} onClick={() => filterResult("home-decoration")}>
              Home-Decoration
            </Radio>
          </Flex>

          <Flex gap={10} className="size-check">
            <Radio value={1} onClick={handleApicall}>
              All
            </Radio>
          </Flex>
        </Radio.Group>

        <Divider />
      </div>

      <Brand
        filterResult={filterResult}
        handleApicall={handleApicall}
        filterBrand={filterBrand}
      />
    </div>
    </>
  );
};



export default ShopSidebar;
