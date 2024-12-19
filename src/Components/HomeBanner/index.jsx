import React from "react";
import Slider from "react-slick";
import './style.scss'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
function HomeBanner(props) {
    
  const arrowStyles = {
    backgroundColor: "#000",
    borderRadius: "50%",
    color: "#fff",
    padding: "10px",
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "1",
    cursor: "pointer",
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          
    autoplaySpeed: 3000,    
    pauseOnHover: true,   
  };

  return (
    <div className="homeBannerSection">
      <Slider {...settings}>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png"
            alt="banner-1"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/main_banner_web_Stop_Kashish_and_more_49ccf16ff1/main_banner_web_Stop_Kashish_and_more_49ccf16ff1.png"
            alt="banner-1"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/Main_Banner_Web_Titan_Fossil_and_more_efc9bc4dce/Main_Banner_Web_Titan_Fossil_and_more_efc9bc4dce.png"
            alt="banner-1"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/main_banner_web_Allen_Solly_Louis_Philips_and_more_f012cafa15/main_banner_web_Allen_Solly_Louis_Philips_and_more_f012cafa15.png"
            alt="banner-1"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/main_banner_web_Fashor_W_and_more_f7053a6d63/main_banner_web_Fashor_W_and_more_f7053a6d63.png"
            alt="banner-1"
          />
        </div>
        <div className="item">
          <img
            src="https://cmsimages.shoppersstop.com/eoss_main_banner_web_56324b74ba/eoss_main_banner_web_56324b74ba.png"
            alt="banner-1"
          />
        </div>
      </Slider>
    </div>
  );
}

export default HomeBanner;
