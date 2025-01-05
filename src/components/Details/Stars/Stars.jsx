import { FaStar, FaStarHalf } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Flex } from "antd";

const Stars = ({stars}) => {

    const ratingStar = Array.from({length: 5 }, (_, index) =>{
        let number = index + 0.5;
        return (
         <span key={index}>
            {stars >= index + 1 ? (<FaStar />):
            stars >= number ? (<FaStarHalf />):
            (<AiOutlineStar />) }
         </span>
        )
    })
  return (
    <div style={{color: "#FFB14B"}}>
      <Flex gap={2}>
      {ratingStar}
      </Flex>
    </div>
  )
}

export default Stars
