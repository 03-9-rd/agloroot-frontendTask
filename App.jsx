import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import { AuthProvider } from "./context/AuthContext"; // ✅ Ensure this import is correct

const App = () => {
  return (
    <AuthProvider>
      
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      
    </AuthProvider>
  );
};

export default App;
