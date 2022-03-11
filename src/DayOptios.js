// getting data depending on user's choice

function DayOptions(props){
    const handleDateSelection = (event) => {
        props.handleDateSelection(event.target.id)
        // console.log(event.target.id);
    }
    return(
        <div>
            <button className="yesterday" id="yesterday" onClick={handleDateSelection}>Yesterday</button>
            <button className="today" id="today" onClick={handleDateSelection}>Today</button>
            <button className="tomorrow" id="tomorrow" onClick={handleDateSelection}>Tomorrow</button>
        </div>
    )
}
export default DayOptions;