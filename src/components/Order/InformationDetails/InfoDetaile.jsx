import {
  Col,
  Row,
  Divider,
  Flex,
  Input,
  Form,
  Button,
  Checkbox,
  Typography,
} from "antd";
import "./PersonanlInfromation.scss";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { Text, Title } = Typography;
const InfoDetaile = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onFinish = (values) => {
    console.log("Info Values", values);
    toast.success("Form submitted successfully! 😎");
  };

  const onFinishFailed = (errorInfo) => {
    console.error(errorInfo);
    toast.error("Form submission failed. Please check the fields and try again 😡");
  };
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };
  return (
    <>
      <div className="info_main">
        <Row gutter={[16, 16]}>
          <Col>Order as a guest</Col>
          <Col>
            <Divider type="vertical" style={{ marginTop: "0.55em" }} />
          </Col>
          <Col>sign In</Col>
        </Row>

        <Flex style={{ marginTop: "2em" }}>
          <Form
            {...formItemLayout}
            layout="horizontal"
            name="personDetails"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[
                {
                  required: true,
                  message: "Please input your First Name!",
                },
              ]}
            >
              <Input placeholder="Enter the First Name" />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={[
                {
                  required: true,
                  message: "Enter the Last Name",
                },
              ]}
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Enter the Email",
                },
              ]}
            >
              <Input className="name-input" placeholder="Enter Email" />
            </Form.Item>
            <br />
            <Flex className="info_account" align="center">
              <Title level={3} >
                Create an Account
              </Title>
              <Text style={{ marginLeft: "1rem" }} italic strong>
                (Optional)
              </Text>
            </Flex>

            <Flex className="text-info">
              <Text>And save time on your next order!</Text>
            </Flex>
            <br />
            <div className="info_password">
              {/* <Form.Item label="Password">
                      <Input type={show ? "password" : "text"} />
                      {show ? (
                        <Button onClick={handleChande}>Show</Button>
                      ) : (
                        <Button onClick={handleChande}>Hide</Button>
                      )}
                    </Form.Item> */}
              <Form.Item label="password">
                <Input.Password
                  placeholder="input password"
                  visibilityToggle={{
                    visible: passwordVisible,
                    onVisibleChange: setPasswordVisible,
                  }}
                />
                <Button
                  style={{
                    width: 80,
                  }}
                  onClick={() => setPasswordVisible((prevState) => !prevState)}
                >
                  {passwordVisible ? "Hide" : "Show"}
                </Button>
              </Form.Item>
            </div>

            <Form.Item label="Birthday" name={"birthday"}>
              <Input />
              <br />
              <Text style={{ color: "#BFBFBF" }}>(E.g.: 05/31/1970)</Text>
            </Form.Item>

            <Form.Item
              label=" "
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
              name={"offer"}
              rules={[
                {
                  type: "bool",
                  required: true,
                  message: "Enter the Email",
                },
              ]}
            >
              <Flex gap={10}>
                <Checkbox />
                <Text style={{ color: "#555353" }}>
                  Receive offers from our partners
                </Text>
              </Flex>
            </Form.Item>
            <Form.Item
              label=" "
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
            >
              <Flex gap={10}>
                <Checkbox />

                <Text style={{ color: "#555353" }}>
                  I agree to the terms and conditions and <br />
                  the privacy policy
                </Text>
              </Flex>
            </Form.Item>
            <Form.Item
              label=" "
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
            >
              <Flex gap={10}>
                <Checkbox />

                <Text style={{ color: "#555353" }} italic>
                  Sign up for our newsletter
                  <br /> You may unsubscribe at any moment. For that purpose,
                  please find our contact info in the legal notice.
                </Text>
              </Flex>
            </Form.Item>

            <Form.Item
              label=" "
              labelCol={{ span: 7 }}
              wrapperCol={{ span: 12 }}
            >
              <Flex gap={10}>
                <Checkbox />

                <Text style={{ color: "#555353" }} italic>
                  Customer data privacy <br />
                  The personal data you provide is used to answer queries,
                  process orders or allow access to specific information. You
                  have the right to modify and delete all the personal
                  information found in the My Account page.
                </Text>
              </Flex>
              <Flex justify="flex-end" className="btn_info">
                <Button htmlType="submit">Place Order</Button>
              </Flex>
            </Form.Item>
          </Form>
        </Flex>
        <ToastContainer />
      </div>
    </>
  );
};

export default InfoDetaile;
