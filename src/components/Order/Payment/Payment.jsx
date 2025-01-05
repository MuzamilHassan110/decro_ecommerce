import { useState } from "react";
import "./payment.scss";
import { Flex, Radio, Typography, Row, Col, Checkbox, Button } from "antd";

const { Text } = Typography;

const Payment = () => {
  const [isShown, setIsShown] = useState(false);
  const [bank, setBank] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleShow = () => {
    setIsShown(true);
    setBank(false);
    setDelivery(false);
    setSelectedPayment("check");
  };
  const handleShowBank = () => {
    setBank(true);
    setIsShown(false);
    setDelivery(false);
    setSelectedPayment("bank");
  };
  const handleShowDelivery = () => {
    setDelivery(true);
    setBank(false);
    setIsShown(false);
    setSelectedPayment("delivery");
  };
  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const isButtonEnabled = selectedPayment && termsAccepted;

  return (
    <>
      <div className="payment_method">
        <Flex gap={24} style={{ marginTop: "1em" }}>
            <Radio onClick={handleShow} checked={selectedPayment === "check"}></Radio>         
          <Text>Pay by Check</Text>
        </Flex>

        {isShown && (
          <>
            <div className="payment_margin">
              <Text>
                Please send us your check including the following details:
              </Text>
              <div style={{ marginTop: "1em" }} className="pay_check">
                <Row gutter={[16, 16]}>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <div className="grid_box">
                      <Text>Amount</Text>
                    </div>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <div className="grid_box">
                      <Text>$112.84 (tax incl.)</Text>
                    </div>
                  </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: "1em" }}>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <div className="grid_box">Payee</div>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <div className="grid_box">
                      <dd>__________</dd>
                    </div>
                  </Col>
                </Row>
                <Row gutter={[16, 16]} style={{ marginTop: "1em" }}>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <div className="grid_box">
                      Send your check to this address
                    </div>
                  </Col>
                  <Col xl={12} lg={12} md={12} sm={12} xs={24}>
                    <div className="grid_box">
                      <dd>__________</dd>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </>
        )}
        <Flex gap={24} style={{ marginTop: "1em" }}>
        
            <Radio onClick={handleShowBank} checked={selectedPayment === "bank"}></Radio>
         
          <Text>Pay by bank wire</Text>
        </Flex>
        {bank && (
          <div className="payment_margin">
            <Text>
              Please transfer the invoice amount to our bank account. You
              will receive our order confirmation by email containing bank
              details and order number.
            </Text>
          </div>
        )}

        <Flex gap={24} style={{ marginTop: "1em" }}>
         
            <Radio onClick={handleShowDelivery} checked={selectedPayment === "delivery"}></Radio>
        
          <Text>Pay by Cash on Delivery</Text>
        </Flex>
        {delivery && (
          <div className="payment_margin">
            <Text> You pay for the merchandise upon delivery</Text>
          </div>
        )}
        <div style={{ marginTop: "1em" }}>
          <Checkbox onChange={handleCheckboxChange} checked={termsAccepted} />
          <Text style={{ marginLeft: "2em" }}>
            I agree to the terms of service and will adhere to them
            unconditionally.
          </Text>
        </div>
        <div className="btn_payment">
          <Button disabled={!isButtonEnabled}>Place Order</Button>
        </div>       
      </div>
    </>
  );
};

export default Payment
