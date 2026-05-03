import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  
  // 🔐 simple guard (we’ll improve later)
  const isAuthenticated = token && token !== "undefined";

  console.log("TOKEN:", token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={!isAuthenticated ? <Login onAuthSuccess={setToken} /> : <Navigate to="/" />} />
        <Route path="/register" element={!isAuthenticated ? <Register onAuthSuccess={setToken} /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;