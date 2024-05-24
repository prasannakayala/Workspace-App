import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/logo.jpg";
import vector from "../../assets/Vector.jpg";
import './Header.css';

const Header: React.FC = () => {
  return (
    <Navbar className="navbar-container">
      <Container>
        <Row className="nav-row">
          <Col xs="auto" className="logo-col">
            <Navbar.Brand>
              <img src={logo} alt="logo" className="logo-img" />
            </Navbar.Brand>
          </Col>
          <Col xs="auto" className="call-col">
            <div className="call-bar">
              <img src={vector} alt="call" className="call-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Header;


