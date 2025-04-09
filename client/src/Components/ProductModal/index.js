import Dialog from '@mui/material/Dialog';
import { IoClose } from "react-icons/io5";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

import { useContext, useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosHeartEmpty } from "react-icons/io";
import QuantityBox from '../QuantityBox';
import { MdOutlineCompareArrows } from "react-icons/md";
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';
import { IoCart } from "react-icons/io5";





const ProductModal =(props)=>{

    const context = useContext(MyContext);

      
    return(
        <>
        <Dialog open={true} className='productModal' onClose={()=>context.setisOpenProductModal(false)}>
           <Button className='close_' onClick={()=>context.setisOpenProductModal(false)}><IoClose /></Button>
           <h4 class="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
           <div className='d-flex align-items-center'>
              <div className='d-flex align-items-center me-4'>
                <span>Brands:</span>
                <span className='ms-2'><b>Welch's</b></span>
              </div>

              <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />

           </div>

            <hr/>

            <div className='row mt-2 productDetailsModal'>
                <div className='col-md-5'>
                    
                    <ProductZoom/>


                </div>

                <div className='col-md-7'>
                    <div className='d-flex info align-items-center mb-3'>
                        <span className='OldPrice lg ms-2'>$9.35</span>
                        <span className='NetPrice text-danger lg'>$7.15</span>
                    </div>

                    <span className='badge bg-success'>IN STOCK</span>
                    <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. 
                    Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>


                    <div className='d-flex info align-items-center'>
                        <QuantityBox/>
                        <Button className='btn-blue btn-lg btn-big btn-round ms-3'><IoCart />Add to Cart</Button>
                    </div>


                    <div className='d-flex align-items-center mt-5 actions'>
                        <Button className='btn-round btn-sml' variant="outlined"><IoIosHeartEmpty /> &nbsp; Add to Wishlist</Button>
                        <Button className='btn-round btn-sml ms-4' variant="outlined"><MdOutlineCompareArrows /> &nbsp; Compare</Button>
                    </div>


                </div>
            </div>

            
        </Dialog>
        </>
    )
}

export default ProductModal;