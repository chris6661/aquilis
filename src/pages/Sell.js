import React from 'react'
import tablet from '../images/phoneandtablet.jpeg';
import monitor from "../images/monitor.jpg";
import macbook from "../images/macbook-stock.jpg";
import desktop from "../images/desktop-stock.jpg";

const Sell = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className ="row">
                    <div className="sales">

                        <div className="sales-main">
                            <h1>Sales</h1>
                                <p>At Aquilis, we sell new and used computers, desktops, and laptops in PC and Mac formats. If you're not sure what you need, give us a call or stop on in!<br/><br/>
                                
                                We offer custom built PCs for a variety of uses such as work, school, gaming, or even servers. Most custom PCs start at $499 and one of our techs will sit with you and design the best for your home or business. Additionally, our custom built PCs come with a better warranty than going to a "big box" store, and all custom built computers come with a minimum 3 year warranty free of charge, two years more than a typical "big box" store. <br/><br/>
                                
                                In store, we sell computer components such as hard drvies, memory, power supplies, motherboards and processors. We also sellaccessories such as keyboards, mice, flash drives, and more. Finally, we are able to help you tkae care of issues with screens or screen replacements, battery or charger issues, and other parts you may need to get back up and running!</p>
                        </div>

                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sales-tablets">
                                <img src={tablet} alt="phones and tablets" />

                                    <h5>Tablets and Phones</h5>
                                </div>

                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sales-monitors">
                                <img src={monitor} alt="computer monitor" />

                                    <h5>Monitors</h5>
                                </div>

                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sales-macbooks">
                                <img src={macbook} alt="macbook" />

                                    <h5>Macbooks</h5>
                                </div>

                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sales-desktops">
                                <img src={desktop} alt="desktop pc" />

                                    <h5>Desktops PCs</h5>
                                </div>

                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sales-windows">
                                <img src={tablet} alt="phones and tablets" />

                                    <h5>Windows</h5>
                                </div>

                                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 sales-parts">
                                <img src={tablet} alt="phones and tablets" />

                                    <h5>Parts and Accessories</h5>
                                </div>
                        {/* 515 w 335 h */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sell;
