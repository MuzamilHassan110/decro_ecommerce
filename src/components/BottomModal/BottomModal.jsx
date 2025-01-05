import PropTypes from "prop-types";
import {
  Modal,
  Row,
  Col,
  Image,
  Flex,
  Divider,
  Typography,
  Button,
} from "antd";
import "./BottomModal.scss";
import { MdDelete } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteToCart,
  addToCart,
  removeFromCart,
} from "../../redux/features/cartSlice.js";
const { Title, Text } = Typography;

const BottomModal = ({ showModal, handleClosedModal }) => {
  const { prices } = useSelector((state) => state.cartSlice);
  const { quantities } = useSelector((state) => state.cartSlice);
  const { cartItems } = useSelector((state) => state.cartSlice);

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

  return (
    <div className="bottom_modal">
      {cartItems.length > 0 ? (
        <>
          <Modal
            title={<div>Product successfully added to your shopping cart</div>}
            width={3000}
            height={20}
            open={showModal}
            onCancel={handleClosedModal}
            footer={null}
            className="bottom-modal"
          >
            <Flex>
              <div className="overflow-container">
                {cartItems.map((item, index) => {
                  //  const price = prices[item.id] || item.price;
                  const quantity = quantities[item.id] || 1;
                  return (
                    <div key={index} className="modal_data">
                      <Flex className="flex_modal_data">
                        <Row gutter={[16, 16]}>
                          <Col span={8}>
                            <Image
                              src={item.thumbnail}
                              width={"100%"}
                              height={"100%"}
                            />
                          </Col>
                          <Col span={14}>
                            <div className="item_details">
                              <strong className="modal_title">
                                {item.title}
                              </strong>
                              <br />
                              <strong>${item.price}</strong> <br />
                              <div className="shop_input">
                            <div className="button_container" style={{ marginTop: "0.345em" }}>
                              <button className="decrement" onClick={() => handleDecrement(item)}> - </button>
                              <input type="text" value={quantity} readOnly />
                              <button className="increment" onClick={() => handleIncrement(item)}> + </button>
                            </div>
                               </div>
                            </div>
                          </Col>
                          <Col span={2}>
                            <button
                              className="title_delete"
                              onClick={() => handleDelete(item)}
                            >
                              <MdDelete />
                            </button>
                            <Divider
                              type="vertical"
                              className="vertical_line"
                            />
                          </Col>
                        </Row>
                      </Flex>
                    </div>
                  );
                })}
              </div>
              <Row gutter={[16, 16]}>
                <Col xl={18} lg={18} md={10} sm={24} xs={24}>
                  <div className="product_details_modol">
                    <Flex gap={24}>
                      <Text>Subtotal</Text>
                      <Title level={3}>${subtotal.toFixed(2)}</Title>
                    </Flex>
                    <Flex gap={20}>
                      <Text>Shipping</Text>
                      <Title level={3}>${shipping}</Title>
                    </Flex>

                    <Flex gap={45}>
                      <Text>Taxes</Text>
                      <Title level={3}>${taxes}</Title>
                    </Flex>
                    <div className="bottom_border"></div>
                    <Flex gap={45}>
                      <Text>Total</Text>
                      <Title level={3}>${total.toFixed(2)}</Title>
                    </Flex>
                  </div>
                </Col>
                <Col xl={6} lg={6} md={24} sm={24} xs={24}>
                  <div className="modal_btn">
                    <Link to="/detail/shopping_card">
                      <Button onClick={handleClosedModal}>View Cart</Button>
                    </Link>
                    <br />
                    <Link to="/detail/shopping_card/order">
                      <Button onClick={handleClosedModal}>check out</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Flex>
          </Modal>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

BottomModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClosedModal: PropTypes.func.isRequired,
};

export default BottomModal;
