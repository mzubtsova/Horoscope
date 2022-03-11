
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import DayOptions from './DayOptios';
import HoroscopeResults from './HoroscopeResults';
import SignButtons from './SignButtons';
import Footer from './Footer';

function App(props) {
  const [horoscope, setHoroscope] = useState([]);
  const [userChoice, setUserChoice] = useState('');
  const [dateChoice, setDateChoice] = useState('');
  const signSelection = (sign) => {
    setUserChoice(sign)
  }
  const dateSelection = (date) => {
    setDateChoice(date)
  }
  useEffect(() => {
    if (userChoice != '' && dateChoice != '') {
      axios({
        url: 'https://aztro.sameerkumar.website/',
        method: 'POST',
        responseType: 'json',
        params: {
          sign: userChoice,
          day: dateChoice
        }

      })
        .then(response => {
          console.log(response.data);
           setHoroscope(response.data)
        })
    }
  }, [userChoice, dateChoice])
  console.log(userChoice, dateChoice, horoscope)
  return (
    <>
      <div>
        <h1>Horoscope</h1>
      </div>
      
      <SignButtons handleSignSelection={signSelection} />
      {userChoice ? <DayOptions handleDateSelection={dateSelection} /> : null}
      <HoroscopeResults getHoroscope={horoscope}/>
      <Footer />
    </>

  );
}

export default App;