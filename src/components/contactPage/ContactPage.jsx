import "./ContactPage.scss";
import emailjs from "@emailjs/browser";

import { Col, Row, Typography, Divider } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Title, Text } = Typography;

const ContactPage = () => {
  const validationSchema = Yup.object({
    user_name: Yup.string().required("Name is required"),
    user_email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send("service_oslagk5", "template_if3yf8d", values, {
          publicKey: "bXdsdyCiVwOWLYeSj",
        })
        .then(
          () => {
            toast.success("Email sent successfully!");
            resetForm();
          },
          (error) => {
            toast.error("Failed to send email: " + error.text);
          }
        );
    },
  });

  return (
    <>
      <div className="contact-container">
        <ToastContainer />
        <Row gutter={[16, 16]}>
          <Col xl={8} lg={8} md={12} sm={24} xs={24}>
            <div className="info-container">
              <Title level={4} style={{ margin: "1em" }} className="contact_title">
                STORE INFORMATION
              </Title>

              <div className="info-item">
                <FaLocationDot size={20} className="info-icon" />
                <div className="info-text">
                  <Text strong>Decor</Text>
                  <br />
                  <Text>
                    16, Main street 2nd floor Paris,
                    <br /> Hawaii 75002 United States
                  </Text>
                </div>
              </div>

              <Divider />

              <div className="info-item">
                <IoMdCall size={20} className="info-icon" />
                <div className="info-text">
                  <Text strong>Call us:</Text>
                  <br />
                  <Text className="hover_contact">0102030405</Text>
                </div>
              </div>

              <Divider />

              <div className="info-item">
                <MdEmail size={20} className="info-icon" />
                <div className="info-text">
                  <Text strong>Email us:</Text>
                  <br />
                  <Text className="hover_contact">demo@demo.com</Text>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={16} lg={16} md={12} sm={24} xs={24}>
            <div className="submit-form">
              <form onSubmit={formik.handleSubmit}>
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="input_contact"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_name}
                />
                {formik.touched.user_name && formik.errors.user_name ? (
                  <div className="error">{formik.errors.user_name}</div>
                ) : null}

                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="input_contact"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.user_email}
                />
                {formik.touched.user_email && formik.errors.user_email ? (
                  <div className="error">{formik.errors.user_email}</div>
                ) : null}

                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.message}
                ></textarea>
                {formik.touched.message && formik.errors.message ? (
                  <div className="error">{formik.errors.message}</div>
                ) : null}

                <div className="contact_button">
                  <button type="submit" value="Send">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContactPage;
