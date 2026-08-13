import './App.css';
import { sendUserData } from "./Userapi";
import { useState } from 'react';
function App() {
  const [name, setname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await sendUserData(name);

    console.log(result);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setname(e.target.value)} />
        <button type='submit'>click</button>
      </form>
    </div>
  );
}

export default App;
