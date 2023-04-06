import React from "react"
import { Link } from "react-scroll"

import Navbar from "./components/Navbar/Navbar"
import Intro from "./components/Intro/Intro"
import Services from "./components/Services/Services"
import "./App.css"
import Experience from "./components/Experience/Experience"
import Works from "./components/Works/Works"
import Portfolio from "./components/Portfolio/Portfolio"
import Testimonial from "./components/Testimonials/Testimonial"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { useContext, useState } from "react"
import { themeContext } from "./Context"

function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const [showSidebar, setShowSidebar] = useState(false)

  const renderSideBar = () => {
    setShowSidebar(true)
  }

  const handleClose = () => {
    setShowSidebar(false)
  }

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar onClick={renderSideBar} />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      {showSidebar && (
        <div className="sidebar">
          <button className="close" onClick={handleClose}>
            X
          </button>
          <div>
            <ul className="links">
              <li>
                <Link
                  activeClass="active"
                  to="Navbar"
                  spy={true}
                  smooth={true}
                  onClick={handleClose}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  onClick={handleClose}
                >
                  Serivces
                </Link>
              </li>
              <li>
                <Link to="works" spy={true} smooth={true} onClick={handleClose}>
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  onClick={handleClose}
                >
                  Protfolio
                </Link>
              </li>
              <li>
                <Link
                  to="testimonial"
                  spy={true}
                  smooth={true}
                  onClick={handleClose}
                >
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>
          <p>All rights reserved to ©Musthaq Ahamd</p>
        </div>
      )}
    </div>
  )
}

export default App
