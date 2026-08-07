import './App.css';
import './Component/Home.css';
import {Routes,Route,Link} from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import Tohome from './Component/Tomhome';
import Tohome2 from './Component/Tohome2';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <nav>

        <div className="Routes_id">
            
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            
        </div>
        </nav>
  <Routes>
    <Route path='/' element={<Home/>}/>

    <Route path='/about' element={<About/>}/>

    <Route index path='/tohome' element={<Tohome/>}/>

    <Route path='/contact' element={<Contact/>}/>

    <Route path='/tohome2' element={<Tohome2/>}/>

    <Route path='*' element={<Error/>}/>
  </Routes>
    </div>
  );
}   

export default App;
