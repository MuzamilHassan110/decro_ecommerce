import { Typography, Row, Col, Image } from "antd";
import { Link } from "react-router-dom";

const {Title, Text} = Typography;

const AboutUS = () => {
  return (
    <div className="container">

      <Title level={3} style={{marginTop: "4em"}}>Auros - Powerful Theme for Shop</Title>
      <Text>Auros curates a selection of objects focused on quality, minimalism, and functionality. Our mission is to provide a unique set of products that fascinate and inspire the user. We review each product, down to its packaging, to ensure that we continuously provide the best in both quality and design.</Text><br/> <br/> 
      <Text italic>Our selection of products are designed and imported from all over the world. Whether from Denmark or Japan, some of these items have never received exposure in the United States. In addition, we are the exclusive North American distributor for a number of brands found within our store.</Text><br /><br />
      <Text>
      We’re happy to help. If you have any questions regarding a product or an order, please feel free to reach out to us at info@domain.com.
      </Text>
      <Row gutter={[16, 16]} style={{marginTop: "4em"}}>
        <Col xl={12} lg={12} md={24} sm={24}>
            <Image src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/vt_decor_cms_about_1.jpg?v=1685091819" alt="image"/>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24}>
            <Link to={"/shop"}>
            <Image src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/vt_decor_cms_about_2.jpg?v=1685091819" alt="image"/>
            </Link>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{marginTop: "4em"}}>
        <Col xs={12} sm={12} lg={6} xl={6}>
        <Link to={"/shop"}>
        <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/m/1-brand_default.jpg" />   
        </Link>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
        <Link to={"/shop"}>
        <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/m/2-brand_default.jpg" />   
        </Link>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
        <Link to={"/shop"}>
        <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/m/3-brand_default.jpg" />   
        </Link>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
        <Link to={"/shop"}>
        <img src="https://demo80.leotheme.com/prestashop/vt_decor/img/m/4-brand_default.jpg" />   
        </Link>
        </Col>
      </Row>
    </div>
  )
}

export default AboutUS
