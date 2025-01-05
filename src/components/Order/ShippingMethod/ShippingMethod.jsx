import "./ShippingMethod.scss";
import { Flex, Radio, Image, Typography, Input, Button  } from "antd";
const { Title, Text } = Typography;
const {TextArea} = Input;
const ShippingMethod = () => {
  const imgUrl = "https://demo80.leotheme.com/prestashop/vt_decor/img/s/2.jpg";
  return (
    <>
  
          <div className="shipping_method">
            <Flex gap={4} className="shipping_res">
            <Flex gap={24} className="shipping_">
              <div className="shipping_circle">
                <Radio></Radio>
              </div>
              <Image src={imgUrl} className="ship_img"/>
              <div className="shipping_carrier">
                <Title level={3} style={{ paddingBottom: "1em" }} className="_carrier" >
                  My carrier
                </Title>
              </div>
              </Flex>
              <div className="sipping_delivery">
                <Flex gap={60} className="shipping_flex">
                  <Text>Delivery next day!</Text>
                  <Text>$7.00</Text>
                </Flex>
              </div>
            </Flex>
            
          </div>
            <div className="shipping_bottom">
                <Text>If you would like to add a comment about your order, please write it in the field below.</Text>
                <TextArea  />
            </div>
            <Flex className="btn_shipping" justify="flex-end" >
                <Button>Continue</Button>
               </Flex>
       
    </>
  );
};

export default ShippingMethod;
