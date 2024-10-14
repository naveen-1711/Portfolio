import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';

const Skills = () => (
  <Row className="justify-content-center">
    <Col>
      <h2>Skills & Tools</h2>
      <ListGroup>
        <ListGroup.Item><strong>Frontend:</strong> HTML, CSS, JavaScript, ReactJS, Bootstrap</ListGroup.Item>
        <ListGroup.Item><strong>Backend: </strong>Java, Spring Boot, Oracle SQL</ListGroup.Item>
        <ListGroup.Item><strong>Other Skills: </strong>Git, Data Engineering, J2EE</ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
);

export default Skills;
