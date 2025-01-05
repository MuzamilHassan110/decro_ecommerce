 import PersonalInformation from "./InformationDetails/PersonalInformation";
import ItemsDetails from "./ItemsDetails/ItemsDetails"
import { Col, Row } from "antd"



const Order = () => {
  return (
    <>
    <div className="container">
    <Row gutter={[16, 16]} >
        <Col xl={16} lg={16} md={24} sm={24} xs={24} gap= {30}>
          <div>
        <PersonalInformation />
          </div>
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24} >
        <ItemsDetails /> 
        </Col>
    </Row>
    </div>
    
      
     
    </>
  )
}

export default Order
