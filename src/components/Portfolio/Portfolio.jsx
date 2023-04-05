import React, { useContext } from "react"
import "./Portfolio.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import Sidebar from "../../img/git.png"
import Rotating from "../../img/rotating.png"
import waterDrop from "../../img/waterDop.png"
import { themeContext } from "../../Context"
const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={waterDrop} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Rotating} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
