import "./ShopProductList.scss";
import { useState } from "react";
import { Button, Row, Col } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddToCart from "../../AddToCard/AddToCart";

const ShopProductList = () => {
  const { products } = useSelector((state) => state.products);
  console.log("Productsadsfasdf", products)

  const [colValue, setColValue] = useState({ xs: 24, sm: 12, md: 12, lg: 8 });

  const handleColumnChange = (value) => {
    let newValue;
    switch (value) {
      case 1:
        newValue = { xs: 24, sm: 24, md: 24, lg: 24 };
        break;
      case 2:
        newValue = { xs: 24, sm: 24, md: 12, lg: 12 };
        break;
      case 3:
        newValue = { xs: 24, sm: 12, md: 8, lg: 8 };
        break;
      case 4:
        newValue = { xs: 24, sm: 12, md: 6, lg: 6 };
        break;
      default:
        newValue = { xs: 24, sm: 12, md: 8, lg: 6 };
    }
    setColValue(newValue);
  };

  return (
    <div className="showList">
      <div className="product_icon_show">
        <div className="product-items">
          <Button onClick={() => handleColumnChange(1)}>
            <div className="three-in"></div>
          </Button>
        </div>
        <div className="product-items">
          <Button onClick={() => handleColumnChange(2)}>
            <div className="three-in"></div>
            <div className="three-in"></div>
          </Button>
        </div>
        <div className="product-items">
          <Button onClick={() => handleColumnChange(3)}>
            <div className="three-in"></div>
            <div className="three-in"></div>
            <div className="three-in"></div>
          </Button>
        </div>
        <div className="product-items">
          <Button onClick={() => handleColumnChange(4)}>
            <div className="three-in"></div>
            <div className="three-in"></div>
            <div className="three-in"></div>
            <div className="three-in"></div>
          </Button>
        </div>
      </div>

      <div>
        <Row
          gutter={[16, 16]}
          style={{ marginTop: "2rem" }}
          className="image_box"
        >
          {products.map((item, index) => (
            <Col {...colValue} key={index}>
              <div className="image">
                <Link to={`/detail/${item.id}`}>
                  <img src={item.thumbnail} className="img-contain" />
                </Link>
              </div>
              <div className="shop_btn">
                <AddToCart product={item} />
              </div>
              <div className="shop-title">{item.title}</div>
              <div className="shop-price">${item.price}</div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ShopProductList;
