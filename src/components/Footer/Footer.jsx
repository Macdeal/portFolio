import React from "react"
import "./Footer.css"
import Wave from "../../img/wave.png"
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import Gitub from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>ahmadmustha55@gmail.com</span>
        <div className="f-icons">
          <li>
            <a href="https://www.instagram.com/musthaq_cm/">
              <Insta color="white" size={"3rem"} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/musthaq_cm/">
              <Facebook color="white" size={"3rem"} />
            </a>
            a
          </li>
          <li>
            <a href="https://github.com/Macdeal">
              <Gitub color="white" size={"3rem"} />
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Footer
