import React from 'react'
import "./Community.css"

function Community() {

    const handleClick = () => {

    }


    return (
        <div className='container'>
            <div className="start-wraper">
                <div className="start-img">
                    <img src="https://media.istockphoto.com/id/1163243581/photo/kpi-key-performance-indicator-for-business-concept.jpg?s=612x612&w=0&k=20&c=LAI6F4mWup3edbMnGKa3h5hNC42eJtN6Yf4FEIJpaH4=" alt="" />
                </div>
                <div className="start-contend">
                    <h2 className='section-title'>
                        Join our free teck community
                    </h2>
                    <p>
                        Unlock the power of knnoladge and innovayion by joining our vibrant and free whatsapp tech community
                    </p>
                    <button className='register-button' onClick={handleClick}>Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default Community