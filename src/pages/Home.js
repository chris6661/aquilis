import React from 'react'
import {Link} from 'react-router-dom';
import gaming from '../images/gaming1.jpg'
const Home = () => {
    return (
                <div className="container-fluid">

                    <div className="home">

                        <div>
                                <div className="learn">

                                <p>Aquilis Computer Repair, Sales, & IT Services is one of the Pittsburgh areas most trusted computer and device repair shops. The proof is in the our customer testimonials, outstanding reputation, and technological expertise. Offering expert, affordable, and fast services in-home, in-store, and remotely, Aquilis can repair it all at the greatest convenience for you!</p>

                                    <Link to = "/about"><button className="about-button"> Learn More! </button>
                                    </Link>

                                </div>

                                <br/>

                                <div className="solutions">
                                    <h1>Professional business solution</h1>

                                    <p>Aquilis is not only here for personal computer issues, we also offer business oslutions for other professionals. We can set you up with the best IT services that are perfect for your business, as well as assist with technical support and consulting for your business needs. From building new systems, to network installation, general servicing, and workstation troubleshooting, Aquilis is able to handle all of your business's technology and computer needs quickly, effectively, and efficiently. Call now!</p>
                                </div>

                                <div className="computer-sales">

                                    <h1>Computer Sales</h1>

                                    <p>At Aquilis, we sell new and used computers, desktops, and laptops in both PC and Mac formats. We offer custom built PCs for home or business, work, school, gaming, and even servers. Our customer built computers start at $499 and come with an outstanding 3 year warranty!</p>

                                </div>

                                    <div className="budget">
                                        <h5>Budget Computers</h5>
                                            <p className="budget-text">Budget friendly customer built computers!</p>

                                                <p className="budget-price">Starting @ $199</p>

                                    </div>

                                    <div className="gaming">
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 gaming">

                                                <h5>Gaming Computers</h5>
                                                    <p className="gaming-text">Want to take your game to the next level? Ask us about gaming computers and let's figure out how to get back in the game together!</p>
                                                    
                                                        <p className="gaming-price">Starting @ $499</p>
                                            </div>

                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 gaming">
                                                <img src={gaming} alt="gaming laptop" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bws">
                                        <h5>Business Workstations</h5>
                                            <p className="bws-text">Office change recently? We can help you get set up with a workstation that will leave your coworkers jealous and keeo you on track! </p>
                                            
                                                <p className="bws-price">Starting @ $299</p>

                                    </div>


                            </div>
                    </div>
                </div>
    )
}

export default Home;
