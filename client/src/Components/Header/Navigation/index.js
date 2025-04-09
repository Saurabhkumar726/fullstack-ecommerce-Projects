import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";





const Navigation = () =>{

    const [isOpenSidebarVar, setisOpenSidebarVar] = useState(false);

            return(
                <nav>
                <div className='container'>
                     <div className='row'>
                        <div className='col-sm-2 navPart1'>
                             <div className='catWrapper'>
                               <button className='allCatTab align-items-center' onClick={()=>setisOpenSidebarVar(!isOpenSidebarVar)}>
                                <span className='icon1 me-2'><IoIosMenu /></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className='icon2 ms-2'><FaAngleDown /></span>
                               </button>

                                {/* All CATEGORIES */}
                               <div className={`sidebarNav ${isOpenSidebarVar===true ? 'open' : ''}`}>
                                    <ul>
                                        <li><Link to ="/"><Button>men<FaAngleRight className='ml-auto'/></Button></Link>
                                            <div className="submenu">
                                                <Link to ="/"><Button>Clothing</Button></Link>
                                                <Link to ="/"><Button>Footwear</Button></Link>
                                                <Link to ="/"><Button>Watches</Button></Link>
                                                <Link to ="/"><Button>Clothing</Button></Link>
                                                <Link to ="/"><Button>Footwear</Button></Link>
                                                <Link to ="/"><Button>Watches</Button></Link>
                                                <Link to ="/"><Button>Clothing</Button></Link>
                                                <Link to ="/"><Button>Footwear</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to ="/"><Button>women<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className="submenu">
                                                <Link to ="/"><Button>Clothing</Button></Link>
                                                <Link to ="/"><Button>Footwear</Button></Link>
                                                <Link to ="/"><Button>Watches</Button></Link>
                                                <Link to ="/"><Button>Clothing</Button></Link>
                                                <Link to ="/"><Button>Footwear</Button></Link>
                                                <Link to ="/"><Button>Watches</Button></Link>
                                                <Link to ="/"><Button>Clothing</Button></Link>
                                                <Link to ="/"><Button>Footwear</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link to ="/"><Button>beauty</Button></Link></li>
                                        <li><Link to ="/"><Button>watches</Button></Link></li>
                                        <li><Link to ="/"><Button>kids</Button></Link></li>
                                        <li><Link to ="/"><Button>gift</Button></Link></li>
                                        <li><Link to ="/"><Button>men</Button></Link></li>
                                        <li><Link to ="/"><Button>women</Button></Link></li>
                                        <li><Link to ="/"><Button>beauty</Button></Link></li>
                                        <li><Link to ="/"><Button>watches</Button></Link></li>
                                        <li><Link to ="/"><Button>kids</Button></Link></li>
                                        <li><Link to ="/"><Button>gift</Button></Link></li>
                                    </ul>
                                </div>
                             </div>
                        </div>

                          {/* upper menu   */}
                        <div className='col-sm-10 navPart2 d-flex align-items-center'>
                            <ul className='list list-inline ml-auto'>
                                <li className='list-inline-item'><Link to ="/"><Button>HOME</Button></Link></li>
                                <li className='list-inline-item'><Link to ="/"><Button>MEN</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>   
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to ="/"><Button>WOEMEN</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>   
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to ="/"><Button>BEAUTY</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>   
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to ="/"><Button>WATCHES</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>   
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to ="/"><Button>KIDS</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>   
                                    </div>
                                </li>
                                <li className='list-inline-item'><Link to ="/"><Button>GIFT</Button></Link>
                                <div className='submenu shadow'>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>
                                        <Link to ="/"><Button>Watches</Button></Link>
                                        <Link to ="/"><Button>Clothing</Button></Link>
                                        <Link to ="/"><Button>Footwear</Button></Link>   
                                    </div></li>
                                <li className='list-inline-item'><Link to ="/"><Button>BLOG</Button></Link>
                                </li>
                                <li className='list-inline-item'><Link to ="/"><Button>CONTACT</Button></Link>
                                </li>
                            </ul>
                        </div>
                     </div>
                </div>
            </nav>
            )
}
export default Navigation;