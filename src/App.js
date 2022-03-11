
import axios from 'axios';
import { useEffect, useState, UseState } from 'react';
import './App.css';

function App() {
  const [horoscope, setHoroscope] = useState({});
  useEffect(() => {
    axios({
      url: 'https://aztro.sameerkumar.website/',
      method: 'POST',
      responseType: 'json',
      params: {
        sign: 'Aries',
        day: 'tomorrow'
      }
    }).then((response) => {

      console.log(response);
  })
},[])
  return (
    <div>
      <h1>Horoscope</h1>
    </div>
  );
}

export default App;
