import React from 'react';
import AppRoutes from './AppRoutes';
import './App.css';
import Apps from './components/Apps';
import Resume from './components/Teacher/Resume';
import Student from './components/Education/Student';
// import ResumeRaj from './components/Accountent/ResumeRej';
import Accountent from './components/Accountent/Accountent';
import NewResume from './components/new/NewResume';
import Profile from './components/Maneger/Profile';
// import Minister from './components/HOD/Minister';



const App = () => {
  return (
    <div className="App">
      <h1>Authentication Registarion From</h1>
      <AppRoutes />
      <Apps />
      <Resume />
      <Student />
      <Accountent />
    {/* <ResumeRaj /> */}
    <NewResume />
    <Profile />
    {/* <Minister /> */}
  </div>
    
  );
};

export default App;
