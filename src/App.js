import logo from './logo.svg';
import './App.css';
import { Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useState } from "react";



const App = () => {
  const [level_one, setLevel_one] = useState(false);



  // const handleSelectChange = (event) => {
  //   if (event.target.value === "ELEVEN" || event.target.value === "TWELVE") {
  //     setLevel_one(true)
  //   } else {
  //     setLevel_one(false)
  //   }
  // }


  return (
    
    <div className="main">

    <div className="flex-container">

      <div className="field">        
      <Form.Label className="formLabel">Full Name</Form.Label>
        <Form.Control placeholder="First name" />        
      </div>

      <div className="field">
        <Form.Label className="formLabel">Full Class</Form.Label>
        <Form.Control placeholder="First name" />        
      </div>

      <div className="field">
        <Form.Label className="formLabel">Full Name</Form.Label>
        <Form.Control placeholder="First name" />        
      </div>


      <div className="field">
        <Form.Label className="formLabel">Full Name</Form.Label>
        <Form.Control placeholder="First name" />        
      </div>


       <div className="field">
         <Form.Label className="formLabel">Full Name</Form.Label>
            <Form.Select>
              <option value="2">A+</option>
              <option value="2">A-</option>
              <option value="2">B+</option>
              <option value="2">B-</option>
              <option value="2">O+</option>
              <option value="2">0-</option>
              <option value="2">AB+</option>
              <option value="2">AB-</option>
            </Form.Select>
      </div>



       <div className="field">
         <Form.Label className="formLabel">Full Name</Form.Label>
            <Form.Select>
              <option value="2">A+</option>
              <option value="2">A-</option>
              <option value="2">B+</option>
              <option value="2">B-</option>
              <option value="2">O+</option>
              <option value="2">0-</option>
              <option value="2">AB+</option>
              <option value="2">AB-</option>
            </Form.Select>
      </div>



       <div className="field">
         <Form.Label className="formLabel">Full Name</Form.Label>
            <Form.Select>
              <option value="2">A+</option>
              <option value="2">A-</option>
              <option value="2">B+</option>
              <option value="2">B-</option>
              <option value="2">O+</option>
              <option value="2">0-</option>
              <option value="2">AB+</option>
              <option value="2">AB-</option>
            </Form.Select>
      </div>


       <div className="field">
         <Form.Label className="formLabel">Full Name</Form.Label>
            <Form.Select>
              <option value="2">A+</option>
              <option value="2">A-</option>
              <option value="2">B+</option>
              <option value="2">B-</option>
              <option value="2">O+</option>
              <option value="2">0-</option>
              <option value="2">AB+</option>
              <option value="2">AB-</option>
            </Form.Select>
      </div>


       <div className="field">
         <Form.Label className="formLabel">Full Name</Form.Label>
            <Form.Select>
              <option value="2">A+</option>
              <option value="2">A-</option>
              <option value="2">B+</option>
              <option value="2">B-</option>
              <option value="2">O+</option>
              <option value="2">0-</option>
              <option value="2">AB+</option>
              <option value="2">AB-</option>
            </Form.Select>
      </div>


    </div> 


    </div>
  );
}

export default App;

