import "./AddToCardDetails.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  Row,
  Col,
  Image,
  Typography,
  Flex,
  Divider,
} from "antd";
import { CheckOutlined } from "@ant-design/icons";
import {  useSelector } from "react-redux";

const { Text, Title } = Typography;

const AddToCardDetails = ({ handleClosedModal, showModal, product }) => {

  const {subtotal} = useSelector((state) => state.cartSlice);
  const {cartItems} =useSelector((state) => state.cartSlice);

  const shipping = 7.01;
  const texs = 3.07;
  const total = texs + subtotal + shipping;
  return (
    <>
    <div className="cart-details">
    <Modal
        title={<div>Product successfully added to your shopping cart</div>}
        width={1000}
        open={showModal}
        onCancel={handleClosedModal}
        footer={null}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} md={10}>
            <Row gutter={[20, 20]}>
              <Col xs={24} sm={12}>
                <Image src={product.thumbnail} width={"100%"} />
              </Col>
              <Col xs={24} sm={12} className="add-card-detail">
                <div className="cart_title_price">
                  <Title level={3} style={{ fontWeight: "bold" }}>
                    {product.title}
                  </Title>
                  <Title level={3}>${product.price}</Title>

                  <Text>
                    Dimension:<strong> 80x120cm</strong>
                  </Text>
                 
                </div>
              </Col>
            </Row>
          </Col>

          <Col xs={0} md={2}>
            <Divider
              type="vertical"
              style={{ height: "100%", marginTop: "1rem" }}
            />
          </Col>

          <Col xs={24} md={10}>
            <div className="cart_details">
              <Text className="add-card-title">
                There are <strong>{cartItems.length }</strong> items in your
                cart.
              </Text>

              <Flex justify="space-between">
                <Text>Subtotal:</Text>
                <Title level={5}>${subtotal.toFixed(2)}</Title>
              </Flex>
              <Flex justify="space-between" align="middle">
                <Text>Shipping:</Text>
                <Text>${shipping}</Text>
              </Flex>
              <Flex justify="space-between" align="middle">
                <Text>Total (tax excl.)</Text>
                <Text>${texs}</Text>
              </Flex>
              <Flex justify="space-between" align="middle">
                <Text>Total</Text>
                <Title level={5}>${total.toFixed(2)}</Title>
              </Flex>
              <Flex justify="space-between" align="middle">
                <Text>Taxes:</Text>
                <Title level={5}>$0.00</Title>
              </Flex>
              <Row gutter={[16, 16]}>
                <Col xl={12} md={16} lg={12} xs={24}>
                  <Flex justify="cneter" align="center">
                    <Button
                      className="btn-continue-shpping"
                      onClick={handleClosedModal}
                    >
                      Continue Shopping
                    </Button>
                  </Flex>
                </Col>
                <Col xl={12} md={16} lg={12} xs={24}>
                  <div className="cart_proced">
                    <Link to="/detail/shopping_card">
                      <Button className="btn-proceed-to">
                        <CheckOutlined /> Proceed to checkout
                      </Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Modal>
    </div>
      
    </>
  );
};

AddToCardDetails.propTypes = {
  product: PropTypes.object.isRequired,
  handleClosedModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};

export default AddToCardDetails;
