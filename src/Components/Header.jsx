import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Header() {

  const nav_title = [
    {
      path: "/",
      title: "Home"
    },
    {
      path: "/services",
      title: "Services"
    },
    {
      path: "/cources ",
      title: "Courses"
    },
    {
      path: "/about",
      title: "About Us"
    },

  ]

  return (

    <header className='header'>

      <div className="container">

        <div className="nav_container">

          <div className="logo">
            <div className="logo-img">
              <img src="https://images-platform.99static.com/UvWW_UabxhcKSoa-E2YXjwDHkRU=/607x286:1393x1072/500x500/top/smart/99designs-contests-attachments/131/131634/attachment_131634405" alt="" />
            </div>

            <h2>Lumix AI</h2>
          </div>

          <div className="navigation">

            <ul className='menu' style={{ cursor: "pointer" }}>
              {
                nav_title.map((title, index) => (
                  <li key={index}>
                    <Link to={title.path}>{title.title}</Link>

                  </li>
                ))
              }
            </ul>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header