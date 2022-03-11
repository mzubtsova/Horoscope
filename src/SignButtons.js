// SignButtons.js
import { useState } from 'react';

import HoroscopeResults from "./HoroscopeResults";
// import DayOptions from './DayOptios';



function SignButtons(props) {
    const [userChoice, setUserChoice] = useState(false);
    const handleSignSelection = (event) => {
        props.handleSignSelection(event.target.id)
        setUserChoice(true)
    }
    return (
        <section>
            <div>
                <button className="aries" id="aries" onClick={handleSignSelection}>Aries</button>
                <button className="taurus" id="taurus" onClick={handleSignSelection}>Taurus</button>
                <button className="gemini" id="gemini" onClick={handleSignSelection}>Gemini</button>
                <button className="cancer" id="cancer" onClick={handleSignSelection}>Cancer</button>
                <button className="leo" id="leo" onClick={handleSignSelection}>Leo</button>
                <button className="virgo" id="virgo" onClick={handleSignSelection}>Virgo</button>
                <button className="libra" id="libra" onClick={handleSignSelection}>Libra</button>
                <button className="scorpio" id="scorpio" onClick={handleSignSelection}>Scorpio</button>
                <button className="sagittarius" id="sagittarius" onClick={handleSignSelection}>Sagittarius</button>
                <button className="capricorn" id="capricorn" onClick={handleSignSelection}>Capricorn</button>
                <button className="aquarius" id="aquarius" onClick={handleSignSelection}>Aquarius</button>
                <button className="pisces" id="pisces" onClick={handleSignSelection}>Pisces</button>
            </div>
            <div className="results">
                <HoroscopeResults signChosen={userChoice}/>
            </div>
        </section>
    )
}

export default SignButtons;