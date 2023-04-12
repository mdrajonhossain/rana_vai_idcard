import logo from './logo.svg';
import './App.css';
import { Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useState } from "react";



const Nine = () => {
 


 


  return (
    <div className="container" style={{ marginTop: '5%' }}>



      <Form style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <Form.Label style={{ marginTop: 10 }}>Select Your Department</Form.Label>
            <Form.Select>
              <option value="2">Select Your Department</option>
              <option value="2">FACULTY OF ARTS</option>
              <option value="2">DEPARTMENT OF ARABIC</option>
              <option value="2">DEPARTMENT OF BENGALI</option>
              <option value="2">DEPARTMENT OF ENGLISH</option>
              <option value="2">DEPARTMENT OF PALI</option>
              <option value="2">BSC</option>
              <option value="2">HONOURS</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label style={{ marginTop: 10 }}>Select your Section</Form.Label>
            <Form.Select>
              <option value="2">Select Your Section</option>
              <option value="2">FACULTY OF ARTS</option>
              <option value="2">DEPARTMENT OF ARABIC</option>
              <option value="2">DEPARTMENT OF BENGALI</option>
              <option value="2">DEPARTMENT OF ENGLISH</option>
              <option value="2">DEPARTMENT OF PALI</option>
              <option value="2">BSC</option>
              <option value="2">HONOURS</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>





      <Form style={{ marginTop: '20px' }}>
        <Row>
          <Col>
            <Form.Label style={{ marginTop: 10 }}>Select Your Session</Form.Label>
            <Form.Select>
              <option value="2">Select Your Department</option>
              <option value="2">FACULTY OF ARTS</option>
              <option value="2">DEPARTMENT OF ARABIC</option>
              <option value="2">DEPARTMENT OF BENGALI</option>
              <option value="2">DEPARTMENT OF ENGLISH</option>
              <option value="2">DEPARTMENT OF PALI</option>
              <option value="2">BSC</option>
              <option value="2">HONOURS</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label style={{ marginTop: 10 }}>Select Your Group</Form.Label>
            <Form.Select>
              <option value="2">Select Your Section</option>
              <option value="2">FACULTY OF ARTS</option>
              <option value="2">DEPARTMENT OF ARABIC</option>
              <option value="2">DEPARTMENT OF BENGALI</option>
              <option value="2">DEPARTMENT OF ENGLISH</option>
              <option value="2">DEPARTMENT OF PALI</option>
              <option value="2">BSC</option>
              <option value="2">HONOURS</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>


      <Form.Group controlId="formFile" className="mb-3" style={{ marginTop: 20 }}>
        <Form.Label>Upload Your Picture (Required 20x24mm)</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </div>
  );
}

export default Nine;

