import { products } from "./Product";
import { Row, Col, Card } from "antd";

const { Meta } = Card;
import "./Products.scss";
const Products = () => {
  return (
    <>
      <div className="container">
        <Row gutter={[16, 16,16,16]}>
          <Col xs={24} sm={24} md={16}>
            <Row gutter={[16, 16]}>
              {products.slice(0, 3).map((product, index) => (
                <Col key={index} span={index === 2 ? 24 : 12}>
                  {/* <Card className="custom-card">
                <img className="img" alt={product.productName} src={product.productImage} />
                <div className="custom-title">{product.productName}</div>
              </Card> */}
                  <Card
                  // className="custom-card"
                    bordered={false}
                    cover={<img alt={product.productName} src={product.productImage}  />}
                  >
                    <Meta title={product.productName} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Row gutter={[16, 16, 16,16]} className="second_row">
              {products.slice(3).map((product, index) => (
                <Card
                className="custom-card"
                key={index}
                bordered={false}
              
                cover={<img alt={product.productName} src={product.productImage} className="image_side" />}
              >
                <Meta title={product.productName} />
              </Card>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Products;
