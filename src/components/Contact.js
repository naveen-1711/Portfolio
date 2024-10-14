import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Contact = () => (
  <section id="contact">
    <Row className="justify-content-center">
    <Col>
      <h2>Contact</h2>
      <ListGroup>
        <ListGroup.Item><strong>Current Location:</strong> Chennai</ListGroup.Item>
        <ListGroup.Item><strong>Permanent Location: </strong>Madurai</ListGroup.Item>
        <ListGroup.Item><strong>Email: </strong>naveenm1711@gmail.com</ListGroup.Item>
        <ListGroup.Item><strong>Phone: </strong>+91 8124858700</ListGroup.Item>
        <ListGroup.Item><strong>Profile: </strong>
            <a href="https://www.linkedin.com/in/naveen-m-9053b2255" target="_blank" rel="noopener noreferrer">LinkedIn / </a>
            <a href="https://github.com/naveen-1711" target="_blank" rel="noopener noreferrer">GitHub</a>
        </ListGroup.Item>
      <ListGroup.Item>
      <a href="/Naveen_M_CV.pdf" target="_blank" rel="noopener noreferrer" download>
      <Button variant="primary" className="mt-3">Download Resume</Button>
        </a>
      </ListGroup.Item>
      
      </ListGroup>
    </Col>
  </Row>
  </section>
);

export default Contact;
