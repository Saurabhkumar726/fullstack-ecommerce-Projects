import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';


const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',

    ]);

    return(
        <section className="homeCat">
            <div className='container'>
                <h3 class='mb-3 hd'>Featured Categories</h3>
            <Swiper
                slidesPerView={10}
                spaceBetween={8}
                navigation={true}
                slidesPerGroup={3}
                modules={[Navigation]}
                className="mySwiper">

                {
                    itemBg?.map((item, index)=>{
                        return(
                            <SwiperSlide>
                                <div className='item text-center cursor' style={{backgroundColor:item}}>
                                    <img src="https://nest.botble.com/storage/product-categories/image-9.png"/>
                                    <h6>Red Apple</h6>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                
                </Swiper>
                

            </div>
         </section>
    )
}
export default HomeCat;