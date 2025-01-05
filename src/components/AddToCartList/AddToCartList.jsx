import { Flex, Image, Row, Col, Typography, Button } from "antd";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { deleteToCart, addToCart, removeFromCart } from "../../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeFromCart } from "../../redux/features/Prices/prices";

import "./AddToCartList.scss";

const { Title, Text } = Typography;

const AddToCartList = ({ handleClick }) => {
  // const cartSlice = useSelector((state) => state.cartSlice.cartItem);
  // const subTotal = useSelector((state) => state.cartSlice.price);
  const {prices} = useSelector((state) => state.cartSlice);
  const {quantities} = useSelector((state) => state.cartSlice);
  const {cartItems} =useSelector((state) => state.cartSlice)


  const dispatch = useDispatch();

  const handleDelete = (item) => {
    dispatch(deleteToCart(item));
  };

  const handleIncrement = (product) => {
    dispatch(addToCart({ id: product.id, price: product.price }));
  };

  const handleDecrement = (product) => {
    if (quantities[product.id] > 1) {
      dispatch(removeFromCart({ id: product.id, price: product.price }));
    }
  };

  const subtotal = cartItems.reduce((sum, product) => {
    const price = prices[product.id] || product.price;
    const quantity = quantities[product.id] || 1;
    return sum + price * quantity;
  }, 0);

  const taxes = 3.07;
  const shipping = 7.01;
  const total = subtotal + taxes + shipping;

  if(cartItems.length  === 0) {
    return null
  }
  return (
    <>
      <div className="list_container">
        <>
          <div className="inner_container">
            {cartItems.map((item, index) => {
              const quantity = quantities[item.id] || 1;

              return (
                <div key={index}>
                  <Row gutter={[16, 16]}>
                    <Col span={10}>
                      <Image
                        src={item.thumbnail}
                        width={"100%"}
                        height={"100%"}
                      />
                    </Col>
                    <Col span={10}>
                      {item.title}
                      <br />
                      <strong> ${item.price}</strong>
                      <br />
                      {/* <div className="shop_input">
                        <div
                          className="container"
                          style={{ marginTop: "0.345em" }}
                        >
                          <button
                            className="decrement"
                            onClick={() => handleDecrement(item)}
                          >
                            -
                          </button>
                          <input type="text" value={quantity} readOnly />
                          <button
                            className="increment"
                            onClick={() => handleIncrement(item)}
                          >
                            +
                          </button>
                        </div>
                      </div> */}
                        <div className="shop_input">
                            <div className="button_container" style={{ marginTop: "0.345em" }}>
                              <button className="decrement" onClick={() => handleDecrement(item)}> - </button>
                              <input type="text" value={quantity} readOnly />
                              <button className="increment" onClick={() => handleIncrement(item)}> + </button>
                            </div>
                               </div>
                       
                    </Col>
                    <Col span={4}>
                      <MdDelete
                        className="cart_delete"
                        onClick={() => handleDelete(item)}
                      />
                    </Col>
                  </Row>

                  <div className="cart_bottom_broder"></div>
                </div>
              );
            })}
          </div>






          <div className="cart_bottom_broder"></div>
          <div className="shipping_details">
            <Flex gap={150}>
            <Text>Subtotal</Text>
              <Title>${subtotal.toFixed(2)}</Title>
            </Flex>
            <Flex gap={150}>
              <Text>Shipping</Text>
              <Title>${shipping}</Title>
            </Flex>
            <Flex gap={170}>
              <Text>Taxes</Text>
              <Title>${taxes}</Title>
            </Flex>
            <div className="cart_bottom_broder"></div>
            <Flex gap={170}>
              <Text>Total</Text>
              <Title>${total.toFixed(2)}</Title>
            </Flex>
          </div>
          <Flex
            justify="center"
            align="center"
            style={{ flexDirection: "row", gap: "24px" }}
            gap={24}
          >
            <div className="modal_btn" >
              <Link to="/detail/shopping_card">
                <Button style={{ marginRight: "10px"  }} onClick={handleClick}>
                  View Cart
                </Button>
              </Link>
              <Link to="/detail/shopping_card/order">
                <Button onClick={handleClick}>Check Out</Button>
              </Link>
            </div>
          </Flex>
        </>
      </div>
    </>
  );
};
AddToCartList.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
export default AddToCartList;
