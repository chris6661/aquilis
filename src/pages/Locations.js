import React from 'react'

const Locations = () => {
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6">

                <address>
                    <h2>Pittsburgh/North Hills <br/></h2>
                    2315 Babcock Blvd. <br/>
                    Pittsburgh, PA 15237 <br/>
                    Tel.: 412-931-2400 <br/>
                    Fax: 412-931-4200
                </address>

                </div>
                {/* <div className="col-md-6"> */}
                    
                    <div className="north-hills">

                        <iframe title="north-hills-aquilis-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.275923416388!2d-80.00358408530573!3d40.513391957680184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f35a46c9b279%3A0x3b25ca10ee61b526!2s2315%20Babcock%20Blvd%2C%20Pittsburgh%2C%20PA%2015237!5e0!3m2!1sen!2sus!4v1625006541785!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

                    {/* </div> */}
                </div>
            </div>                

            <div cn="glassport">

            <iframe title = "glassport-aquilis-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.2527166196205!2d-79.89212548531215!3d40.33673956842569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834e51975044c6b%3A0xf5c882788120e2d0!2sAquilis!5e0!3m2!1sen!2sus!4v1625006759059!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>

            </div>
        </div>
    )
}

export default Locations;
