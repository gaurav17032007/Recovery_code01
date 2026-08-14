import './App.css';
import Nav from './Pages/Navigation';
import Home from './Pages/Home';
import AddUser from './Pages/Add_User';
import Userlist from './Pages/User_list';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [Admin,setAdmin]=useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add_User" element={<AddUser setAdmin={setAdmin}/>} />
          <Route path="/User_List" element={<Userlist user={Admin}/>} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
