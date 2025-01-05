import "./DescripationDetails.scss";
import { Tabs, Col, Row, Image, Flex } from "antd";
import ReactPlayer from "react-player";
import Write_Rewiews from "../Write_Rewiews/Write_Rewiews";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DescripationDetails = () => {

  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const tabItems = [
    {
      key: 'tab1',
      label: 'Description',
      children: (
        <div className="descripation-details-tab">
          The best is yet to come! Give your walls a voice with a framed
          poster. This aesthethic, optimistic poster will look great in your
          desk or in an open-space office. Painted wooden frame with
          passe-partout for more depth.
        </div>
      ),
    },
    {
      key: 'tab2',
      label: 'Product Details',
      children: (
        <div className="product-details-tab">
          <div>
            <Image src="https://demo80leotheme.b-cdn.net/prestashop/vt_decor/img/m/2.jpg" alt="productImage" width="5%"/>
          </div>
          <Flex gap={10} align="center">
            <div style={{ fontWeight: "bold", fontSize:"1rem", color:"black" }}>Reference</div> demo_5
          </Flex>
          <Flex gap={10} align="center">
            <div style={{ fontWeight: "bold", fontSize:"1rem", color:"black" }}>In stock</div> 899 Items
          </Flex>
          <div className="pro-data-sheet">
            <div className="data-sheet">Data sheet</div>
            <Row gutter={16}>
              <Col span={12} className="data-sheet-grid">Composition</Col>
              <Col span={12} className="data-sheet-grid">Matt paper</Col>
            </Row>
          </div>
        </div>
      ),
    },
    {
      key: 'tab3',
      label: 'Reviews',
      children: (
        <div className="reviews-details-tab">
          <Write_Rewiews reviews={"Be the first to write your review!"} product={product} />
        </div>
      ),
    },
    {
      key: 'tab4',
      label: 'Custom Tab 01',
      children: (
        <div className="custom-details-tab">
          <Row gutter={16}>
            <Col xs={24} sm={24} lg={12}>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road. Weighing in under 7 pounds, the Kilburn is a lightweight
              piece of vintage styled engineering. Setting the bar as one of
              the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a
              clear midrange and extended highs for a sound that is both
              articulate and pronounced. The analogue knobs allow you to fine
              tune the controls to your personal preferences while the
              guitar-influenced leather strap enables easy and stylish travel.
            </Col>
            <Col xs={24} sm={24} lg={12} className="video">
              <ReactPlayer url={"https://www.youtube.com/watch?v=ef4GERgOqVI"} width={"100%"}/>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: 'tab5',
      label: 'Custom Tab 02',
      children: (
        <div className="custom-details-tab2">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road. Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
        </div>
      ),
    },
  ];

  return (
    <>
      <Tabs defaultActiveKey="Description" items={tabItems} style={{ padding: "2rem" }} />
    </>
  );
};

export default DescripationDetails;
