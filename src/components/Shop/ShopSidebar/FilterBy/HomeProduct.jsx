import { Typography, Flex} from "antd"
import {PlusOutlined } from "@ant-design/icons"

const {Title, Text} = Typography
const HomeProduct = () => {
  return (
    <div className="home">
     <Title level={4} style={{paddingBottom: "12px"}}>Home</Title>
     <Flex gap={140}>
        <div className="main-clothes">
        <Flex gap={10}>
        <div className="clothes-circle">         
        </div> 
        <Text className="clothes">Clothes</Text>
        </Flex>
        </div>
        <PlusOutlined />        
     </Flex>

    <div className="accessories-container">
      <Flex gap={115}>
        <div className="main-clothes">
        <Flex gap={10}>
        <div className="clothes-circle">         
        </div> 
        <Text className="clothes">Accessories</Text>
        </Flex>
        </div>
        <PlusOutlined />        
     </Flex>
     </div>

     <div className="accessories-container">
      <Flex gap={76}>
        <div className="main-clothes">
        <Flex gap={10}>
        <div className="clothes-circle">         
        </div> 
        <Text className="clothes">Art</Text>
        </Flex>
        </div>
            
     </Flex>
     </div>
     <div className="border-bottom"></div>
    </div>
  )
}

export default HomeProduct
