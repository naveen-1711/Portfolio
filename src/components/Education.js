import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';

const Education = () => (
  <Row className="justify-content-center">
    <Col md={8}>
      <h2>Education</h2>
      <Table striped bordered hover responsive>
        <tbody>
          <tr>
            <td>Bachelor of Engineering (ECE)</td>
            <td>PSNA College of Engineering and Technology (2019-2023)</td>
            <td>8.25 CGPA</td>
          </tr>
          <tr>
            <td>12th Grade</td>
            <td>Bharathiyar Matric HSS (2018-2019)</td>
            <td>96.4%</td>
          </tr>
          <tr>
            <td>10th Grade</td>
            <td>Bharathiyar Matric HSS (2016-2017)</td>
            <td>78%</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  </Row>
);

export default Education;
