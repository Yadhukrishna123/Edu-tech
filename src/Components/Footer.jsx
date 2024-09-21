import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Footer() {

    const handleClicl = () => {
        window.scrollTo(0, 0)
    }
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-wraper">
                    <div className="footer-box">

                        <div className="logo">
                            <div className="footer-logo-image">
                                <img src="https://images-platform.99static.com/UvWW_UabxhcKSoa-E2YXjwDHkRU=/607x286:1393x1072/500x500/top/smart/99designs-contests-attachments/131/131634/attachment_131634405" alt="" />
                            </div>
                            <h2>Lumix AI</h2>
                        </div>
                        <p>Embrace the future of innovation and technology with our cutting-edge tech business solution</p>
                    </div>
                    <div className="footer-box">
                        <h4 className='footer-title'>Company</h4>
                        <ul className='footer-links'>
                            <li>
                                <Link to="./cources" onClick={handleClicl}> Our programe</Link>
                            </li>
                            <li>
                                <Link to="./services" onClick={handleClicl}> Our plans</Link>
                            </li>
                            <li>
                                <Link> Become a member</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h4 className='footer-title'>Quick Links</h4>
                        <ul className='footer-links'>
                            <li>
                                <Link to="./about" onClick={handleClicl}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="./contacts" onClick={handleClicl}>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="./support" onClick={handleClicl}> Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer