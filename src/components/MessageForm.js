import React from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import "./MessageForm.css";

function MessageForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="messages-output"> </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={11}>
              <Form.Group>
                <FormControl
                  type="text"
                  placeholder="Your message"
                ></FormControl>
              </Form.Group>
            </Col>
            <Col md={1}>
              <Button
                variant="primary"
                type="submit"
                style={{ width: "100%", backgroundColor: "orange" }}
              >
                <i className="fas fa-fire"></i>
              </Button>
            </Col>
          </Row>
        </Form>
    </>
  );
}

export default MessageForm;
