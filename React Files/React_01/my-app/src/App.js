import './App.css';
import Header, { Fields } from './Component/Header';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { Fields } from './Component/Header';
import { useState } from 'react';
function App() {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [data, Setdata] = useState([]);
  function set() {
     Setdata([...data,{name,email}]);
     Setname("");
     Setemail("");
  }
  function remove(){
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className='text_filled'>
          <Stack direction="row" spacing={2}>
            <TextField onChange={(Event) => Setname(Event.target.value)}  
                       value={name}
                       id="filled-basic1"
                       label="Name" 
                       variant="filled" />

            <TextField onChange={(Event) =>Setemail(Event.target.value)}
                       value={email}
                       id="filled-basic2" 
                       label="gmail.com" 
                       variant="filled" />

            <Button variant="contained" color="success" onClick={set}><AddIcon /></Button>
          </Stack>
        </div>
      </header>
          <div className='Form_inline'>
        <div className='data_val'>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
          </div>
          {
          data.map((element,index)=>{
            return(
              <Fields
              key={index}
              name={element.name}
              email={element.email}
              index={index}
              />
            )
          })
          }
    </div>
  </div>
  );
}

export default App;
