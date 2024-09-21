import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import "./Home.css"
import Cources from '../Cources/Cources'
import Community from '../Community/Community';
import Plans from '../Plans/Plans';

function Home() {



    const handleGetStart = () => {
        window.open("https://youtu.be/b2pd3Y6aBag?si=JS8d4c9jDZhZIHRv", "_blank")
    }
    return (
        <>
            <section>
                <div className="container">

                    <div className="home-container">

                        <div className="home-contend">
                            <h2 className='section_title'>
                                Learn everything for free
                            </h2>
                            <p>
                                Master trending technologies with
                                Lumix AI, Invest your time and return skills
                            </p>
                            <div className="home-buttons">
                                <button className='register-button' onClick={handleGetStart}>
                                    Get started
                                </button>
                                <button className='register-button' onClick={handleGetStart}>
                                    Watch now
                                </button>
                            </div>
                        </div>
                        <div className="home-image">
                            <div className="home-img-wraper">
                                <div className="box-01">
                                    <div className="box-img">
                                        <img src="https://www.techthirsty.com/wp-content/uploads/2022/05/Is-Apple-Ahead-of-Meta-in-the-VR-AR-Battle-696x498.png" alt="" />
                                    </div>
                                </div>

                                <div className="whatsap-cntainer">
                                    <h5>500 + students</h5>
                                    <FaWhatsapp color='green' />
                                </div>

                                <div className="support">
                                    <h5>Active Support</h5>
                                </div>


                            </div>
                        </div>


                    </div>



                </div>
            </section>
            <Cources />
            <Community />
            <Plans />
        </>
    )
}

export default Home