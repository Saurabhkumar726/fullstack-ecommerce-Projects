import React from "react";
import Slider from "react-slick";

const homeBanner = ()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
    return(
        <div className="homeBannerSection">
            <Slider {...settings}>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Menswear_main_banner_web_a3b00ffd51/Menswear_main_banner_web_a3b00ffd51.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Home_web_41fb18f3c1/Home_web_41fb18f3c1.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Footwear_main_banner_web_5162bed0d0/Footwear_main_banner_web_5162bed0d0.png" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Entry_Banner_web_f6137a6ed7/Entry_Banner_web_f6137a6ed7.gif" className="w-100"/>
                </div>
                <div className="item">
                    <img src="https://cmsimages.shoppersstop.com/Skincare_web_66c30499ff/Skincare_web_66c30499ff.jpg" className="w-100"/>
                </div>
            </Slider>
        </div>
    )
}

export default homeBanner;