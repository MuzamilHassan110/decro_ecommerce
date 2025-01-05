import "./Shop.scss";
import ShopProductList from "./ShopProductsList/ShopProductList";
import ShopSidebar from "./ShopSidebar/ShopSidebar";
import { Col, Row } from "antd";
const Shop = () => {
  return (
    <>
      <div className="container">
        <Row gutter={0} className="row">
          <Col xs={24} md={6} sm={24}>
            <div className="shop_sidebar">
              <ShopSidebar />
            </div>
          </Col>
          <Col xs={24} md={18} sm={24} className="shopProductList">
            <ShopProductList />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Shop;
