
import axios from 'axios';
import { useEffect, useState, UseState } from 'react';
import './App.css';
import SignButtons from './SignButtons';

function App(props) {
  const [horoscope, setHoroscope] = useState([]);
  const [userChoice, setUserChoice] = useState('');
  const signSelection = (sign) => {
    setUserChoice(sign)
  }
  useEffect(() => {
    if (userChoice != '') {
      axios({
        url: 'https://aztro.sameerkumar.website/',
        method: 'POST',
        responseType: 'json',
        params: {
          sign: userChoice,
          day: 'tomorrow'
        }

      })
        .then(response => {
          console.log(response.data);

        })
    }
  }, [userChoice])
  return (
    <>
      <div>
        <h1>Horoscope</h1>
      </div>
      <SignButtons handleSignSelection={signSelection} />
    </>

  );
}

export default App;