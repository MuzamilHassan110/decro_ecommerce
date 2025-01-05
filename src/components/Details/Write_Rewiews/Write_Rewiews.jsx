import "./Write_Rewiews.scss";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Rate } from "antd";
import {
  Modal,
  Button,
  Flex,
  Form,
  Input,
  Divider,
  Typography,
  Col,
  Row,
  Image,
} from "antd";
import { FaPen } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const { Title, Text } = Typography;

const Write_Rewiews = ({ reviews, product, sendDataToParent }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rateValue, setRateValue] = useState(4);
  const [isDisable, setIsDisable] = useState(false);
  const [user, setUser] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    const accessUser = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
    return () => accessUser();
  }, []);

  console.log("Write");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        sendDataToParent(values);
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="rewiews-container">
      <Button
        type="default"
        onClick={user ? showModal : null}
        className="write-button"
      >
        <Flex gap={"6px"} align="center" className="reivew_flex">
          <FaPen />
          <div className="reviews"> {reviews || "Write a review"}</div>
        </Flex>
      </Button>

      <Modal
        title={
          <div style={{ textAlign: "center", color: "white" }}>
            <Title level={1}>Write a Review</Title>
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={750}
        height={650}
      >
        <Divider />
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24} className="reivews-des-box">
            <Image src={product.thumbnail} className="reivews_image" />
            <div className="image-name">
              <Text className="image-name">{product.title}</Text>
            </div>
            <div className="image-des">
              <Text className="image_des">{product.description}</Text>
            </div>
          </Col>
          <Col lg={12} sm={24}>
            <Flex align="center" gap={"large"} className="quntity_rewiews">
              Quality:
              <Flex gap={"middle"}>
                <FcCancel
                  onMouseEnter={() => setIsDisable(true)}
                  onMouseLeave={() => setIsDisable(false)}
                />
                <Rate
                  value={isDisable ? 0 : rateValue}
                  disabled={!isDisable}
                  className="model-rateing"
                />
              </Flex>
            </Flex>
            <Divider />
            <Form form={form} layout="vertical" className="form_rewiews">
              <Form.Item
                name="title"
                label="Title*"
                rules={[{ required: true, message: "Please input the title!" }]}
              >
                <Input className="title" />
              </Form.Item>
              <Form.Item
                name="comment"
                label="Comment*"
                rules={[
                  { required: true, message: "Please input the comment!" },
                ]}
              >
                <Input.TextArea className="comment" />
              </Form.Item>
              <Form.Item
                name="name"
                label="Name*"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input className="title" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email*"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input className="title" />
              </Form.Item>

              <div style={{ marginBottom: "1em" }} className="rewiews-button">
                <Button className="btn-close" onClick={handleCancel}>
                  Close
                </Button>
                <Button
                  className="btn-submit"
                  type="primary"
                  onClick={handleOk}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <hr />
      </Modal>
    </div>
  );
};
// Write_Rewiews.propTypes = {
//   reviews: PropTypes.string,
//   product:PropTypes.object,
// };
export default Write_Rewiews;
