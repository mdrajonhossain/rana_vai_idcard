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
const handleChange=()=>{
	
}


  return (
    
    <div className="main">

    <div className="flex-container">

      <div className="field">        
      <Form.Label className="formLabel">Student Name</Form.Label>
      <Form.Control onChange={()=>handleChange()} placeholder="Student Name" />       
      </div>

      <div className="field">
        <Form.Label className="formLabel">Class Roll</Form.Label>
        <Form.Control onChange={()=>handleChange()} placeholder="Class Roll" />        
      </div>

      <div className="field">
        <Form.Label className="formLabel">Student Phone Number</Form.Label>
        <Form.Control onChange={()=>handleChange()} placeholder="01710000000" />        
      </div>


      <div className="field">
        <Form.Label className="formLabel">Gurdiean Phone Number</Form.Label>
        <Form.Control onChange={()=>handleChange()} placeholder="01710000000" />        
      </div>


       <div className="field">
         <Form.Label className="formLabel">Blood Group</Form.Label>
            <Form.Select onChange={()=>handleChange()}>
			  <option>Select Your Blood Group</option>
              <option value="2">A+</option>
              <option value="2">A-</option>
              <option value="2">B+</option>
              <option value="2">B-</option>
              <option value="2">O+</option>
              <option value="2">O-</option>
              <option value="2">AB+</option>
              <option value="2">AB-</option>
            </Form.Select>
      </div>



       <div className="field">
         <Form.Label className="formLabel">Select Your Degree</Form.Label>
            <Form.Select onchange="myFunction()">
              <option >Select Your Degree</option>
              <option value="ELEVEN">ELEVEN</option>
              <option value="TWELVE">TWELVE</option>
              <option value="B.A.(PASS)">B.A.(PASS)</option>
              <option value="B.S.S.(PASS)">B.S.S.(PASS)</option>
              <option value="B.S.C.(PASS)">B.S.C.(PASS)</option>
              <option value="B.B.S.(PASS)">B.B.S.(PASS)</option>
            </Form.Select>
      </div>



       <div className="field">
         <Form.Label className="formLabel">Select Your Department</Form.Label>
            <Form.Select>
            <option>Select Your Department</option>
              <option value="Bangla">Bangla</option>
              <option value="English">English</option>
              <option value="Math">Math</option>
              <option value="History">History</option>
              <option value="Islamic Studies">Islamic Studies</option>
              <option value="2">Finance & Banking</option>
              <option value="Accounting">Accounting</option>
              <option value="Management">Management-</option>
              <option value="Marketing">Marketing</option>

            </Form.Select>
      </div>


       <div className="field">
         <Form.Label className="formLabel">Select Your Section</Form.Label>
            <Form.Select>
              <option >Select Your Section</option>
            <option value="Padma">Padma</option>
            <option value="Meghna">Meghna</option>
            <option value="Jamuna">Jamuna</option >
            <option value="Garai">Garai</option>
            <option value="Tista">Tista</option>
            <option value="Surma">Surma</option>
            <option value="Karnafuli">Karnafuli</option>
            <option value="Madhumati">Madhumati</option>
            <option value="Chitra">Chitra</option>
            </Form.Select>
      </div>


       <div className="field">
         <Form.Label className="formLabel">Select Your Session</Form.Label>
            <Form.Select>
              <option >Select Your Session</option>
              <option value="2020-21">2020-21</option>
              <option value="2021-22">2021-22</option>
              <option value="2022-23">2022-23</option>
            </Form.Select>
      </div>


      <div className="field">
         <Form.Label className="formLabel">Select Your Group</Form.Label>
            <Form.Select>
            <option>Select Your Group</option>
              <option value="Science">Science</option>
              <option value="Art's">Art's</option>
              <option value="Commerce">Commerce</option>
            </Form.Select>
      </div>


    </div> 


    </div>
  );
}

export default App;

