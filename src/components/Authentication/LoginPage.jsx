import "./Authentication.scss";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Button,
  Form,
  Input,
  Flex,
  Typography,
  Row,
  Col,
} from "antd";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { LoginOutlined } from "@ant-design/icons";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const { Text, Title } = Typography;

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
 const navigate = useNavigate();
 const {cartItems} = useSelector(state => state.cartSlice)


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    const { email, password } = values;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const token = await userCredential.user.getIdToken();
      localStorage.setItem('authToken', JSON.stringify(token));
       
      if(userCredential.user.uid){
        toast.success("User Logged in successfully !! ", {
          position: "top-center",
        });
        if(cartItems.length >= 1){
          navigate("/detail/shopping_card/order")
        }
        else{
          navigate("/")
        }
      }
      
    } catch (error) {
      toast.error("Invalid Email and Password");
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    toast.error("Complete the Fields ");
  };

  const imgURL =
    "https://www.kindpng.com/picc/m/732-7329685_e-commerce-website-background-image-e-commerce-website.png";
  const logoURL =
    "https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg";

  return (
    <>
    <Flex
      className="container"
      align="center"
      justify="center"
      style={{       
        minHeight: '90vh', 
       
      }}
    >
        <Row gutter={[16, 16]} justify="center" align="middle">
          <Col xs={24} md={12}>
            <img src={imgURL} className="login_image" />
          </Col>
          <Col xs={24} md={12}>
            <div className="login_form">
              <div className="login_title">
                <Flex
                  justify="center"
                  style={{ flexDirection: "column", alignItems: "center" }}
                >
                  <Flex align="center" justify="center">
                    <img
                      src={logoURL}
                      width={"50px"}
                      style={{ borderRadius: "10px" }}
                    />
                    <Title level={2} style={{ color: "#000" }} className="login_res">
                      &nbsp;WelcomeTo
                    </Title>
                    <Title style={{ color: "#eb7025" }} className="login_res">DECRO</Title>
                  </Flex>
                  <Title level={2} italic style={{ color: "#bbb5b5" }} className="login_res">
                    Ship Smart Today..!
                  </Title>
                </Flex>
              </div>
              <Form
                layout="vertical"
                name="Login Form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="login_field">
                  <Flex
                    align="center"
                    justify="center"
                    style={{ flexDirection: "column" }}
                  >
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { type: "email", required: true, message: "Please input your Email!"},
                      ]}
                    
                    >
                      <Input prefix={<MdEmail />} placeholder="example@gmail.com" />
                    </Form.Item>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        { required: true, message: "Please input your Password!" },
                      ]}
                    >
                      <Input.Password prefix={<RiLockPasswordFill />} placeholder="password" />
                    </Form.Item>
                  </Flex>
                </div>
                <div className="btn_login">
                  <Flex justify="center" align="center">
                    <Form.Item>
                      <div className="">
                      <Button htmlType="submit"   >
                       <Flex justify="center" gap={10}> <LoginOutlined /> Login</Flex>
                      </Button>
                      </div>
                    
                     
                    </Form.Item>
                  </Flex>
                </div>
              </Form>
              <Flex className="login_bottom" justify="center">
                <Text style={{ color: "red", fontWeight: "bold" }}>Not Account Yet?</Text>
                

                  <Text style={{ color: "green", fontWeight: "bold" }}>
                   <NavLink to ="/signup"> Create an Account</NavLink>
                    <div className="account_border_bottom"></div>
                  </Text>
             
              </Flex>
            
            </div>
          </Col>
        </Row>
      </Flex>
      <ToastContainer />
    </>
  );
};



export default LoginPage;
