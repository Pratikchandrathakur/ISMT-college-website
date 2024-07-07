import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our courses are very beginer's friendly no matters what is your level we can contribute to level up your current skills to the next level. ",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Our student support is live 22/7 to record student issues and resolve them as soon as possible.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Our courses consists of industry certifications along the way so help yourself by enrolling in one of our courses.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
