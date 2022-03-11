// displying results on the page


function HoroscopeResults({getHoroscope}) {
    console.log(getHoroscope);
    return (
        <div>
                { getHoroscope? <p> {getHoroscope.color} </p> : null}
       
       </div>
    );
};
export default HoroscopeResults;