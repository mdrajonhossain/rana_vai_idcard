import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import Idcard_from from './component/Idcard_from';
import Dashboard from './component/Dashboard';
import PrivateRouteadmin from './utils/PrivateRouteadmin';
import Publicroute from './utils/Publicroute';
import Login from './component/Login';




const App = () => {



  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Idcard_from />} />
          {/* <Route index path="/admin" element={<Login />} /> */}
          <Route path="/admin" element={<Publicroute> <Login /> </Publicroute>} />
          <Route path="/dash" element={<PrivateRouteadmin> <Dashboard /> </PrivateRouteadmin>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

