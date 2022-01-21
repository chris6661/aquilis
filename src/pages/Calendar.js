import React from 'react'; 
import {Link} from 'react-router-dom';


const Calendar = () => {
    return (

        // import google calendar api
        // use google calendar api to display calendar
        // use google calendar api to add events

        <div>

            <h1>This is the calendar page</h1>

            <Link to = "/booking1">
                <button className="booking-button">Click Here To Continue Booking</button>
            </Link>

        </div>
    )
}

export default Calendar; 
