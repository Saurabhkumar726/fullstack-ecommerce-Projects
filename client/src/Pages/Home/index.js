import HomeBanner from '../../Components/HomeBanner';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import newsletterImg from '../../assets/images/coupon.png';
import Button from '@mui/material/Button';
import { GoArrowRight } from "react-icons/go";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductItem from '../../Components/ProductItem';
import HomeCat from '../../Components/HomeCat';
import { IoMailOutline } from "react-icons/io5";




const Home = ()=>{

    var productSliderOptions = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <>
         <HomeBanner />

         <HomeCat/>

         <section className="HomeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="sticky">
                        <div className="banner">
                             <img src={banner1} className="cursor w-100"/>
                        </div>

                        <div className="banner mt-4">
                             <img src={banner2} className="cursor w-100"/>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-9 productRow">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className='mb-0 hd'>BEST SELLERS</h3>
                                <p className='text-light text-sml mb-0'>Do not miss the current offers until the end of march</p>
                            </div>

                            <Button className="viewAllBtn ml-auto">View All <GoArrowRight /></Button>
                        </div>

                        <div className='product_row w-100 mt-4'>
                        <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        slidesPerGroup={3}
                        pagination={{
                            clickable: true,
                            }}
                        modules={[Navigation]}
                        className="mySwiper">

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>

                        <SwiperSlide>
                            <ProductItem />
                        </SwiperSlide>


                        </Swiper>
                        </div>





                        <div className="d-flex align-items-center mt-5">
                            <div className="info w-75">
                                <h3 className='mb-0 hd'>NEW PRODUCTS</h3>
                                <p className='text-light text-sml mb-0'>New products with updated stocks.</p>
                            </div>

                            <Button className="viewAllBtn ml-auto">View All <GoArrowRight /></Button>
                        </div>

                        <div className='product_row productRow2 w-100 mt-4 d-flex'>
                           <ProductItem />
                           <ProductItem />
                           <ProductItem />
                           <ProductItem />
                           <ProductItem />
                           <ProductItem />
                           <ProductItem />
                           <ProductItem />
                        </div>


                        <div className="d-flex mt-4 mb-5 bannerSec">
                            <div className="banner">
                                <img src={banner3} className="cursor w-100"/>
                            </div>

                            <div className="banner">
                                <img src={banner4} className="cursor w-100"/>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
         </section>


         <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
               <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                            <p className='text-white mb-1'>$20 discount for your first order</p>
                            <h3 className='text-white'>Join our newsletter and get...</h3>
                            <p className='text-light'>Join our email subscription now to get updates on <br/>promotions and coupons.</p>

                            <form>
                                <IoMailOutline/>
                                <input typr="text"/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <img src={newsletterImg}/>
                        </div>
                     </div>
                </div>             
         </section>
         
        


        </>
    )
}

export default Home;