import React from 'react'

const About = () => {
    return (
        <div className="container">
                <div className="about">
                <h1>Your computer repair experts</h1>

                <p>If you are in need of computer repair, sales, or IT services, our experienced technicians are here to help! with 2 convenient locations and services ranging from virus removal, troubleshooting, and network installations to screen and hardware replacements, computer sales, and general consultations, our experts at Aquilis are all you need for superior tech services.</p>
            
                <details className="mission">
                        <summary className="purpose">Our Mission & Purpose</summary>
                        <p>Our mission at Aquilis Computer Repair, Sales, and IT Services is to service the computer industry as a whole, starting with outstanding customer service and workmanship. Our speicalty is building custom computers for clients needing technology for personal, family, or business use, while also partaking in computer sales and services. </p>
                        <br/>
                        <p>In addition, we also have expert multimedia designs avaiolable from basic slideshow and video designs to advanced graphic design jobs. We offer a variety of computer parts and repair services in-store, in-home, and remotely for our customers convenience. Aquilis is your fast, friendly, reliable, and expert computer repair company for all of your technical needs!</p>

                </details>

                <details className="company">
                    <summary className="comp-found">Our company and founder</summary>
                    <p>Aquilis was founded and started by Nicholas Aquilante III in 2007, in Glassport, Pennsylvania, around 20 minutes from the city center. Originally started as a home based business repairing computers in the customers homes, we have since expanded our work to working with corporations as well as still maintaining relationships and completing regular house calls for our clients, as well as adding in services for building and networking of computers.</p>
                    <br />
                    <p>Nicholas Aquilante III opened his first official shop in 2009 in Glassport one year after graduating South Allegheny High School. What started as a hobby and something he was interested in at 12 years old became his passion fixing his first computer for his first 'client', his mother at the age of 13 when her employer's tech staff could not figure out the issue and how to fix it.</p>
                    <br />
                    <p>In his free time when he is not repairing computers, Nicholas likes taking trips back to Happy Valley (having attended school at Penn State) and tailgating the football games or visiting friends.</p>
                    </details>        

                </div>
        </div>
    )
}

export default About;
