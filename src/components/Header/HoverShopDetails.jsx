import { Row, Col, Typography, Image} from "antd"

import { useSelector } from "react-redux";

const {Text} = Typography;

  
const HoverShopDetails = () => {
    // const [showSmartPhones, setShowSmartPhones] = useState([]);
    // const [showLaptops, setShowLapTops] = useState([]);
    // const [showFragrances, setShowFragrances] = useState([]);

    const {products} = useSelector(state => state?.products);
    console.log("Products", products)

    const beauty = products?.filter(product => product.category === "beauty");
    const furniture = products?.filter(product => product.category === "furniture")
    const fregrance = products?.filter((product) => product.category === "fragrances")
console.log(fregrance)
    // useEffect(() => {
    //   if (products && Array.isArray(products)) {
    //     const filterSmartPhones = () => {
    //       const filterProduct = products.filter((product) => product.category === "smartphones");
    //       setShowSmartPhones(filterProduct);  
    //       console.log("showSmartPhones", filterProduct);                   
    //     };
    
    //     filterSmartPhones();
    //   }
    // }, [products]);
  
  // useEffect ( () => {
  //     const filterLaptops = products.filter((filLap) => filLap.category === "laptops");
  //     setShowLapTops(filterLaptops);
  //     console.log(showLaptops, "Products")
  // }, [products])
  
  // useEffect ( () => {
  //     const filterFragrances = products.filter((filFarg) => filFarg.category === "fragrances");
  //     setShowFragrances(filterFragrances); 
  //     console.log("showFragrances", showFragrances)
  // },[products])
  return (
    <>
       <div className="container" >
      <Row gutter={[16, 16]}>
        <Col span={4}>
        <Text className="title-text">Beauty</Text>
           {beauty?.map((product, index) => (         
       
      <div key={index} className="title-name">
          {product.title}
      </div>
       ))}
        </Col>
        <Col span={4}>
        <Text className="title-text">Furniture</Text>
       {furniture?.map((product, index) => (         
        <div key={index} className="title-name">
        {product.title}
    </div>
        
       ))}
        </Col>
        <Col span={4}>
            <Text className="title-text">Fragrances</Text>
        {fregrance?.map((product, index) => (         
      <div key={index} className="title-name">
      {product.title}
  </div>
        
       ))}
        </Col>
        <Col span={4}> 
        <Image className="title-image" src="https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png" width={"100%"} height={"100%" } />

            
        {/* <Row gutter={[16, 16]}>
          <Flex style={{marginLeft: "10rem"}}>
        <Col span={8}>
        <Image className="title-image" src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" width={"100%"} height={"100%" } />
        </Col>
        <Col span={8}>
        <Image src="https://cdn.dummyjson.com/product-images/7/thumbnail.jpg" width={"100%"} height={"100%"}/>
        </Col>
        <Col span={8}>
        <Image src="https://cdn.dummyjson.com/product-images/14/thumbnail.jpg" width={"100%"} height={"100%"}/>
        
        </Col>
        </Flex>
       </Row> */}
        </Col>
        <Col span={4}>
        <Image className="title-image" src="https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/1.png" width={"100%"} height={"100%" } />

        </Col>
        <Col span={4}>
        <Image className="title-image" src="https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png" width={"100%"} height={"100%" } />

        </Col>
      </Row>
      
      
      </div>
      
    </>
  )
}


export default HoverShopDetails
