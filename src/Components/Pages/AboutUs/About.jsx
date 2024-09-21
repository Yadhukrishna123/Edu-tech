import React from 'react'
import "./About.css"

function About() {
    return (
        <div className='container'>
            <div className="about-us-container">
                <div className="team-members">
                    <h2>Our team</h2>
                    <div className="member-card">
                        <img className='mamber-image' src="https://icons8.com/l/3d/images/2_thumb_up_man_2.webp" alt="" />
                        <h3 className='mamber-name'>John Denvenski</h3>
                        <p className='member-role'>Co-founder</p>
                    </div>
                </div>
                <div className="about-us-description">
                    <h1 className='about-us-heading'>
                        About Us
                    </h1>
                    <p>
                        With a passion for empowering learners of all agers, oru mission
                        is to make education accesable, engaging, and personilized through
                        oru cutting-edge edducational technology platform
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About