import '../App.css';
import { Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import axios from 'axios';
import env from "react-dotenv";



const Idcard_from = () => {
  const [nineten, setNineten] = useState(false);
  const [bbs, setBbs] = useState(false);


  const [name, setName] = useState('');
  const [roll, setRoll] = useState('');
  const [student_phone, setStudent_phone] = useState('');
  const [gurdiean_phone, setGurdiean_phone] = useState('');
  const [bloodgroup, setBloodgroup] = useState('');
  const [degree, setDegree] = useState('');
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState('');
  const [session, setSession] = useState('');
  const [group, setGroup] = useState('');
  const [image, setImage] = useState('');

  const [show_image, setShow_image] = useState('');
  const [loading, setLoading] = useState(false);
  const [respons_result, setRespons_result] = useState([]);
  const [respons_result_message, setRespons_result_message] = useState("");

  const [submit_active, setSubmit_active] = useState(false);


  useEffect(() => {
    if (degree === "ELEVEN" || degree === "TWELVE") {
      if (name !== "" && roll !== "" && student_phone !== "" && gurdiean_phone !== "" && bloodgroup !== "" && degree !== "" && section !== "" && session !== "" && group !== "" && image !== "") {
        setSubmit_active(true)
      }
    }

    if (degree === "B.A.(PASS)" || degree === "B.S.S.(PASS)" || degree === "B.S.C.(PASS)" || degree === "B.B.S.(PASS)") {
      if (name !== "" && roll !== "" && student_phone !== "" && gurdiean_phone !== "" && bloodgroup !== "" && degree !== "" && session !== "" && image !== "") {
        setSubmit_active(true)
      }
    }
  })





  const handleSelectChange = (event) => {
    if (event.target.value === "ELEVEN" || event.target.value === "TWELVE") {
      setNineten(false);
      setDegree(event.target.value)
    } else {
      setNineten(true)
    }

    if (event.target.value === "B.A.(PASS)" || event.target.value === "B.S.S.(PASS)" || event.target.value === "B.S.C.(PASS)" || event.target.value === "B.B.S.(PASS)") {
      setBbs(false)
      setDegree(event.target.value)
    } else {
      setBbs(true)
    }
  }




  function changePhotoHandaller(file) {
    setImage(file[0]);
    setShow_image(URL.createObjectURL(file[0]))
  }





  async function onsubmit(e) {
    if (image) {
      setLoading(true)
      const formData = new FormData();
      formData.append('student_name', name);
      formData.append('class_roll', roll);
      formData.append('blood_group', bloodgroup);
      formData.append('student_phone_number', student_phone);
      formData.append('parents_phone_number', gurdiean_phone);
      formData.append('degree', degree);
      formData.append('department', department);
      formData.append('section', section);
      formData.append('session', session);
      formData.append('group', group);
      formData.append('picture', image);

      await axios.post(`${process.env.REACT_APP_BASE_URL}/addidcard_withfile`, formData)
        .then(response => {
          if (!response.data.status) {
            setRespons_result_message(response.data.message);
            setLoading(false)
          }
          setLoading(false)
          setRespons_result(response.data.result)
        })
    } else {
      alert("Add please image")
    }
  }


  const closereferesh = () => {
    setRespons_result("")
    setRespons_result_message("")
    window.location.reload(false)
  }



  return (
    <>




      {loading && <div className="loading">Loading....</div>}

      {respons_result.length !== 0 &&
        <div className="resutl_main">
          <div className="resutl_header">Your infomation is complete submited</div>
          <div className="resutl_body">
            <div className="resultlist"><img src={`${process.env.REACT_APP_BASE_URL}/filepath/${respons_result.picture}`} alt="Not Found" /></div>
            <div className="field" style={{ fontWeight: 'bold' }}>Student Name : {respons_result.student_name}</div>
            <div className="field">Class Roll : {respons_result.class_roll}</div>
            <div className="field">Student Phone Number : {respons_result.student_phone_number}</div>
            <div className="field">Gurdiean Phone Number : {respons_result.parents_phone_number}</div>
            <div className="field">Your Group : {respons_result.group}</div>
            <div className="field">Your Degree : {respons_result.degree}</div>
            <div className="field">Blood Group : {respons_result.blood_group}</div>
            <div className="field">Your Department : {respons_result.department}</div>
            <div className="field">Your Session : {respons_result.session}</div>
            <div className="field">Your Section : {respons_result.section}</div>
          </div>


          <div className="close" onClick={() => closereferesh()}>Close</div>
        </div>
      }

      {respons_result_message !== "" &&
        <div className="resutl_main">
          <div className="resutl_body">
            <div style={{ fontSize: '18px', color: 'red' }}>{respons_result_message}</div>
            <div className="close" onClick={() => closereferesh()}>Close</div>
          </div>
        </div>
      }



      <div className="main">
        <div className="header">
          <div className="header_logo"><img src='./logo.png' /></div>
          <div className="header_name">Kushtia Govt College</div>
          <div className="header_idcard">Id Card Registration From</div>
        </div>
        <hr />
        <br />


        <div className="flex-container">

          <div className="field">


            <Form.Label className="formLabel">Student Name</Form.Label>
            <Form.Control required="required" style={{ border: name.length > 0 ? '' : '1px solid red' }} onChange={e => setName(e.target.value)} placeholder="Student Name" />
            <Form.Label className="formLabel" style={{ color: 'red', fontSize: '12px' }}> {name.length > 0 ? '' : 'Name must be at characters'}</Form.Label>
          </div>

          <div className="field">
            <Form.Label className="formLabel">Class Roll</Form.Label>
            <Form.Control type='number' style={{ border: roll.length > 0 ? '' : '1px solid red' }} onChange={e => setRoll(e.target.value)} placeholder="Class Roll" />
            <Form.Label className="formLabel" style={{ color: 'red', fontSize: '12px' }}> {roll.length > 0 ? '' : 'Roll must be at number'}</Form.Label>
          </div>

          <div className="field">
            <Form.Label className="formLabel">Student Phone Number</Form.Label>
            <Form.Control type='number' style={{ border: student_phone.length > 0 ? '' : '1px solid red' }} onChange={e => setStudent_phone(e.target.value)} placeholder="01710000000" />
            <Form.Label className="formLabel" style={{ color: 'red', fontSize: '12px' }}> {student_phone.length > 0 ? '' : 'Phone must be at number'}</Form.Label>
          </div>


          <div className="field">
            <Form.Label className="formLabel">Gurdiean Phone Number</Form.Label>
            <Form.Control type='number' style={{ border: gurdiean_phone.length > 0 ? '' : '1px solid red' }} onChange={e => setGurdiean_phone(e.target.value)} placeholder="01710000000" />
            <Form.Label className="formLabel" style={{ color: 'red', fontSize: '12px' }}> {gurdiean_phone.length > 0 ? '' : 'Phone must be at number'}</Form.Label>
          </div>


          <div className="field">
            <Form.Label className="formLabel">Blood Group</Form.Label>
            <Form.Select style={{ border: bloodgroup.length > 0 ? '' : '1px solid red' }} onChange={e => setBloodgroup(e.target.value)}>
              <option selected disabled>Select Your Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </Form.Select>
          </div>



          <div className="field">
            <Form.Label className="formLabel" >Select Your Degree</Form.Label>
            <Form.Select style={{ border: degree.length > 0 ? '' : '1px solid red' }} onChange={handleSelectChange}>
              <option selected disabled >Select Your Degree</option>
              <option value="ELEVEN">ELEVEN</option>
              <option value="TWELVE">TWELVE</option>
              <option value="B.A.(PASS)">B.A.(PASS)</option>
              <option value="B.S.S.(PASS)">B.S.S.(PASS)</option>
              <option value="B.S.C.(PASS)">B.S.C.(PASS)</option>
              <option value="B.B.S.(PASS)">B.B.S.(PASS)</option>
            </Form.Select>
          </div>


          {nineten && bbs ?

            <div className="field">
              <Form.Label className="formLabel" >Select Your Department</Form.Label>
              <Form.Select style={{ border: department.length > 0 ? '' : '1px solid red' }} onChange={e => setDepartment(e.target.value)}>
                <option selected disabled> Select Your Department</option>
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
            : ""}

          {bbs &&
            <div className="field">
              <Form.Label className="formLabel">Select Your Section</Form.Label>
              <Form.Select style={{ border: section.length > 0 ? '' : '1px solid red' }} onChange={e => setSection(e.target.value)}>
                <option selected disabled>Select Your Section</option>
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

          }
          <div className="field">
            <Form.Label className="formLabel"> Select Your Session</Form.Label>
            <Form.Select style={{ border: session.length > 0 ? '' : '1px solid red' }} onChange={e => setSession(e.target.value)}>
              <option selected disabled>Select Your Session</option>
              <option value="2020-21">2020-21</option>
              <option value="2021-22">2021-22</option>
              <option value="2022-23">2022-23</option>
            </Form.Select>
          </div>


          {bbs &&
            <div className="field">
              <Form.Label className="formLabel">Select Your Group</Form.Label>
              <Form.Select style={{ border: group.length > 0 ? '' : '1px solid red' }} onChange={e => setGroup(e.target.value)}>
                <option selected disabled>Select Your Group</option>
                <option value="Science">Science</option>
                <option value="Art's">Art's</option>
                <option value="Commerce">Commerce</option>
              </Form.Select>
            </div>
          }



          <div className="field">
            <Form.Label className="formLabel">Upload your image (Required image size .8x.9 In)</Form.Label>
            <Form.Control type='file' style={{ border: image !== "" ? '' : '1px solid red' }} onChange={(e) => changePhotoHandaller(e.target.files)} />
          </div>
        </div>
        {image !== "" && <div className='imageshow'><img src={show_image} alt="Not Found" /></div>}
        <br />
        {submit_active &&
          <div className='submit' onClick={() => onsubmit()}>Submit Entry</div>
        }

      </div>

      <br />
      <br />
      <div className='footer'>
        <div className=''>© 2023 <a href="www.bytesolutionbd.com" style={{ color: 'white' }}>bytesolution</a>. All rights reserved.</div>
        <div className=''>Support phone Number +880179 08 975 89 </div>
      </div>


    </>
  );
}

export default Idcard_from;

