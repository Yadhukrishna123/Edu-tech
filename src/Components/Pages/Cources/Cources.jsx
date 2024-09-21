import React from 'react'
import "./Cources.css"

function Cources() {

    const courcesData = [
        {
            title: "Ai Development",
            desc: "Master Ai development!!",
            img: "https://cdn-icons-png.flaticon.com/512/9626/9626672.png"
        },
        {
            title: "Ethical hacking",
            desc: "Master Ethical hacking!!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkqCz0sck17ZLLHaDrXYOGGfYUb-qPkH57g&s"
        },
        {
            title: "Software Development",
            desc: "Master Software development!!",
            img: "https://cdn-icons-png.flaticon.com/512/8759/8759045.png"
        },
        {
            title: "Digital marketing",
            desc: "Master Digital marketing!!",
            img: "https://cdn-icons-png.flaticon.com/512/8026/8026439.png"
        },

    ]

    return (
        <div className="container cource-container">
            <div className="cource-top">
                <h2 className='section_title'>
                    Our Free Cources
                </h2>
                <p>The top trending free cources with free certificates</p>
            </div>

            <div className="cource-wraper">


                {
                    courcesData.map((course, index) => (
                        <div className="cource-item" key={index}>
                            <span className='cource-icon'>
                                <img src={course.img} alt="" />
                            </span>
                            <div className="cource-contend">
                                <h4>{course.title}</h4>
                                <p>{course.desc}</p>
                            </div>
                        </div>
                    ))
                }




            </div>
        </div>
    )
}

export default Cources