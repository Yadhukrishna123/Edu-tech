import React from 'react'
import "./Plans.css"

function Plans() {

    const pricingData = [
        {
            title: "Regular Member",
            price: "$20",
            duration: "6 Month",
            color: "#fff",
            features: [
                "Unlimited accces to the cource",
                "Customer support",
                "personal mentor",
                "Standerd options",
                "5 classes per week"
            ]


        },
        {

            title: "Premium member",
            price: "$200",
            duration: "5 Year",
            color: "#6f55f2",
            features: [
                "Unlimited accces to the cource",
                "Customer support",
                "personal mentor",
                "Standerd options",
                "5 classes per week"
            ]
        },
        {

            title: "Standerd member",
            price: "$100",
            duration: "2 Year",
            color: "#fff",
            features: [
                "Unlimited accces to the cource",
                "Customer support",
                "personal mentor",
                "Standerd options",
                "5 classes per week"
            ]
        }
    ]

    return (
        <div className='container'>
            <div className="pricing-top">
                <h2 className='section-title'>
                    Premium pricing plane
                </h2>
                <p>
                    unlock elite tech service with our premium pricing plane and soar ahead of the competition
                </p>
            </div>
            <div className="pricing-wraper">
                {
                    pricingData.map((priceData, index) => (
                        <div className="pricing-item" key={index}>
                            <div className="pricing-card-top" style={{ background: priceData.color }}>
                                <h2 className='sectiom_title'>{priceData.title}</h2>
                                <h2 className='pricing_section_title'>
                                    {priceData.price}  <span>{priceData.duration}</span>
                                </h2>
                            </div>
                            <div className="service">
                                <ul>
                                    {
                                        priceData.features.map((feature, index) => (
                                            <li key={index}>
                                                {feature}
                                            </li>
                                        ))
                                    }
                                </ul>
                                <button className='register_button'>Join</button>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Plans