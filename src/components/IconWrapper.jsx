import { FloatButton } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./IconWrapper.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import ButtonModal from "./BottomModal/BottomModal";


const IconWarpper = () => {
  // const cartSlice = useSelector((state) => state.cartSlice.cartItem);
  const {cartItems} =useSelector((state) => state.cartSlice)
  // const { quantities } = useSelector((state) => state.cartSlice);
  // console.log("Icons", quantities)


  const [showModal, setShowModal] = useState(false);

  const handleClosedModal = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div className="float_button">
      <FloatButton
        icon={<ShoppingCartOutlined style={{ fontSize: "25px" }} />}
        badge={{
          count: cartItems.length ,
          color: "#EB7025",
        }}
        onClick={handleClick}
        disabled={cartItems.length == 0}
      />
      {showModal && (
        <ButtonModal
          showModal={showModal}
          handleClosedModal={handleClosedModal}
        />
      )}
    </div>
  );
};

export default IconWarpper;
