import "./Descripation.scss";
import { Typography, Flex } from "antd";
import { Link } from "react-router-dom";
import SizeGuid from "../SizeGuid/SizeGuid";
import Stars from "../Stars/Stars";
import {
  FacebookFilled,
  TwitterCircleFilled,
  PinterestOutlined,
} from "@ant-design/icons";
import Write_Rewiews from "../Write_Rewiews/Write_Rewiews";
import Policy from "../../Policy";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { Text, Title } = Typography;
import axios from "axios";
import ReadReviews from "../ReadReviews/ReadReviews";
import AddToCart from "../../AddToCard/AddToCart";
const Descripation = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [dataFromChild, setDataFromChild] = useState("");

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="main-container">
      <div className="stack">
        <Flex gap="large">
          <Text className="stock">In Stock </Text>
          <Text className="item">{product.stock} Items</Text>
        </Flex>
      </div>
      <div className="des-title">
        <Title level={2} className="teapot" strong>
          {product.title}
        </Title>
      </div>

      <div className="flex_issus">
        <div>
          <div>
            <Stars stars={product.rating} />
          </div>

          <div className="reviews-container">
            <Link className="review-link">
              <div style={{ whiteSpace: "nowrap" }}>
                <ReadReviews
                  reviews={product.reviews}
                  product={product}
                  dataFromChild={dataFromChild}
                />
              </div>
            </Link>
            <Link className="review-link">
              <Write_Rewiews
                product={product}
                sendDataToParent={handleDataFromChild}
              />
            </Link>
          </div>
        </div>
      </div>

      <Flex gap={"large"} className="price">
        <Text className="del-price" delete>
          {product.discountPercentage}
        </Text>
        <Text className="new-price">${product.price}</Text>
        <Text className="save">SAVE 20%</Text>
      </Flex>
      <div style={{ color: "#999", marginTop: "20px" }}>
        <div>
          <span>{product.description}</span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>
            Symbol of lightness and delicacy, the hummingbird evokes curiosity
            and joy. Studio Design PolyFaune collection features classic
            products with colorful patterns, inspired by the traditional
            japanese origamis. To wear with a chino or jeans. The sublimation
            textile printing process provides an exceptional color rendering and
            a color, guaranteed overtime.
          </span>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <SizeGuid dimensions={product.dimensions} product={product} />
      </div>

      <div>
        <Flex gap={120} style={{ marginTop: "10px" }}>
          weight
          <strong> {product.weight}</strong>
        </Flex>

        <Flex gap={50} className="size-box">
          <div className="size" style={{ marginTop: "8px" }}>
            Size
          </div>
          <Flex gap={25}>
            <div className="size-item">S</div>
            <div className="size-item">M</div>
            <div className="size-item">L</div>
            <div className="size-item">XL</div>
          </Flex>
        </Flex>
      </div>

      <div>
        <Flex
          // alignItems="center"
          gap={"3.4em"}
          style={{ marginTop: "2rem" }}
          className="colors"
        >
          <div style={{ marginRight: "4.5rem" }}>Color</div>
          <div className="white-color"></div>
          <div className="black-color"></div>
        </Flex>
      </div>
      <div>
        <div className="add-to-product">
          <AddToCart product={product} />
        </div>

        <Flex gap={36} style={{ marginTop: "20px" }}>
          WarrantyInformation
          <Text strong>{product.warrantyInformation}</Text>
        </Flex>
        <Flex gap={36} style={{ marginTop: "10px" }}>
          ShippingInformation
          <Text strong>{product.shippingInformation}</Text>
        </Flex>
        <Flex gap={60} style={{ marginTop: "10px" }}>
          AvailabilityStatus
          <Text strong>{product.availabilityStatus}</Text>
        </Flex>

        <div className="line">
          <div className="product-manufacturer">
            <Flex
              gap="8.8em"
              style={{ marginTop: "1rem" }}
              className="manufacturer"
            >
              <Text>Brand:</Text>
              <a href="#">
                <Text strong>{product.brand}</Text>
              </a>
            </Flex>
          </div>
          <div className="productcats">
            <Flex
              gap="6rem"
              style={{ marginTop: "1rem" }}
              className="categories"
            >
              <Text className="category">Categories:</Text>
              <Flex gap={"middle"} className="categories_type">
                <Text strong>
                  <a href="#">Home</a>&nbsp;
                  <a href="#">{product.category}</a>&nbsp;
                  <a href="#">Men</a>
                </Text>
              </Flex>
            </Flex>
            <div>
              <Flex
                gap="6.4rem"
                style={{ marginTop: "1rem" }}
                className="reference"
              >
                <Text>Reference</Text>
                <Text strong> demo_1</Text>
              </Flex>
            </div>
          </div>
        </div>
        <div>
          <Flex gap="8rem" align="center" className="shares">
            <Text style={{ marginTop: "1em" }}>Share</Text>
            <Flex gap="1rem" className="icons" style={{ marginTop: "1em" }}>
              <FacebookFilled className="icon-style" />
              <TwitterCircleFilled className="icon-style" />
              <PinterestOutlined className="icon-style" />
            </Flex>
          </Flex>
        </div>
        <div className="policy">
          <Policy />
        </div>
      </div>
    </div>
  );
};

export default Descripation;
