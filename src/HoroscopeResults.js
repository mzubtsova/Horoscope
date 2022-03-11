// displaying results on the page


function HoroscopeResults({getHoroscope}) {
    console.log(getHoroscope);
    return (
        <div>
            {getHoroscope ? <p> {getHoroscope.description} </p> : null}
            { getHoroscope? <p>COLOUR: {getHoroscope.color} </p> : null}
            {getHoroscope ? <p>COMPATIBILITY: {getHoroscope.compatibility} </p> : null}
            {getHoroscope ? <p>MOOD: {getHoroscope.mood} </p> : null}
            {getHoroscope ? <p>LUCKY NUMBER: {getHoroscope.lucky_number} </p> : null}
            {getHoroscope ? <p>LUCKY TIME: {getHoroscope.lucky_time} </p> : null}
       
       </div>
    );
};
export default HoroscopeResults;