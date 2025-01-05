import { Flex, Typography } from "antd";
import "./Elementot_section.scss";

const { Title, Text } = Typography;
const Elementor_Section = () => {
  return (
    <div className="container">
     <Flex className="Elementor_section" align="center" justify="center" gap={24} >      
       
          <Title level={3} className="elementor_description">
            Very good Design. Flexible. Fast Support.
          </Title>
          <div>
            <Text>— Steve John (customer)</Text>
          </div>
       
     
    </Flex>
    </div>
   
  );
};

export default Elementor_Section;
