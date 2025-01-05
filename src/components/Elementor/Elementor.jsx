
import { Typography, Row, Col } from "antd";
import "./Elementor.scss";
import banner1 from "../../images/banner1.jpg";
import banner2 from "../../images/banner2.jpg";


const {Title} = Typography;

const Elementor = () => {
  return (
    <>
    <div className="container">
    <div className="elementor">
  <Row gutter={[16, 16]}>
    <Col xs={24} sm={12}>
      <img src={banner1} alt="banner1" className="banner" />
      <div className="">
      <div className="banner1-other"># OTHER</div>
      <Title level={4} className="ele-title">
        Overear<br/>
        Headphone
      </Title>
      <Title level={4} className="ele-shop-now">
        Shop Now
      </Title>
      </div>
     
    </Col>
    <Col xs={24} sm={12}>
      <img src={banner2} alt="banner2" className="banner"/>
      <div className="">
      <div className="banner1-other"># OTHER</div>
      <Title level={4} className="ele-title">
            Woody<br/>
      for Paper Clips
      </Title>
      <Title level={4} className="ele-shop-now">
        Shop Now
      </Title>
      </div>
     
      <div className="ele-bottom-border"></div>
    </Col>
  </Row>
  </div>
    </div>
 
   
    </>
  );
};

export default Elementor;
