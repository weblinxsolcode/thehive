import React from 'react';
import '../css/style.css';
import logo from '../images/AnimatedHiveBlack.gif';
import { Link } from 'react-router-dom';
import honeybee from '../images/honeybee.png';

const Minting = () => {
    return (
        <div>

            <nav className="navbar d-flex navbar-expand-lg navbar-dark">
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
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <Link to="/whitepaper">
                                <li className="nav-item"><a className="nav-link " aria-current="page" href="#">WHITEPAPER</a></li>
                            </Link>
                            <Link to="/minting">
                                <li className="nav-item"><a className="nav-link " aria-current="page" href="#">MINTING PAGE</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row align-items-center mx-0">
                        <div className="col-lg-6 co-12 d-flex flex-column align-items-start">
                            {/* <span style={{ color: "rgb(255,212,0)" }}>New Features</span> */}
                            <span className="fs-1 fw-600" style={{ color: "rgb(255,212,0)" }}>MINT NOW</span>
                            <input type="number" placeholder="1" style={{ width: "100%", height: "50px", color: "black", fontWeight: "bold", padding: "3px" }} />
                            {/* <p className="fs-7 fw-300 pt-1">
                                Access the best NFT intelligence available with our membership tokens. Our Founder's Pass is limited to 100 total tokens giving you a p full access to our Discord server as well as ownership in secondary market royalties for our current and future collections. We will no longer be charging for monthly memberships (as we have in the past), instead the token will give you access as long as you're a hodler. Aside from the Discord server membership, the token will be used to access:
- Pure ALFA Chat, a new iteration of the og-members
- IC Research Reports
- Whitelist Giveaways and Lotteries
- Partner projects
- Additional perks for hodlers of multiple tokens
                            </p> */}
                            <button className="btn btn-primary fs-6 fw-500 px-5 mt-4" style={{ backgroundColor: "rgb(255,212,0)", color: "black" }}>Connect</button>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={honeybee} className="w-100" alt="" style={{ borderRadius: "10px" }} />
                        </div>
                    </div>
                </div>
            </section>

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
    );
};

export default Minting;
