import React from "react";
import Login from "./pages/Login";
import Form from "./pages/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
