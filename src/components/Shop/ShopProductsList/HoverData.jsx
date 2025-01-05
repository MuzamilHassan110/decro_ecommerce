// import { Row, Col, Typography, Image} from "antd"
// import PropTypes from "prop-types"
// import { useEffect, useState } from "react"

// const {Text} = Typography;
// const HoverData = ({products}) => {

//     const [showSmartPhones, setShowSmartPhones] = useState([]);
//     const [showLaptops, setShowLapTops] = useState([]);
//     const [showFragrances, setShowFragrances] = useState([]);

   
//     useEffect( () => { 
//         const filterSmartPhones = () => {
//             const filterProduct = products.filter((product) => product.category === "smartphones");
//             setShowSmartPhones(filterProduct);                     
//           }

//           filterSmartPhones()
//     }, [products])

//     useEffect ( () =>{
//         const filterLaptops = products.filter((filLap) => filLap.category === "laptops");
//         setShowLapTops(filterLaptops);
//     }, [products])

//     useEffect ( () => {
//         const filterFragrances = products.filter((filFarg) => filFarg.category === "fragrances");
//         setShowFragrances(filterFragrances); 
//     })


   
//   return (
//     <>
//      <div className="hover-container">
//       <Row gutter={[16, 16]}>
//         <Col span={4}>
//         <Text className="title-text">SmartPhones</Text>
//        {showSmartPhones.map((product, index) => (         
//          <Col span={8} key={index} className="title-name"> {product.title} </Col>
        
//        ))}
//         </Col>
//         <Col span={4}>
//         <Text className="title-text">Laptops</Text>
//        {showLaptops.map((product, index) => (         
//          <Col span={8} key={index} className="title-name" > {product.title} </Col>
        
//        ))}
//         </Col>
//         <Col span={4}>
//             <Text className="title-text">Fragrances</Text>
//         {showFragrances.map((product, index) => (         
//          <Col span={8} key={index} className="title-name"> {product.title} </Col>
        
//        ))}
//         </Col>
//         <Col span={12}>        
            
//         <Row gutter={16}>
//         <Col span={8}>
//         <Image className="title-image" src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" width={"100%"} height={"150%" } />

//         </Col>
//         <Col span={8}>
//         <Image src="https://cdn.dummyjson.com/product-images/7/thumbnail.jpg" width={"100%"} height={"150%"}/>
//         </Col>
//         <Col span={8}>
//         <Image src="https://cdn.dummyjson.com/product-images/14/thumbnail.jpg" width={"100%"} height={"150%"}/>
        
//         </Col>
//        </Row>
//         </Col>
//       </Row>
      
      
//      </div>
//     </>
//   )
// }

// HoverData.propTypes = {
//     products:PropTypes.array.isRequired,


// }
// export default HoverData
