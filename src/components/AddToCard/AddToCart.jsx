import {PlusOutlined} from "@ant-design/icons";
import { Button } from "antd";
import AddToCardDetails from "../AddToCardDetails/AddToCardDetails";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
import PropTypes from 'prop-types';

const AddToCart = ({product}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  

  const handdleAddToCard = () => {
    dispatch(addToCart(product));
     console.log("AddToCard Handle is run !")
  }
  const handleClosedModal = () =>{
    setShowModal(false)
  }
  const handleClick = () => {
    handdleAddToCard();
    setShowModal(true)
  }
  // onClick={() => { setShowModal(true); handdleAddToCard(); }}

  return (
   <>
   <Button className="add-to-card" onClick={handleClick}>
      <PlusOutlined /> Add To Card
    </Button>
      { showModal && <AddToCardDetails showModal={showModal} handleClosedModal={handleClosedModal} product = {product}/>}
      </>
  )
}

AddToCart.propTypes = {
  product: PropTypes.object.isRequired,
};
export default AddToCart
