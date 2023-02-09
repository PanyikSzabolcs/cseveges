import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <Container>
      <Row>
        <Col md={5} className="login__bg"></Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "80%", maxWidth: 500 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>email cím</Form.Label>
              <Form.Control type="email" placeholder="Add meg az email címed" />
              <Form.Text className="text-muted">
                Soha ne add meg az email címed vagy a jelszavad senkinek!
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Jelszó</Form.Label>
              <Form.Control type="password" placeholder="Jelszó" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Bejelentkezés
            </Button>
            <div className="py-4">
<p className="text-center">
Nincs még fiókod? <Link to="/signup">Regisztráció</Link>
</p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
