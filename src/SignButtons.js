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
            <div className='buttons'>
                <button className="aries" id="aries" onClick={handleSignSelection}>Aries
                    <br />MAR 21 - APR 20
                </button>
                <button className="taurus" id="taurus" onClick={handleSignSelection}>Taurus
                    <br />APR 21 - MAY 20
                </button>
                <button className="gemini" id="gemini" onClick={handleSignSelection}>Gemini
                <br />MAY 21 - JUNE 21
                </button>
                <button className="cancer" id="cancer" onClick={handleSignSelection}>Cancer
                <br />JUN 22 - JUL 22
                </button>
                <button className="leo" id="leo" onClick={handleSignSelection}>Leo
                    <br />JUL23 - AUG 22
                    </button>
                <button className="virgo" id="virgo" onClick={handleSignSelection}>Virgo
                <br />AUG 23 - SEP 22
                </button>
                <button className="libra" id="libra" onClick={handleSignSelection}>Libra
                <br />SEP 23 - OCT 22
                </button>
                <button className="scorpio" id="scorpio" onClick={handleSignSelection}>Scorpio
                <br />OCT 23 - NOV 22
                </button>
                <button className="sagittarius" id="sagittarius" onClick={handleSignSelection}>Sagittarius
                <br />NOV 23 - DEC 21
                </button>
                <button className="capricorn" id="capricorn" onClick={handleSignSelection}>Capricorn
                DEC 22 - JAN 19
                </button>
                <button className="aquarius" id="aquarius" onClick={handleSignSelection}>Aquarius
                <br />JAN 20 - FEB 18
                </button>
                <button className="pisces" id="pisces" onClick={handleSignSelection}>Pisces
                    <br />FEB 19 - MAR 20
                </button>
            </div>
            <div className="results">
                <HoroscopeResults signChosen={userChoice}/>
            </div>
        </section>
    )
}

export default SignButtons;