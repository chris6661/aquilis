import React from 'react'

const Book = () => {
    return (
        <div className="container-fluid">
            
            <div className="book-main">
                <h1>Book an appointment</h1>
            </div>

            <div className="booking-services">

                <h3>In Store Appointment</h3>
                    <h5>1 hour</h5>
                        <h6>$20</h6>
                            <button>Book Now</button>

                <h3>In Home Service Call</h3>
                    <h5>1 hour</h5>
                        <h6>$74.99</h6>
                            <button>Book Now</button>

                <h3>Commerical Service Call</h3>
                    <h5>1 hour</h5>
                        <h6>$99.99</h6>
                            <button>Book Now</button>

            </div>

        </div>
    )
}

export default Book;
