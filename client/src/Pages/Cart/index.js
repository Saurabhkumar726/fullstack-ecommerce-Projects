import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import QuantityBox from '../../Components/QuantityBox';
import { IoIosClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCart } from "react-icons/io5";





const Cart = () => {
  return (
    <>
      <section className="section cartPage">
        <div className="container">
        <h2 className="hd mb-1">Your Cart</h2>
              <p>
                There are <b>3</b> products in your cart
              </p>
          <div className="row">
            <div className="col-md-9 pe-5">

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="35%">Product</th>
                      <th width="15%">Unit Price</th>
                      <th width="25%">Quantity</th>
                      <th width="15%">SubTotal</th>
                      <th width="10%">Remove</th>
                    </tr>
                  </thead>
                
                <tbody>
                  <tr>
                    <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://nest.botble.com/storage/products/14-1-400x400.jpg" className="w-100" />
                            </div>

                            <div className="info px-3">
                                <h6>Organic Frozen Triple Berry Blend</h6>
                                <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>    
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$74.00</td>
                    <td width="25%"><QuantityBox/></td>
                    <td width="15%">$74.00</td>
                    <td width="10%"><span className='remove'><IoIosClose /></span></td>
                  </tr>
                  <tr>
                    <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://nest.botble.com/storage/products/14-1-400x400.jpg" className="w-100" />
                            </div>

                            <div className="info px-3">
                                <h6>Organic Frozen Triple Berry Blend</h6>
                                <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>    
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$74.00</td>
                    <td width="25%"><QuantityBox/></td>
                    <td width="15%">$74.00</td>
                    <td width="10%"><span className='remove'><IoIosClose /></span></td>
                  </tr>

                  <tr>
                    <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://nest.botble.com/storage/products/14-1-400x400.jpg" className="w-100" />
                            </div>

                            <div className="info px-3">
                                <h6>Organic Frozen Triple Berry Blend</h6>
                                <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>    
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$74.00</td>
                    <td width="25%"><QuantityBox/></td>
                    <td width="15%">$74.00</td>
                    <td width="10%"><span className='remove'><IoIosClose /></span></td>
                  </tr>

                  <tr>
                    <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://nest.botble.com/storage/products/14-1-400x400.jpg" className="w-100" />
                            </div>

                            <div className="info px-3">
                                <h6>Organic Frozen Triple Berry Blend</h6>
                                <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>    
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$74.00</td>
                    <td width="25%"><QuantityBox/></td>
                    <td width="15%">$74.00</td>
                    <td width="10%"><span className='remove'><IoIosClose /></span></td>
                  </tr>

                  <tr>
                    <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://nest.botble.com/storage/products/14-1-400x400.jpg" className="w-100" />
                            </div>

                            <div className="info px-3">
                                <h6>Organic Frozen Triple Berry Blend</h6>
                                <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>    
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$74.00</td>
                    <td width="25%"><QuantityBox/></td>
                    <td width="15%">$74.00</td>
                    <td width="10%"><span className='remove'><IoIosClose /></span></td>
                  </tr>

                  <tr>
                    <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://nest.botble.com/storage/products/14-1-400x400.jpg" className="w-100" />
                            </div>

                            <div className="info px-3">
                                <h6>Organic Frozen Triple Berry Blend</h6>
                                <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>    
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$74.00</td>
                    <td width="25%"><QuantityBox/></td>
                    <td width="15%">$74.00</td>
                    <td width="10%"><span className='remove'><IoIosClose /></span></td>
                  </tr>

                  <tr>
                    <td width="35%">
                        <Link to="/product/1">
                        <div className="d-flex align-items-center cartItemimgWrapper">
                            <div className="imgWrapper">
                                <img src="https://nest.botble.com/storage/products/14-1-400x400.jpg" className="w-100" />
                            </div>

                            <div className="info px-3">
                                <h6>Organic Frozen Triple Berry Blend</h6>
                                <Rating name="read-only" value={4.5} precision={0.5} size="small" readOnly />
                            </div>    
                        </div>
                      </Link>
                    </td>
                    <td width="15%">$74.00</td>
                    <td width="25%"><QuantityBox/></td>
                    <td width="15%">$74.00</td>
                    <td width="10%"><span className='remove'><IoIosClose /></span></td>
                  </tr>

                </tbody>
                </table>
              </div>
            </div>

            <div className="col-md-3">
                <div className="card border p-3 cardDetails">
                    <h4>CART TOTALS</h4>

                    <div className="d-flex align-items-center mb-3">
                        <span>Subtotal</span>
                        <span className="ms-auto text-red font-weight-bold">$22.00</span>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <span>Shipping</span>
                        <span className="ms-auto"><b>Free</b></span>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <span>Estimated for</span>
                        <span className="ms-auto"><b>United Kingdom</b></span>
                    </div>

                    <div className="d-flex align-items-center">
                        <span>Total</span>
                        <span className="ms-auto text-red font-weight-bold">$22.00</span>
                    </div>

                    <br/>
                    <Button className='btn-blue btn-lg btn-big'><IoCart />Add to Cart</Button>
                </div>
            </div>
         </div>




         
        </div>
      </section>
    </>
  );
};

export default Cart;
