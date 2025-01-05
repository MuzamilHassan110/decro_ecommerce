import "./Address.scss";
import { Form, Input, Typography, Select, Checkbox, Button, Flex } from "antd";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
const { Text } = Typography;

const Address = () => {
  const initialValues = {
    alias: "",
    firstname: "",
    lastname: "",
    company: "",
    address: "",
    addresscomplement: "",
    city: "",
    state: "",
    zip: "",
    country: "United State",
    number: "",
    useForInvoice: false
  };

  const validationSchema = Yup.object().shape({
    alias: Yup.string(),
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    company: Yup.string(),
    address: Yup.string().required("Address is required"),
    addresscomplement: Yup.string(),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string().required("Zip/Postal Code is required"),
    number: Yup.number().required("Number is required"),
    useForInvoice: Yup.bool()
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, {resetForm} ) => {
      console.log(values);
      toast.success("Form submitted successfully! 😎");
      resetForm();
      
    }
  });

  const { handleSubmit, handleChange, setFieldValue, values, errors, touched } = formik;

  return (
   
        <div className="address_container" >
          <Text className="title_text">
            The selected address will be used both as your personal address
            (for invoice) and as your delivery.
          </Text>
          <Form
            name="Address"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={handleSubmit}
          >
            <Form.Item label="Alias" validateStatus={errors.alias && touched.alias ? 'error' : ''} help={errors.alias && touched.alias ? errors.alias : ''}>
              <Input id="alias" name="alias" type="text" value={values.alias} onChange={handleChange} />
              <Text style={{ marginLeft: "2em" }}>Optional</Text>
            </Form.Item>
            <Form.Item label="First name" validateStatus={errors.firstname && touched.firstname ? 'error' : ''} help={errors.firstname && touched.firstname ? errors.firstname : ''}>
              <Input id="firstname" name="firstname" type="text" value={values.firstname} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Last name" validateStatus={errors.lastname && touched.lastname ? 'error' : ''} help={errors.lastname && touched.lastname ? errors.lastname : ''}>
              <Input id="lastname" name="lastname" type="text" value={values.lastname} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Company">
              <Input id="company" name="company" type="text" value={values.company} onChange={handleChange} />
              <Text style={{ marginLeft: "2em" }}>Optional</Text>
            </Form.Item>
            <Form.Item label="Address" validateStatus={errors.address && touched.address ? 'error' : ''} help={errors.address && touched.address ? errors.address : ''}>
              <Input id="address" name="address" type="text" value={values.address} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Address Complement">
              <Input id="addresscomplement" name="addresscomplement" type="text" value={values.addresscomplement} onChange={handleChange} />
              <Text style={{ marginLeft: "2em" }}>Optional</Text>
            </Form.Item>
            <Form.Item label="City" validateStatus={errors.city && touched.city ? 'error' : ''} help={errors.city && touched.city ? errors.city : ''}>
              <Input id="city" name="city" type="text" value={values.city} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="State" validateStatus={errors.state && touched.state ? 'error' : ''} help={errors.state && touched.state ? errors.state : ''}>
              <Select
                id="state"
                name="state"
                value={values.state}
                onChange={(value) => setFieldValue('state', value)}
                options={[
                  { value: 'HangZhou', label: 'HangZhou' },
                  { value: 'NingBo', label: 'NingBo' },
                  { value: 'WenZhou', label: 'WenZhou' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Zip/Postal Code" validateStatus={errors.zip && touched.zip ? 'error' : ''} help={errors.zip && touched.zip ? errors.zip : ''}>
              <Input id="zip" name="zip" type="text" value={values.zip} onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Country">
              <Select
                id="country"
                name="country"
                value={values.country}
                onChange={(value) => setFieldValue('country', value)}
                options={[
                  { value: 'United State', label: 'United State' },
                ]}
              />
            </Form.Item>
            <Form.Item label="Number" validateStatus={errors.number && touched.number ? 'error' : ''} help={errors.number && touched.number ? errors.number : ''}>
              <Input id="number" name="number" type="number" value={values.number} onChange={handleChange} />
            </Form.Item>
            <Form.Item name="useForInvoice" valuePropName="checked">
              <Checkbox checked={values.useForInvoice} onChange={(e) => setFieldValue('useForInvoice', e.target.checked)}>
                Use this address for invoice too
              </Checkbox>
            </Form.Item>
              <Flex className="btn_address" justify="flex-end" >
               <Button  htmlType="submit" >
                  Continue
                </Button>
               </Flex>
          </Form>
          <ToastContainer />
        </div>
    
  );
};

export default Address;
