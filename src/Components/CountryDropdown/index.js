import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import { FilterList } from '@mui/icons-material';



const Transition = React.forwardRef(function Transition(props, ref) 
  {return <Slide direction="up" ref={ref} {...props} />;});

const CountryDropdown = () => {

    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);

    const [countryList, setCountryList] = useState([]);

    const context = useContext(MyContext);
    
    const selectCountry = (index, country)=>{
      setselectedTab(index);
      setisOpenModal(false);
      context.setselectedCountry(country);
    }

    useEffect(()=>{
      setCountryList(context.countryList);
    },[])

    const FilterList=(e)=>{
      const keyword = e.target.value.toLowerCase();

      if(keyword!==""){
        const list = countryList.filter((item)=>{
          return item.country.toLowerCase().includes(keyword);
        });
        setCountryList(list);

      }else{
        setCountryList(context.countryList);
      }

      

      
    }


    return (
        <>
        <Button className='countryDrop' onClick={()=>setisOpenModal(true)}>
          <div className='info d-flex flex-column'>
            <span className='label'>Your Location</span>
            <span className='name'>{context.selectedCountry !== "" ? context.selectedCountry : 'Select Location'}</span>
          </div>
          <span className='ml-auto'><FaAngleDown /></span>
        </Button>

        <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModel' TransitionComponent={Transition}>
           <h4 className='mb-0'>Choose your Delivery Location</h4>   
           <p>Enter your address and we will specify the offer for your area.</p>   
           <Button className='close_' onClick={()=>setisOpenModal(false)}><IoClose /></Button>

           <div className='headerSearch w-100'>
               <input type='text' placeholder='Search your area' onChange={FilterList}/>
               <Button><IoSearch /></Button>
            </div>

            <ul className='countryList mt-3'>
              <li><Button onClick={()=>setisOpenModal(false)}></Button></li>
              {
                countryList?.length!==0 && countryList?.map((item,index)=>{
                  return(
                    <li key={index}><Button onClick={()=>selectCountry(index, item.country)}
                        className={`${selectedTab===index ? 'active' : ''}`}
                    >{item.country}</Button></li>
                  )
                })
              }

          </ul>
        </Dialog>

        </>
    )
}
export default CountryDropdown;