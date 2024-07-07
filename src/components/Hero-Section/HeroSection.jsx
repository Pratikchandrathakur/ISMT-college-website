import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                British Degree <br /> Most affordable pricing <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              To create a sustainable education base through the pursuit of learning and developing professionalism that will create a competitive edge to perform at a Global Level. <br /> A globally respected academic institute that endorses noble professional practices in Nepal and in South Asia by creating new frontiers and developing “ethical”, dependable, entrepreneurial and socially sensitive leader-managers, educators and IT professionals committed to producing excellent results.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
