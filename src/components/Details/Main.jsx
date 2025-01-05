import "./main.scss";
import CarouselComp from "./Carousel/CarouselComp";
import DescripationDetails from "./DescreipationDetails/DescripationDetails";
import Descripation from "./Descripation/Descripation";
import { Row, Col} from "antd";
import { useSelector } from "react-redux";


const Main = () => {
 

  const {products} = useSelector(state => state.products)
 
  return (
    <>
      <div className="container">
        <Row gutter={[16,16]}>
          <Col xs={24} sm={24} md={12} className="carousel_comp">
            <CarouselComp products={products} />
          </Col>
          <Col xs={24} sm={24} md={12} className="descripation">
            <Descripation />
          </Col>
        </Row>
        <DescripationDetails products = {products} />
      </div>
    </>
  );
};

export default Main;
