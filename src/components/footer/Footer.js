import React from "react";
import './Footer.css'
function Footer() {
    return (
        
            <footer className="mt-5">
                <div className="content">
                    <div className="top">
                        <div className="logo-details">
                            <span className="logo_name">FOOTER</span>
                        </div>
                        <div className="media-icons">
                            <a href="/">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="/">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Gongguang Group</li>
                            <li>
                                <a href="/">Public television</a>
                            </li>
                            <li>
                                <a href="/">PTS Taiwan (English)</a>
                            </li>
                            <li>
                                <a href="/">Language Station</a>
                            </li>
                            <li>
                                <a href="/">China Television Corporation</a>
                            </li>
                            <li>
                                <a href="/">Hakka TV</a>
                            </li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Themed sites</li>
                            <li>
                                <a href="/">Public Television News Network</a>
                            </li>
                            <li>
                                <a href="/">Public Vision+</a>
                            </li>
                            <li>
                                <a href="/">Public Television P# News Lab</a>
                            </li>
                            <li>
                                <a href="/">Banner design</a>
                            </li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li>
                                <a href="/">Profile</a>
                            </li>
                            <li>
                                <a href="/">My account</a>
                            </li>
                            <li>
                                <a href="/">Prefrences</a>
                            </li>
                            <li>
                                <a href="/">Purchase</a>
                            </li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Visitor service</li>
                            <li>
                                <a href="/">Online customer service</a>
                            </li>
                            <li>
                                <a href="/">Listings</a>
                            </li>
                            <li>
                                <a href="/">Program appeals</a>
                            </li>
                            <li>
                                <a href="/">Acceptance of whistle-blowing</a>
                            </li>
                        </ul>
                        <ul className="box input-box">
                            <li className="link_name">Subscribe</li>
                            <li>
                                <input type="text" placeholder="Enter your email" />
                            </li>
                            <li>
                                <input type="button" value="Subscribe" />
                            </li>
                        </ul>
                    </div>

                    <div className="bottom-details">
                    <div className="bottom_text">
                        <span className="copyright_text">
                        Taiwan Public Television Service Foundation. © All Rights Reserved.
                        </span>
                        <span className="policy_terms">
                            <a href="/">Privacy policy</a>
                            <a href="/">Terms & condition</a>
                        </span>
                    </div>
                </div>
                </div>
                
            </footer>
        
    );
}

export default Footer;
