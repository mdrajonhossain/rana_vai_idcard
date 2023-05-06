import '../App.css';
import { Button, Form, FloatingLabel, Row, Col, Table } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Formedit from './Formedit';



const Dashboard = () => {
  const navigate = useNavigate();
  const [cardlist, setCardlist] = useState([]);
  const [alldata, setAlldata] = useState([]);
  const [degreefilter, setDegreefilter] = useState([]);

  const [editmodelshow, setEditmodelshow] = useState(false);




  const logout = () => {
    localStorage.removeItem("login");
    navigate("/admin");
  }

  useEffect(() => {
    getusershow();
  }, [])



  const getusershow = () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/idcard`)
      .then(response => {
        setCardlist(response.data.result)
        setAlldata(response.data.result)
      })
  }


  const filderfunction = (e) => {
    if (e.target.value === 'all') {
      setCardlist(alldata)
    } else {
      const filteredItems = alldata.filter(item => item.degree === e.target.value);
      setCardlist(filteredItems)
    }
  }


  const deleteoption = (e) => {

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        id: e._id,
        image_name: e.picture
      })
    };
    fetch(`${process.env.REACT_APP_BASE_URL}/idcard_delete`, requestOptions)
      .then(response => response.json())
      .then(data => {
        getusershow();
      });
  }


  const Editeopt = (e) => {
    setEditmodelshow(true)
    console.log(e)
  }



  return (
    <>
      <div className='container'>
        <div className='logoutbtn' onClick={() => logout()}>Signout</div>
        <div className=''>Dashboard</div>





        <div className="dash_filter">
          <Form.Select onChange={e => filderfunction(e)}>
            <option value="all">All Class</option>
            <option value="ELEVEN">ELEVEN</option>
            <option value="TWELVE">TWELVE</option>
            <option value="B.A.(PASS)">B.A.(PASS)</option>
            <option value="B.S.S.(PASS)">B.S.S.(PASS)</option>
            <option value="B.S.C.(PASS)">B.S.C.(PASS)</option>
            <option value="B.B.S.(PASS)">B.B.S.(PASS)</option>
          </Form.Select>
        </div>






        <Table striped bordered hover>
          <thead>
            <tr>
              <th>SL</th>
              <th>Degree</th>
              <th>Name</th>
              <th>Roll</th>
              <th>Blood</th>
              <th>Phone</th>
              <th>department</th>
              <th>section</th>
              <th>session</th>
              <th>group</th>
              <th>picture</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cardlist.map((card, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{card.degree}</td>
                    <td>{card.student_name}</td>
                    <td>{card.class_roll}</td>
                    <td>{card.blood_group}</td>
                    <td>{card.student_phone_number}</td>
                    <td>{card.department ? card.department : "Empty"}</td>
                    <td>{card.section ? card.section : "Empty"}</td>
                    <td>{card.session ? card.session : "Empty"}</td>
                    <td>{card.group ? card.group : "Empty"}</td>
                    <td><img className="listimage" src={`${process.env.REACT_APP_BASE_URL}/filepath/${card.picture}`} alt="Not Found" /></td>
                    <td>
                      <Button variant="danger" onClick={() => deleteoption(card)}>Delete</Button> &nbsp;
                      <Button variant="success" onClick={() => Editeopt(card)}>Edt</Button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </Table>
      </div>



      <Formedit
        show={editmodelshow}
        onHide={() => setEditmodelshow(false)}
      />




    </>
  );
}

export default Dashboard;

