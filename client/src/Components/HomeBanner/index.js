import React from "react";
import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import 'swiper/css/navigation';
// import {  Navigation, Autoplay} from "swiper/modules";
// import slide1 from '../../assets/images/slideBanner1.jpg'
// import slide2 from '../../assets/images/slideBanner2.jpg'
// import slide3 from '../../assets/images/slideBanner3.jpg'




// const homeBanner = () =>{
//     return(
//         <div className="container mt-3">
//             <div classname="homeBannerSection">
//             <Swiper
//                 slidesPerView={1}
//                 spaceBetween={15}
//                 navigation={true}
//                 loop={false}
//                 autoplay={{
//                     delay: 2500,
//                     disableOnInteraction: false,
//                 }}
//                 modules={[Navigation,Autoplay]}
//                 className="mySwiper">
                
//                 <SwiperSlide>
//                 <div className="item">
//                      <img src={slide1} className="w-100"/>               
//                </div>
//                </SwiperSlide>
//                <SwiperSlide>
//                <div className="item">
//                      <img src={slide2} className="w-100"/>               
//                </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                <div className="item">
//                      <img src={slide3} className="w-100"/>               
//                </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                <div className="item">
//                      <img src={slide1} className="w-100"/>               
//                </div>
//                 </SwiperSlide>
//                 <SwiperSlide>
//                <div className="item">
//                      <img src={slide3} className="w-100"/>               
//                </div>
//                 </SwiperSlide>
//                 </Swiper>
//         </div>
//         </div>
        
//     )
// }



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
        <div className="container mt-3">
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
    </div>
    )
}

export default homeBanner;