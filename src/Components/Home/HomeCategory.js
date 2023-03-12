import React from "react";
import { Col } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import clothe from "../../images/high-heels.png";
import cat2 from "../../images/electronic-device.png";
import labtop from "../../images/electronics.png";
import sale from "../../images/watch.png";
import pic from "../../images/sale-tag.png";
import CategoryCard from "../Category/CategoryCard";
import SubTitle from "../Utility/SubTitle";
const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title=" التصنيفات" btntitle="المزيد" pathText="/allcategory" />
      <Row className="my-2 d-flex  justify-content-between">
        <CategoryCard img={clothe} background="#F4DBA5" />
        <CategoryCard img={cat2} background="#0034FF" />
        <CategoryCard img={labtop} background="#FFD3E8" />
        <CategoryCard img={clothe} background="#55CFDF" />
        <CategoryCard img={sale} background="#FF6262" />
        <CategoryCard img={pic} background="#F4DBA5" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
