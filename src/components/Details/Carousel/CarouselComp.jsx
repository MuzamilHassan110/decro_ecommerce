import "./Carousel.scss";
import { Carousel } from "antd";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const CarouselComp = () => {
 
  const { id } = useParams();
 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

 

  const ref = useRef();
  const bottomRef = useRef();

  const goTo = (index) => {
   
    if(bottomRef.current){
      bottomRef.current.goTo(index, false);
    } else {
      console.error("bottomRef is null")
    }
  };
  

  return (
    <div className="main">
      {product && (
        <Carousel
        ref={(node) => {
          ref.current = node;
          bottomRef.current = node;
        }}
        dots={false}
        >
          <div>
            <img
              src={product.thumbnail}
              width={"100%"}
              className="carousel_singal_image"
            />
          </div>
        </Carousel>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>


   <div className="bottom_image">
   {product?.images?.map((item, index) => (
        <button
          key={index}
          onClick={() => goTo(index)}
          style={{ margin: "9px" }}
          className="prod-button"
        >
          
          <img
            src={item}
            width={"100%"}
            height={"100%"}
            alt={`products ${index}`}
            className="pro-image"
          />
        </button>
      ))} 
   </div>

      {/* <div className="moveIcon" style={{ width: "80em" }} type="setting">
        <div className="leftIcon">
          <LeftOutlined onClick={() => {console.log(ref.current.prev())}} />
        </div>
        <div className="rightIcon">
          <RightOutlined onClick={() => ref.current.next()} />
        </div>
      </div> */}
    </div>
  );
};

export default CarouselComp;
