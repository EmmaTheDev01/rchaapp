import React from "react";
import { useAuth } from "../AuthContext";
import { Container, Row, Col, Button } from "react-bootstrap";
import HeaderNav from "../Components/HeaderNav";
import Sidebar from "../Components/Sidebar";
import Place from "../Components/Place";
import { useNavigate } from "react-router-dom";
const Places = () => {
  const { user, error } = useAuth();
  const navigate = useNavigate();
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (user) {
    return (
      <Container fluid>
        <Row>
          <Col>
            <HeaderNav />
          </Col>
        </Row>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col d-flex justify-content-center>
            <Place />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Button
          className="w-50 "
          variant="primary"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>
    );
  }
};

export default Places;
