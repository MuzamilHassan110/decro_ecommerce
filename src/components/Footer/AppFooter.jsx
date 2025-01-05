import "./AppFooter.scss";
import { Row, Col, Divider, Input, Flex } from "antd";
import {
  FacebookFilled,
  TwitterCircleFilled,
  GooglePlusCircleFilled,
} from "@ant-design/icons";
const AppFooter = () => {
  return (
    <>
      <footer className="footer">
        <Divider className="divider" />

        <Row gutter={[16, 16]} className="footer">
          <Col xs={24} sm={24} md={6}>
            <div className="logo_content">
            <img
              src="https://demo80leotheme.b-cdn.net/prestashop/vt_decor/img/logo-1685434770.jpg"
              alt="Logo"
              className="logo"
            />
            </div>
      
            <div className="footerContent">
              2593 Timbercrest Road, Chisana, Alaska Badalas United States
            </div>
            <div className="footerContent">(+01)2-345-6789</div>
            <div className="footerContentEmail">
              [email protected]
              <div className="broder_email"></div>
            </div>
            
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="header_link">
            <div className="footerTitle">Our Products</div>
            <div className="product">Bestsellers</div>
            <div className="product">New In</div>
            <div className="product">Chairs</div>
            <div className="product">Sofas</div>
            </div>
            
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div  className="header_link">
            <div className="footerTitle">Useful Links</div>
            <div className="usefulLink">About Us</div>
            <div className="usefulLink">Blog</div>
            <div className="usefulLink">FAQs</div>
            <div className="usefulLink">Contact</div>
            </div>
           
          </Col>
          <Col xs={24} sm={24} md={6}>
            <div className="header_news">
            <div className="footerTitle">Newsletter</div>
            <div className="newsLetter">
              Stay Updated on all thats new and noteworthy
            </div>
            <div style={{ marginBottom: "16px" }}>
              <Flex gap={15}>
              
                <Input
                  className="input"
                  placeholder="Your Email Address"
                  type="email"
                />
                <button style={{ marginTop: "30px" }}>SUBSCRIBE</button>
              </Flex>
            </div>
            <div className="icon">
              <FacebookFilled className="icon-style" />
              <TwitterCircleFilled className="icon-style" />
              <GooglePlusCircleFilled className="icon-style" />
            </div>
            </div>
          </Col>
        </Row>
        <Divider className="divider_bottom" />

        <Flex justify="space-between" className="copy_logo">
          <div className="copy_right">
            Copyright © 2023 Decor. All rights reserved.
          </div>
          <div className="header_imges">
            <img
              src="https://cdn.shopify.com/s/files/1/0577/9675/5633/files/vt_decor_home1-card.png?v=1677678429"
              alt="Decor Image"
              width={"500%"}
              className="logo_image"
            />
          </div>
        </Flex>
      </footer>
    </>
  );
};

export default AppFooter;
