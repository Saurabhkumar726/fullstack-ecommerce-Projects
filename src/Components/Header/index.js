import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import Button from '@mui/material/Button';
import CountryDropdown from '../CountryDropdown';
import { IoMdSearch } from "react-icons/io";



const Header = ()=>{
    return(
        <>
        <div className="headerWrapper">
             <div className="top-strip bg-blue">
               <div className="container">
                    <p className="mb-0 mt-0 text-center">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slightly delay</p>
               </div>
             </div>

             <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2"> 
                            <Link to={'/'}><img src={Logo} alt ='Logo'/></Link>
                        </div>

                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <CountryDropdown />

                            {/* Header Search start here */}
                               <div className='headerSearch ml-3 mr-3'>
                                    <input type='text'/>
                                    <Button><IoMdSearch/></Button>
                               </div>
                            {/* Header Search end here */}

                        </div>    
                    </div>
                </div>
             </header>
        </div>
        </>
    )
}

export default Header;