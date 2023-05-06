import '../Login.css';
import { Button, Form, FloatingLabel, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';





const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();







  const onsubmit = () => {
    if (email && password) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      };
      fetch(`${process.env.REACT_APP_BASE_URL}/admin_login`, requestOptions)
        .then(response => response.json())
        .then(data => {
          if (data.login_status) {
            localStorage.setItem("login", data.login_status);
            console.log(data.login_status);
            navigate('/dash')
          }
        });
    }
  }


  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" value={email} onChange={e => setemail(e.target.value)} placeholder="email address" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
            <div className="onsubmite" onClick={() => onsubmit()}>Admin login</div>
            <p className="message">Not registered? support contact</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

