import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import Button from '@mui/material/Button';
import { IoIosHeartEmpty } from "react-icons/io";
import { useContext, useState } from 'react';
import { MyContext } from '../../App';


const ProductItem = (props) =>{

    const context = useContext(MyContext);

    const viewProductDetails=(id)=>{
        context.setisOpenProductModal(true);
    }


    return(
        <>
        <div className={`productItem ${props.itemView}`}>
                                <div className='imgWrapper'>
                                    <img src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg' className='w-100'/>
                                    
                                    <span className='badge bg-primary'>28%</span>

                                    <div className='actions'>
                                        <Button onClick={()=>viewProductDetails(1)}><SlSizeFullscreen/></Button>
                                        <Button><IoIosHeartEmpty style={{fontSize:'20px'}}/></Button>
                                    </div>
                                </div>
                                
                                <div className='info'>
                                <h4>USDA Choice Angus Beef Stew Meat</h4>
                                <span className='text-success d-block'>In Stock</span>
                                <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size="small" precision={0.5} />

                                <div className='d-flex'>
                                    <span className='OldPrice'>$12.00</span>
                                    <span className='NetPrice text-danger'>$12.00</span>
                                    
                                </div>
                                </div>
                       </div>

         

          {/* <ProductModal/> */}
        </>
    )
}
export default ProductItem;


