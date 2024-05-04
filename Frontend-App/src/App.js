import React from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import LoginForm from "./components/Form/LoginForm";
import TalentJob from "./pages/talent/TalentJob";
import TalentJobDetail from "./pages/talent/TalentJobDetail";
import JobManagement from "./pages/company/JobManagement";
import JobCreate from "./pages/company/JobCreate";
import Talents from "./pages/company/Talents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/jobs" element={<TalentJob />} />
      <Route path="/job-detail" element={<TalentJobDetail/>}/>
      <Route path="/job management" element={<JobManagement/>}/>
      <Route path="/job create" element={<JobCreate/>}/>
      <Route path="/talents" element={<Talents/>}/>
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
