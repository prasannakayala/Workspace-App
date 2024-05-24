import { Row, Col, Container } from "react-bootstrap";
import "./TopContainer.css";
import vector6 from "../../assets/Vector6.jpg";
import coworkingvideo from "../../assets/Coworking video1.jpg";


const TopContainer:React.FC = () => {
  return (
    <section className="top-container">
      <Container fluid>
        <Row >
          <Col sm={12} md={8} lg={8} xl={8} className="top-col">
            <div className="mainimg-container">
              <img src={vector6} alt="vector6" className="vector6" />
              <h1 className="main-heading">
                Host your meeting with world-class amenities. Starting at{" "}
                 <span className="span-price">₹199/-!</span>
              </h1>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} xl={4} className="top-col">
            <div className="vector7-container">
              <img
                src={coworkingvideo}
                alt="coworking video"
                className="coworkingvideo"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TopContainer;
