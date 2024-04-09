import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import LoginForm from "./components/Form/LoginForm";
import TalentJob from "./pages/talent/TalentJob";
import TalentJobDetail from "./pages/talent/TalentJobDetail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/talent-job" element={<TalentJob />} />
      <Route path="/job-detail" element={<TalentJobDetail/>}/>
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
