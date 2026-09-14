import './App.css';
import InputApi from './Component/Location_Weather';
import DayWeather from './Component/5Day_weather';
import Location from './Component/Current_location';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState('');
  const [wait, setwait] = useState(true);

  return (
    <div className="App">

      <Location setwait={setwait} />

      {wait && (
        <div className="full_loader">
          <div className="glow_loader"></div>
        </div>
      )}

      {!wait && (
        <div className="fade_in">
          <InputApi setcount={setcount} />
          <DayWeather count={count} />
        </div>
      )}

    </div>
  );
}
export default App;