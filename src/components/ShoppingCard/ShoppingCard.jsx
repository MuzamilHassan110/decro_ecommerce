import "./Shopping.scss";
import { DeleteFilled } from "@ant-design/icons";
import { Col, Divider, Row, Typography, Image, Button, Flex } from "antd";
import ProceedToCheckOutButton from "../ProceedeToCheckOutButton/ProceedToCheckOutButton";
import Policy from "../Policy";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart, addToCart, removeFromCart } from "../../redux/features/cartSlice";


const { Title, Text } = Typography;

const ShoppingCard = () => {

  const dispatch = useDispatch();
  const prices = useSelector((state) => state.cartSlice.prices);
  const quantities = useSelector((state) => state.cartSlice.quantities);
  const { cartItems } = useSelector((state) => state.cartSlice);
 

  const handleDelete = (product) => {
    dispatch(deleteToCart(product));
  };

  const handleIncrement = (product) => {
    dispatch(addToCart({ id: product.id, price: product.price }));
  };

  const handleDecrement = (product) => {
    if (quantities[product.id] > 1) {
      dispatch(removeFromCart({ id: product.id, price: product.price }));
    }
  };

  const totalItems = cartItems.length;
  const totalPrice = cartItems.reduce((sum, product) => {
    const price = prices[product.id] || product.price;
    const quantity = quantities[product.id] || 1;
    return sum + (price * quantity);
  }, 0);

  const shippingCost = 7.01;
  const taxExcl = 3.07;
  const taxIncl = 10.08;
  const taxes = 0.0;
  const grandTotal = totalPrice + shippingCost + taxExcl + taxes;

  return (
    <>
      {cartItems.length !== 0 ? (
        <div className="container">
          <Title level={3} style={{ marginLeft: "2em" }}>Shopping Cart</Title>
          <Row gutter={[30, 16]} style={{ margin: "2rem", overflow: "hidden" }} gap={30}>
            <Divider />
            <Col xl={16} lg={16} md={24} sm={24} xs={24}>
              {cartItems.map((product, index) => {
                const price = prices[product.id] || product.price;
                const quantity = quantities[product.id] || 1;
                if (quantity > 0) {
                  return (
                    <div key={index} style={{ marginBottom: "2em" }}>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                          <Image src={product.thumbnail} width={"100%"} height={"100%"} />
                        </Col>
                        <Col xs={24} sm={12} md={16} lg={8} xl={6} xxl={6}>
                          <Title level={5}>
                            <Link>{product.title}</Link>
                          </Title>
                          <div className="shopping_price">
                            <Text delete>${product.discountPercentage}</Text>
                            <Title level={5}>${product.price}</Title>
                          </div>
                          <Text>Brand:</Text> <Text strong>{product.brand}</Text>
                          <br />
                          <Text>Category: </Text>
                          <Text strong>{product.category}</Text>
                        </Col>
                        <Col xs={12} sm={8} md={6} lg={4} xl={4} xxl={6}>
                          <div className="shop_input">
                            <div className="button_container" style={{ marginTop: "0.345em" }}>
                              <button className="decrement" onClick={() => handleDecrement(product)}> - </button>
                              <input type="text" value={quantity} readOnly />
                              <button className="increment" onClick={() => handleIncrement(product)}> + </button>
                            </div>
                          </div>
                        </Col>
                        <Col xs={8} sm={6} md={4} lg={4} xl={4} xxl={4}>
                          <div className="shopping_title_price">
                            <Title className="lg_res" level={5}>${(price * quantity).toFixed(2)}</Title>
                          </div>
                        </Col>
                        <Col xs={4} sm={4} md={4} lg={2} xl={4} xxl={2}>
                          <DeleteFilled className="lg_res" onClick={() => handleDelete(product)} />
                        </Col>
                      </Row>
                    </div>
                  );
                }
                return null;
              })}
              <Link to={"/"}>
                <div className="btn_continue_shoping">
                  <Button>Continue Shopping</Button>
                </div>
              </Link>
            </Col>

            <Col xl={8} lg={8} md={24} sm={24} xs={24} gap={10}>
              <div className="shopping_item">
                <Flex align="center" justify="space-between">
                  <Text><strong>{totalItems} </strong> items</Text>
                  <Title level={5}>${totalPrice.toFixed(2)}</Title>
                </Flex>
                <Flex align="center" justify="space-between">
                  <Text>Shipping</Text>
                  <Text>${shippingCost.toFixed(2)}</Text>
                </Flex>
                <div className="shopping_tax">
                  <Flex align="center" justify="space-between" style={{ marginTop: "10px" }}>
                    <Text>Total (tax excl.)</Text>
                    <Title level={5} className="tax_excl">${taxExcl.toFixed(2)}</Title>
                  </Flex>
                </div>

                <Divider style={{ marginTop: "0px" }} />

                <div className="shopping_incl_tax">
                  <Flex align="center" justify="space-between" style={{ marginTop: "0px" }}>
                    <Text style={{ color: "#666666", fontWeight: "500" }}>Total (tax incl.)</Text>
                    <Title level={5}>${taxIncl.toFixed(2)}</Title>
                  </Flex>
                </div>
                <Flex align="center" gap={4}>
                  <Text>Taxes:</Text>
                  <Text style={{ fontWeight: "500" }}>${taxes.toFixed(2)}</Text>
                </Flex>

                <div>
                  <Flex justify="center" style={{ marginTop: "2em" }}>
                    <Title italic level={4}>Total: ${grandTotal.toFixed(2)}</Title>
                  </Flex>
                  <ProceedToCheckOutButton />
                </div>

                {/* <Policy /> */}
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        <div className="container">
          <Title style={{ marginTop: "2em" }}>There is No item in your Cart!</Title>
          <br />
          <Link to={"/"}>
            <div className="shopping_btn">
              <Button>Go to Shopping</Button>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default ShoppingCard;
