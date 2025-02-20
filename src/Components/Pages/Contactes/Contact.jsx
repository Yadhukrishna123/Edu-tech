import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <div className='container'>
            <div className="container-us-container">
                <h1>Contact Us</h1>
                <p>
                    We'd love and here from you, please fill out the form
                    below or reach out
                    to us using the contact details provided.
                </p>



                <form className='content-form'>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name' name='name' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id='email' name='email' required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <input type="text" id='message' name='message' required />
                    </div>

                    <button type='submit' className='submit-button'>Submit</button>

                </form>
            </div>

        </div>
    )
}

export default Contact