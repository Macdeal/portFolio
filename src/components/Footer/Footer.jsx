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
            <Insta color="white" size={"3rem"} />
          </li>
          <li>
            <Facebook color="white" size={"3rem"} />
          </li>
          <li>
            <Gitub color="white" size={"3rem"} />
          </li>
        </div>
      </div>
    </div>
  )
}

export default Footer
