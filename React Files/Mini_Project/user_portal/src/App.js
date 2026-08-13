import './App.css';
import Nav from './Pages/Navigation';
import Home from './Pages/Home';
import AddUser from './Pages/Add_User';
import Userlist from './Pages/User_list';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Add_User" element={<AddUser />} />
          <Route path="/User_List" element={<Userlist />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
