import "./Authentication.scss";
import { Link } from "react-router-dom";
import { Button, Form, Input, Typography, Divider, Flex, Col, Row } from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/firebase";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import { useSelector } from "react-redux";

const { Text, Title } = Typography;

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cartSlice);

  const signUpWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in with Google successfully!");
      if (cartItems.length >= 1) {
        navigate("/detail/shopping_card/order");
      } else {
        navigate("/");
      }
    } catch (err) {
      toast.error("Error signing in with Google: " + err.message);
    }
  };

  const signupWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      toast.success("Signed in with Facebook successfully!");
    } catch (err) {
      toast.error("Error signing in with Facebook: " + err.message);
    }
  };

  const onFinishLogin = async (values) => {
    const { name, address, email, password } = values;
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email: user.email,
          name,
          address,
        });
        window.location = "/";
      }
      toast.success("sign Up Successfull !");
    } catch (err) {
      toast.error("User Already Exsit !" + err.message);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = (errorInfo) => {
    toast.error("Entery Fields " + errorInfo);
  };

  const handleLogin = () => {
    localStorage.setItem("/login", true);
  };
  const imgUrl =
    "https://lms.go-ecommerce.my/Customizing/global/skin/mdec/images/main-keyvisualss.png";
  const logoURL =
    "https://img.freepik.com/premium-vector/home-decor-logo-design_626969-132.jpg?w=740";
  return (
    <Flex  className="container"
    align="center"
    justify="center"
    style={{       
      minHeight: '100vh', 
     
    }}>
      <Row gutter={[16, 16]}>
        <Col xl={12} lg={12} md={24} xs={24}>
          <ToastContainer />
          <div className="login_form">
            <div className="login_title">
              <Flex
                justify="center"
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <Flex align="center" justify="center">
                  <img src={logoURL} width={"10%"} />
                  <Title style={{ color: "#000" }} className="login_res">
                    &nbsp;HAPPY
                  </Title>
                  <Title style={{ color: "#eb7025" }} className="login_res">
                    SHOP
                  </Title>
                </Flex>
                <Title
                  italic
                  style={{ color: "#bbb5b5" }}
                  className="login_res"
                >
                  Hello..!
                </Title>
              </Flex>
            </div>
            <div className="login_form">
              <Flex
                align="center"
                style={{ flexDirection: "column", marginTop: "1em" }}
              >
                <Title
                  level={2}
                  style={{ color: "#bbb5b5" }}
                  className="signup"
                >
                  Sign Up Now
                </Title>
                <Text>
                  Already have a account?<Link to="/login">Login</Link>
                </Text>
              </Flex>
              <Flex justify="center" gap={20} className="login_container">
                <div className="btn_">
                  <Button onClick={signupWithFacebook}>
                    <span>
                      <FaFacebook className="facebook" />
                    </span>
                    Facebook
                  </Button>
                </div>

                <div className="btn_">
                  <Button onClick={signUpWithGoogle}>
                    <span>
                      <FcGoogle className="facebook" />
                    </span>
                    Google
                  </Button>
                </div>
              </Flex>
              <Divider>or sign up with</Divider>
              <Form
                layout="vertical"
                name="sign Up"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinishLogin}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="login_field">
                <div className="sign_data">
                <Flex gap={20} justify="center" className="sign_field">
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Please input your Email!",
                      },
                    ]}
                  >
                    <Input placeholder="example@gmail.com" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="password" />
                  </Form.Item>
                </Flex>
                <Flex gap={20} justify="center" className="sign_field">
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        type: "text",
                        required: true,
                        message: "Please input your Name!",
                      },
                    ]}
                  >
                    <Input placeholder="Name" />
                  </Form.Item>

                  <Form.Item
                    label="Adress"
                    name="address"
                    rules={[
                      {
                        type: "text",
                        required: true,
                        message: "Please input your Address!",
                      },
                    ]}
                  >
                    <Input placeholder="Address" />
                  </Form.Item>
                </Flex>

                <Flex justify="center">
                  <Form.Item>
                    <div className="btn_login">
                      <Button
                        htmlType="submit"
                        loading={loading}
                        onClick={handleLogin}
                        >
                        Sign Up
                      </Button>
                    </div>
                  </Form.Item>
                </Flex>
                </div>
                </div>
              </Form>
            </div>
          </div>
        </Col>

        <Col xl={12} lg={12} md={24} xs={24}>
          <div>
            <img src={imgUrl} />
          </div>
        </Col>
      </Row>
    </Flex>
  );
};

export default SignUpPage;
