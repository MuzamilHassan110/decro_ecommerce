import { HeartOutlined, PlusOutlined } from "@ant-design/icons";
import { Row, Col, Carousel, Button, Flex } from "antd";
 import { Link } from "react-router-dom";
import "./ProductList.scss";
import AddToCart from "../AddToCard/AddToCart";
import { useSelector } from "react-redux";


const ProductsList = () => {

  let {products} = useSelector(state => state?.products) 

  return (
    <>
      <div className="container">
        <Carousel draggable dots={false}>
          <div>
            <div className="">
              <Row gutter={[16, 16]}>
                {products.slice(0, 4).map((product, index) => (
                  <Col key={index} xs={24} sm={12} xl={6}  className="card-show">
                    <div >
                      <Link to={`/detail/${product.id}`}>                       
                     <div className="image_container">
                     <img
                        src={product.thumbnail}
                        alt={product.productName}
                        className="product-image"
                      />
                     </div>
                      </Link>
                      <Link>
                      <AddToCart product = {product} />
                      </Link>
                      <div className="product-title">{product.title}</div>
                      <div className="product-price">${product.price}</div>
                    </div>
                    <div className="heartImage">
                      <HeartOutlined className="heart-icon" />
                    </div>
                    <div></div>
                  </Col>
                ))}
              </Row>
            </div>

            <Row gutter={[16]}>
              {products.slice(5, 9).map((product, index) => (
                <Col key={index} xs={24} sm={12} xl={6} className="card-show">
                  <div >
                  <Link to={`/detail/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.productName}
                      className="product-image"
                      />
                      </Link>
                    <AddToCart product = {product}  />
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">${product.price}</div>
                  </div>
                  <div className="heartImage">
                    <HeartOutlined className="heart-icon" />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row gutter={[16]}>
              {products.slice(10, 13).map((product, index) => (
                <Col key={index} xs={24} sm={12} xl={6} className="card-show">
                  <div >
                  <Link to={`/detail/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.productName}
                      className="product-image"
                    />
                    </Link>
                    <AddToCart product = {product} />
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">${product.price}</div>
                  </div>
                  <div className="heartImage">
                    <HeartOutlined className="heart-icon" />
                  </div>
                </Col>
              ))}
            </Row>
            <Row gutter={[16]}>
              {products.slice(15, 19).map((product, index) => (
                <Col key={index} xs={24} sm={12} xl={6} className="card-show">
                  <div >
                  <Link to={`/detail/${product.id}`}>
                    <img
                      src={product.thumbnail}
                      alt={product.productName}
                      className="product-image"
                    />
                  </Link>
                    <AddToCart product = {product} />
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">${product.price}</div>
                  </div>
                  <div className="heartImage">
                    <HeartOutlined className="heart-icon" />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Carousel>

        <div className="show-allProducts">
            <Link to={"/products"}>
           <Flex justify="center">
            <Button>
              <Flex justify="center" align="center" gap={6}>
              <PlusOutlined /> See All Products
              </Flex>
              <div className="all_products_btn"></div>
           </Button>
            </Flex>
            </Link>
        
        </div>
      </div>
    </>
  );
};

export default ProductsList;
