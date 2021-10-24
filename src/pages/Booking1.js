import React from 'react'
import {Link} from 'react-router-dom';

const Booking1 = () => {
    return (
        <div className="booking-1-main">

            <h1>First booking page</h1>

            <Link to = "/confirmation">
                <button className="confirm-button">Confirm Service</button>
            </Link>

        </div>
    )
}

export default Booking1
