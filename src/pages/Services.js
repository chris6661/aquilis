import React from 'react'

const Services = () => {
    return (
        <div className="services">
            {/* 3x3 grid is original site */}
            {/* topic, then goes in to what each one covers underneath */}
            {/* for development, start with h4 and 5 tags */}

            <div className="repairs-main">

                <h1>Repairs and Upgrades</h1>
                    <p>Aquilis offers fast, affordable, and expert computer repair, upgrades, and troubleshooting for your company or personal use. We offer IT services and consulting at a great rate, regardless of company or business size. </p>
            
            </div>

            <div className="repairs-info">

                <h3>Hardware Replacement</h3>
                <p>We can fix it all from broken screens to crashed hard drives, memory or motherboard replacement, and liquid damage. Stop in to see how we can help!</p>
                    <h5>Repairs</h5>
                        <p>We can fix almost anything both hardware and software for PC and Mac. If your computer is running slow, your screen needs replaced, or just need cosmetic damage fixed, call us today for an estimate or stop in for a diagnosis. We can fix these and more, and get you back up to speed!</p>
                    <h5>House Calls</h5>
                        <p>Is there an issue that you need us to come and check out? If it easier for us to come to you instead of bringing everything to us, we make house calls in the Greater-Pittsburgh Area and some parts of Beaver, Butler, Fayette, Washington, and Westmoreland counties. Give us a call and book an appointment!</p>


                <h3>Slow Computer?</h3>
                    <p>Is your computer running slower than usual or just want a speed boost? Are you worried you might have a virus? Bring it in and we'll bring you back up to speed!</p>
                        <h5>Software/Hardware Upgrades</h5>
                            <p>Is your anti-virus software in need of a major update? Do you need to upgrade to the latest version of Windows? Do you need more memory, or need to add a video card if you are an avid gamer? Call us today and we can help!</p>
                        <h5>Mobile Devices</h5>
                            <p>We can help you out with mobile devices as well, whether it's a tablet, iPad, or smart phone. Aquilis is here to help you with any of your needs regardless of device or screen size.</p>


                <h3>Business IT Services, Support, and Consulting</h3>
                    <p>Aquilis IT services are perfect for your business, whether you need a new system built, network installation done, general servicing, or troubleshooting your workstations.</p>
                        <h5>Computer Networking</h5>
                            <p>Wi-Fi issues? We can help you install your home network or your network at work. We will also ensure your network is set up correctly for security, speed/performance, and safety.</p>
                        <h5>For Small Business</h5>
                            <p>Aquilis is the perfect source to become your own IT staff! We service all types of businesses from boroughs, non-profits, first responder departments, and more! Our rates are very affordable compared to our competition and our techs are experts in technology as well as great with customer service so that you and your staff both fully understand what's going on. We can also offer a contract that is tailored to your needs so down time is minimized with our professional services.</p>


            </div>

        </div>
    )
}

export default Services;
