import { SiCodefresh } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";





const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><SiCodefresh /></span>
                      <span>Everyday fresh products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery /></span>
                      <span>Free delivery for order over $70</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><CiDiscount1 /></span>
                      <span>Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><HiOutlineCurrencyRupee /></span>
                      <span>Best price on the market</span>
                    </div>
                </div>



                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>FRUIT & VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BREAKFAST & DAIRY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>MEAT & SAFEFOOD</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BEVERAGES & LIQUIDS</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>BREADS & BAKERY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='copyright mt-3 pt-3 pb-3 d-flex'>
                    <p className="mb-0">© 2025 ShopNow. All Rights Reserved.</p>
                    <ul className="list list-inline ms-auto mb-0 socials">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebook /></Link>
                        </li>

                        <li className="list-inline-item">
                            <Link to="#"><FaTwitter /></Link>
                        </li>

                        <li className="list-inline-item">
                            <Link to="#"><FaInstagramSquare /></Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer; 