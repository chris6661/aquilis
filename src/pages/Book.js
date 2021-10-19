import React from 'react'
import {Link} from 'react-router-dom';

const Book = () => {
    return (
        <div className="container-fluid">
            
            <div className="book-main">
                <h1>Book an appointment</h1>
                    <p>Click any of the links below to schedule an appointment with one of our technicians!</p>
            </div>

                <div className="booking-services">


                    <div className="container">

                        <div className="row">

                            <div className="col">
                                <div className="card1">
                                    <h3>In Store Appointment</h3>
                                        <h5>1 hour</h5>
                                            <h6>$20</h6>
                                                <Link to = "/calendar">
                                                    <button className="in-store-button">Book Now</button>
                                                </Link>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card2">
                                    <h3>In Home Service Call</h3>
                                        <h5>1 hour</h5>
                                            <h6>$74.99</h6>
                                                <Link to = "/calendar">
                                                    <button className="in-home-button">Book Now</button>
                                                </Link>
                                </div>
                            </div>


                            <div className="col">
                                <div className="card3">
                                    <h3>Commerical Service Call</h3>
                                        <h5>1 hour</h5>
                                            <h6>$99.99</h6>
                                                <Link to = "/calendar">
                                                    <button className="commercial-button">Book Now</button>
                                                </Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

        </div>
    )
}

export default Book;
