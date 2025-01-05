import "./ItemsDetails.scss";
import Policy from "../../Policy";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Divider, Typography, Flex } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const ItemsDetails = () => {
  const [toggle, setToggle] = useState(true);
  const {prices} = useSelector((state) => state.cartSlice);
  const {quantities} = useSelector((state) => state.cartSlice);
  const {cartItems} =useSelector((state) => state.cartSlice)


  const subtotal = cartItems.reduce((sum, product) => {
    const price = prices[product.id] || product.price;
    const quantity = quantities[product.id] || 1;
    return sum + price * quantity;
  }, 0);

  const taxes = 3.07;
  const shipping = 7.01;
  const total = subtotal + taxes + shipping;

  return (
    <>
      <div className="show-details-items">
        <Text className="total-item">
            Items: <strong> {cartItems.length } </strong>
        </Text>
        <br />
        <div>
          <Text onClick={() => setToggle(false)} className="">
            Show detail
            {toggle ? <DownOutlined /> : <UpOutlined />}
          </Text>
        </div>
        <Divider />

        <div className="items-price">
          <Flex justify="space-between">
            <Text className="items-price">Subtotal</Text>
            <Text className="items-price">${subtotal.toFixed(2)}</Text>
          </Flex>
        </div>
        <div className="items-price">
          <Flex justify="space-between">
            <Text className="items-price">Shipping</Text>
            <Text className="items-price">${shipping}</Text>
          </Flex>
        </div>
        <Divider />
        <div className="items-price">
          <Flex justify="space-between">
            <Text className="items-price">Total (tax excl.)</Text>
            <Title level={5} className="items-price">
              ${taxes}
            </Title>
          </Flex>
        </div>
        <div className="items-price">
          <Flex justify="space-between">
            <Text className="items-price">Total </Text>
            <Title level={5} className="items-price">
              ${total.toFixed(2)}
            </Title>
          </Flex>
        </div>
        <div className="items-price">
          <Text>Taxes: </Text>
          <span style={{ fontWeight: "bold" }}>$0.00</span>
        </div>
      <Policy />
      </div>
    </>
  );
};

export default ItemsDetails;
