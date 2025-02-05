import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Navigation = () =>{
            return(
                <nav>
                <div className='container'>
                     <div className='row'>
                        <div className='col-sm-3 navPart1'>
                             <button className='allCatTab align-items-center'>
                                <span className='icon1 me-2'><IoIosMenu /></span>
                                <span class="text">ALL CATEGORIES</span>
                                <span className='icon2 ms-2'><FaAngleDown /></span>
                             </button>
                        </div>

                        <div className='col-sm-9 navPart2'>
                            <ul className='list list-inline'>
                                <li className='list-inline-item'><Link to ="/">Home</Link></li>
                                <li className='list-inline-item'><Link to ="/">Home</Link></li>
                                <li className='list-inline-item'><Link to ="/">Home</Link></li>
                                <li className='list-inline-item'><Link to ="/">Home</Link></li>
                                <li className='list-inline-item'><Link to ="/">Home</Link></li>
                                <li className='list-inline-item'><Link to ="/">Home</Link></li>
                                <li className='list-inline-item'><Link to ="/">Home</Link></li>
                                <li className='list-inline-item'><Link to ="/">Home</Link></li>
                            </ul>
                        </div>
                     </div>
                </div>
            </nav>
            )
}
export default Navigation;