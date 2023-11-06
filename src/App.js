import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Places from './pages/Places';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route index element={<Home/>} />
      <Route path="/home" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="forgot-password" element={<ForgotPassword/>} />
        <Route path="user-profile" element={<Profile/>} />
       <Route path="dashboard" element={<Dashboard/>} />
       <Route path="available" element={<Places/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
