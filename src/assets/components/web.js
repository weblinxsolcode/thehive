import { React, useContext, useState, useEffect } from 'react'
import '../css/style.css';
import logo from '../images/AnimatedHiveBlack.gif';
import boxes from '../images/boxes.png';
import decore from '../images/decore.png';
import { Link } from 'react-router-dom';
import test1 from '../images/dtk.png'
import test2 from '../images/gman.png'
import test3 from '../images/thanatos.png'
import { AccordionContext, useAccordionButton, Accordion, Card } from 'react-bootstrap'

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



function Web() {

    const [days, setGet_days] = useState(0);
    const [get_hours, setGet_hours] = useState(0);
    const [get_min, setGet_min] = useState(0);
    const [get_sec, setGet_sec] = useState(0);


    // let get_days = document.querySelector('#days').innerHTML
    // 			let get_hours = document.querySelector('#hours').innerHTML
    // 			let get_min = document.querySelector('#min').innerHTML
    // 			let get_sec = document.querySelector('#sec').innerHTML


    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            setGet_days(Math.floor(distance / (day)));
            setGet_hours(Math.floor((distance % (day)) / (hour)));
            setGet_min(Math.floor((distance % (hour)) / (minute)));
            setGet_sec(Math.floor((distance % (minute)) / second));
            // document.getElementById("days").innerText = ,
            // document.getElementById("hours").innerText = ,
            // document.getElementById("min").innerText = ,
            // document.getElementById("sec").innerText =;

            //do something later when date is reached
            if (distance < 0) {
                clearInterval(x);
            }
            //seconds
        }, 1000)


    function ContextAwareToggle({ children, eventKey, callback }) {


        const { activeEventKey } = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <button
                type="button"
                onClick={decoratedOnClick}
                className="acc-toggler"
                style={{ backgroundColor: "transparent", border: "none" }}
            >
                {isCurrentEventKey ? <i class="fas fa-minus" style={{ margin: "5px", color: "rgb(255, 212, 0)" }}></i> : <i class="fas fa-plus" style={{ margin: "5px", color: "rgb(255, 212, 0)" }}></i>}
            </button>
        );
    }
    return (
        <div className="App">

            {/* nav section */}
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to='/'>
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-center align-items-center ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link " aria-current="page" href="#about">ABOUT US</a></li>
                            <li class="nav-item"><a class="nav-link " aria-current="page" href="#techno">TECHNOLOGY</a></li>
                            <li class="nav-item"><a class="nav-link " aria-current="page" href="#feature">FEATURES</a></li>
                            <li class="nav-item"><a class="nav-link " aria-current="page" href="#roadmap">ROADMAP</a></li>
                            <li class="nav-item"><a class="nav-link " aria-current="page" href="#team">TEAM</a></li>
                            <li class="nav-item"><a class="nav-link " aria-current="page" href="#faq">FAQ</a></li>
                            <li class="nav-item"><a class="nav-link " aria-current="page" href="#links">Social Links</a></li>
                            <Link to="/whitepaper">
                                <li className="nav-item"><a className="nav-link " aria-current="page" href="#">WHITEPAPER</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* main section */}
            <section className="main">
                <div className="d-flex align-items-center flex-column justify-content-center child px-3 pt-4">
                    <h1 className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>The Hive</h1>
                    <h2 className="fs-2 fw-400 text-center">NFT Intelligence</h2>
                    <div className="row mx-0 justify-content-center">
                        <p className="col-lg-5 col-12 text-center fw-300">Bringing our holders the hottest alpha in the NFT space.
                        </p>
                    </div>
                    <div className="d-flex align-items-center  flex-wrap justify-content-center pro-parrent mx-3 p-2">
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress">
                                <span className="title timer" data-from="0" data-to="85" data-speed="1800" style={{ color: "rgb(255,212,0)" }}>{days}</span>
                                <div className="overlay"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <span className="fs-7" style={{ marginTop: "-10px", color: "rgb(255,212,0)", fontWeight: "bold" }}>Days</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress">
                                <span className="title timer" data-from="0" data-to="85" data-speed="1800" style={{ color: "rgb(255,212,0)" }}>{get_hours}</span>
                                <div className="overlay"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <span className="fs-7" style={{ marginTop: "-10px", color: "rgb(255,212,0)", fontWeight: "bold" }}>Hours</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress">
                                <span className="title timer" data-from="0" data-to="85" data-speed="1800" style={{ color: "rgb(255,212,0)" }}>{get_min}</span>
                                <div className="overlay"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <span className="fs-7" style={{ marginTop: "-10px", color: "rgb(255,212,0)", fontWeight: "bold" }}>Min</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress">
                                <span className="title timer" data-from="0" data-to="85" data-speed="1800" style={{ color: "rgb(255,212,0)" }}>{get_sec}</span>
                                <div className="overlay"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <span className="fs-7" style={{ marginTop: "-10px", color: "rgb(255,212,0)", fontWeight: "bold" }}>Sec</span>
                        </div>
                    </div>
                    <a href="https://discord.gg/DnVbe9RZkJ"><button className="btn btn-primary fs-8 fw-500 px-5 mt-4" style={{ backgroundColor: "rgb(255,212,0)", color: "black" }}>ENTER APP</button></a>
                </div>
            </section>

            {/* About section */}
            <section id='about' className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row mx-0">
                        <div className="col-lg-6 co-12 d-flex flex-column align-items-start" style={{ paddingTop: "105px" }}>
                            <span style={{ color: "rgb(255,212,0)" }}>About Us</span>
                            <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>Doxxed Technical Team</span>
                            <p className="fs-7 fw-300 pt-1">
                                The Hive team consists of highly skilled technical and security devs with decades of experience in the public, private, and financial sectors. We alpha harder than everyone else so you don't have to. We're doxxed to our holders.
                            </p>
                            <button className="btn btn-primary fs-8 fw-500 px-5 mt-4" style={{ backgroundColor: "rgb(255,212,0)", color: "black" }}>More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology section */}
            <div id='techno' className='tech_bg d-flex align-items-center py-5'>
                <div className="container px-4 mb-5 d-flex align-items-center">
                    <div className="card w-100  p-5 pb-0 d-flex flex-column align-items-center bg-transparent">
                        <span style={{ color: "rgb(255,212,0)" }}>TECHNOLOGY</span>
                        <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>Tools, Tricks, and Strategies</span>
                        <div className="row mx-0 justify-content-center">
                            <p className="fs-7 fw-300 pt-1 text-center col-lg-11 col-12">
                                The Hive brings our holders and community members the best tips, tricks, and strategies to leverage our alpha for max gains. Our testimonials speak for themselves. Come learn why we've been able to outpace many other alpha groups. The Hive will launch with many of the same benefits our community has come to expect from us, but we will be adding so much more.
                            </p>
                        </div>
                        <div className="row mx-0 justify-content-center w-100 ">
                            <div className="col-lg-6 col-12 card-2 d-flex p-4  justify-content-center align-items-center">
                                <a href="https://discord.gg/DnVbe9RZkJ"><button className="btn btn-primary fs-8 fw-500 px-5 mt-4">ENTER APP</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="decore">
                <img src={decore} alt="" />
            </div>

            {/* Features section */}
            <section id='feature' className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row align-items-center mx-0">
                        <div className="col-lg-6 co-12 d-flex flex-column align-items-start">
                            <span style={{ color: "rgb(255,212,0)" }}>New Features</span>
                            <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>New Innovations & Insights</span>
                            <p className="fs-7 fw-300 pt-1">
                                We are raising the bar of what you should expect from your alpha provider. We will not just be providing alpha, we are providing our token holders with ownership of The Hive in the form of a percentage of returns from mints, secondary sales, and the Founder's Pass vault.
                            </p>
                            <button className="btn btn-primary fs-8 fw-500 px-5 mt-4" style={{ backgroundColor: "rgb(255,212,0)", color: "black" }}>More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap section */}
            <div id='roadmap' className="container px-4 mb-5" style={{ minHeight: "100vh" }}>
                <div className="card w-100 card-bg py-5 pb-0 d-flex flex-column align-items-center">
                    <img src={boxes} className="boxes" alt="" />
                    <span style={{ color: "rgb(255,212,0)" }}>Next Stages</span>
                    <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>Roadmap</span>
                    <div className="row mx-0 mt-5 justify-content-center w-100">
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>01</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Activate Socials and Website</span>
                                <p className="fs-8 fw-200 pt-2">All of our social channels have been activated. Our brand new shiny Discord Server is live. The Hive community has been alerted and activated.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>02</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Founder's Pass Tokens</span>
                                <p className="fs-8 fw-200 pt-2">A total of 100 tokens will be available to mint, allowing for ownership in The Hive's royalties, secondary sales, and community vault. This is not a cash grab, this is true Web 3.0 decentralized ownership.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>03</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Founder's Pass Vault</span>
                                <p className="fs-8 fw-200 pt-2">The Hive will begin onboarding and tracking Founder's Pass Holders. The Founder's Pass Community Vault will be activated. Founder's Pass holders will begin receiving rewards from our team's insights, community plays, and secondary market sales.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>04</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Genesis Pass Tokens</span>
                                <p className="fs-8 fw-200 pt-2">A total of 1,000 tokens will be available to mint allowing access to our primary alpha channels in Discord. Access to brand new, custom developed dashboards and reports for members only access. Access to all new training and tutorial content in the form of training courses will be available with more added weekly. </p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>05</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>BeeGens NFT Project Launch</span>
                                <p className="fs-8 fw-200 pt-2">:The BeeGens NFT project is officially launched with a collection of 3,333 or 8,888 BeeGen NFTs (decided on by Founder's and Genesis Pass Holders) living on the Ethereum blockchain providing access to the The Hive Metaverse and Web 3.0 benefits, strictly for token holders.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>06</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Metaverse Activiation and Beyond</span>
                                <p className="fs-8 fw-200 pt-2">Founder's Pass Holders will determine the next evolution of The Hive, its investments, and direction to the Metaverse and beyond. Everything from gaming, tokenomics, investment decisions, and all future Web 3.0 decisions will be decided by Founder's Pass Holders.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 justify-content-center w-100 mt-4 ">
                    </div>
                </div>
            </div>

            <div className="decore">
                <img src={decore} alt="" />
            </div>

            {/* Buy section */}
            <section id='buy' className="d-flex align-items-center my-5">
                <div className="">
                    <div className="row mx-0">
                        <div className="col-lg-6 py-4 co-12 d-flex align-items-center  justify-content-center ">
                            <div className="row mx-0 justify-content-center">
                                <div className="d-flex flex-column align-items-start col-8">
                                    <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>Why buy an Alpha Pass?</span>
                                    <p className="fs-7">
                                        If you've spent time in our Discord server before, you know how profitable our alpha can be. We want to provide you with the tools and strategies that are necessary to make profitable decisions in the NFT space.
                                    </p>
                                    <Link to="/whitepaper">
                                        <button className="btn btn-dark fs-8 px-4" style={{ backgroundColor: "rgb(255,212,0)", color: "white", border: "none" }}>VIEW WHITEPAPER
                                            HERE</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team section */}
            <div id='team' className="container px-4 mb-4" style={{ minHeight: "80vh" }}>
                <div className="card w-100  py-5 pb-0 d-flex flex-column align-items-center">
                    <img src={boxes} className="boxes" alt="" />
                    <span style={{ color: "rgb(255,212,0)" }}>Our Team</span>
                    <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)", display: "flex", alignItems: "center", justifyContent: "center" }}>Finance, Tech, & Security Industry Experience</span>
                </div>
                {/* Team members section */}
                <section className="container d-flex w-100 justify-content-center align-items-center my-5">
                    <div className='tem_mem mt-4'>
                        <Accordion flush className='accord d-flex flex-wrap justify-content-between align-items-center'>
                            <Card className="m-0 d-flex flex-column align-items-center mb-3 acc-card">
                                <img src={test1} alt='' />
                                <Card.Header className="py-3 d-flex align-items-center">
                                    <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
                                    <div className="mb-0">DTK</div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body className=""> <span className="ps-lg-5 ps-0" >#1 Halo Player on the Team</span>  </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="m-0 mb-3 acc-card d-flex flex-column align-items-center">
                                <img src={test2} alt='' />
                                <Card.Header className="py-3 d-flex align-items-center">
                                    <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
                                    <div className="mb-0">GMAN</div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body className=""> <span className="ps-lg-5 ps-0" >#2 Halo Player on the Team</span>  </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card className="m-0 mb-3 acc-card d-flex flex-column align-items-center">
                                <img src={test3} alt='' />
                                <Card.Header className="py-3 d-flex align-items-center">
                                    <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
                                    <div className="mb-0">Than</div>
                                </Card.Header>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body className=""> <span className="ps-lg-5 ps-0" >#3 Halo Player on the Team</span>  </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </div>
                </section>

                {/* FAQ section */}
                <span id='faq' className="d-flex justify-content-center align-items-center fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>FAQ</span>
                <section className="container d-flex justify-content-center align-items-center my-5">
                    <Accordion className='w-100'>
                        <Card className="m-0 mb-3 acc-card">
                            <Card.Header className="py-3 d-flex align-items-center">
                                <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
                                <div className="mb-0">What is The Hive?</div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body className=""> <span className="ps-lg-5 ps-0" >The Hive is a group of dedicated NFT traders and investors who utilize the best commercially available tools in the NFT space, as well as our in-house custom developed tools, to bring you the best alpha and insights into the NFT market to help maximize our community's trading strategy.</span>  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="m-0 mb-3 acc-card">
                            <Card.Header className="py-3 d-flex align-items-center">
                                <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
                                <div className="mb-0">Why should I buy this?</div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className=""> <span className="ps-lg-5 ps-0" >We want to keep the community and information as clear as possible for our HODLers. Allowing access to only token holders prevents spammers and bots from infiltrating and reducing the quality of our chat and information. Ultimately, we are providing our HODLers with some of the best analysis, real-time updates, and reporting anywhere in the NFT space. We research harder than anyone else out there so you don't have to.</span>  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="m-0 mb-3 acc-card">
                            <Card.Header className="py-3 d-flex align-items-center">
                                <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
                                <div className="mb-0">How will I become an owner in The Hive or receive royalties?</div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body className=""> <span className="ps-lg-5 ps-0" >Tokens will be snapshot on the 1st day of every month. A percentage of royalties for all collections after the Founder's Pass editions will be provided back to the 100 Founder's Pass HODLers.</span> </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="m-0 mb-3 acc-card">
                            <Card.Header className="py-3 d-flex align-items-center">
                                <ContextAwareToggle eventKey="3">+</ContextAwareToggle>
                                <div className="mb-0">What happens if I sell my pass before the 1st of the month?</div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body className=""> <span className="ps-lg-5 ps-0" >You will not be eligible to receive royalties from the previous month's proceeds.</span>  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="m-0 mb-3 acc-card">
                            <Card.Header className="py-3 d-flex align-items-center">
                                <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
                                <div className="mb-0">How much does a Founder's Pass Gen1 token cost?</div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body className=""> <span className="ps-lg-5 ps-0" >
                                    .33 eth</span>  </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </section>

                {/* social links */}
                <section id='links'>
                    <div className="d-flex flex-column align-items-center">
                        <h1 className="fs-3 fw-600" style={{ color: "rgb(255,212,0)" }}>Social Media</h1>
                        <div className="d-flex flex-wrap align-items-center justify-content-center mt-4">
                            <a href="https://twitter.com/hivealpha" className='rot mt-4'>
                                <i className="fab fa-twitter fs-4 mx-2"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCrl97nhWav8n26f0-iA4_pw" className='rot mt-4'>
                                <i className="fab fa-youtube-square fs-4 mx-2"></i>
                            </a>
                            <a href="https://discord.gg/DnVbe9RZkJ" className='rot mt-4'>
                                <i className="fab fa-discord fs-4 mx-2"></i>
                            </a>
                        </div>
                        <span className="fs-8 py-4 mt-4 text-faded" style={{ color: "rgb(255,212,0)", fontWeight: "bold" }}>2022, All Rights Reserved.</span>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Web;
