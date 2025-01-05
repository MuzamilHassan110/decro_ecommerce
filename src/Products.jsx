import {Row, Col} from "antd"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import AddToCart from "./components/AddToCard/AddToCart";
import { HeartOutlined } from "@ant-design/icons";

const Products = () => {
    const {products} = useSelector(state => state.products);
  
  return (
    <div className="container" style={{marginRight: "3em"}}>
      <Row gutter={[16, 16]}>
        {products.map((product, index) => {
            return (
             <div key={index}>
                       <Col key={index} sm={24} xs={24} md={24} lg={24} className="card-show">
                    <div >
                      <Link to={`/detail/${product.id}`}>                       
                     <div className="">
                     <img
                        src={product.thumbnail}
                        alt={product.productName}
                        className="product-image"
                        width={"100%"}
                        height={"100%"}
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
             </div>
            )
        } )}
      </Row>
    </div>
  )
}

export default Products
