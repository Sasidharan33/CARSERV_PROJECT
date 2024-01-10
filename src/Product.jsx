import cc1 from './images/bal.mp4'
import { IoCarSport } from "react-icons/io5";
import React from 'react';
import {NavLink} from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import {data} from './index'
function Product({handleclick,warning}){
    return(

        <div className="pro">
            {
                warning && <div className='pro-alert'> <h4>product already added</h4> </div>
            }
         <video width='84%' height='750px' autoPlay muted loop src={cc1} type="video/mp4"/>
         <div className='pro1'>
         <h1><IoCarSport className='caa1'/>CarServ</h1>
         </div>
         <div className='pro-head'>
            <div className='pro-head1a'><NavLink to='/products/alloys' className='pro-head2 active'><h2 className='al'>ALLOYS</h2></NavLink></div>
            <div className='pro-head1b'><NavLink to="/products/spoilers" className='pro-head2a'><h2 className='sl'>SPOILERS</h2></NavLink></div>
            <div className='pro-head1c'><NavLink to='/products/exhaust' className='pro-head2b'><h2 className='el'>EXHAUST</h2></NavLink></div>
         </div>
         <div className='pro-products1'> 
         <img src={data[0].image} alt="alloy14" />
          </div>
         <div className='pro-products1a'>
            <h5>SIZE: {data[0].size}</h5>
            <h5>PRICE: ${data[0].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data[0])} className='products-ca'>
                <IoMdCart className='pro-ico' /> CART
                </button>
            </NavLink>
            <NavLink>
                <div className='products-pa'>
                <FaShoppingBag className='pro-ico' /> BUY
                </div>
            </NavLink>
              </div>
         <div className='pro-products2'>
         <img src={data[1].image} alt="alloy16" />
              </div>
         <div className='pro-products2a'>
         <h5>SIZE:{data[1].size}</h5>
            <h5>PRICE: ${data[1].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data[1])} className='products-ca'>
                <IoMdCart className='pro-ico' />    CART
                </button>
            </NavLink>
            <NavLink>
                <div className='products-pa'>
                <FaShoppingBag  className='pro-ico' />   BUY
                </div>
            </NavLink>
              </div>
         <div className='pro-products3'>
         <img src={data[2].image} alt="alloy14" /> 
              </div>
         <div className='pro-products3a'>
         <h5>SIZE: {data[2].size}</h5>
            <h5>PRICE: ${data[2].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data[2])} className='products-ca'>
                <IoMdCart className='pro-ico' />   CART
                </button>
            </NavLink>
            <NavLink>
                <div className='products-pa'>
                <FaShoppingBag className='pro-ico' />   BUY
                </div>
            </NavLink>
         </div>
         <div className='pro-products4'>
         <img src={data[3].image} alt="alloy14" />
              </div>
         <div className='pro-products4a'>
         <h5>SIZE: {data[3].size}</h5>
            <h5>PRICE: ${data[3].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data[3])} className='products-ca'>
                <IoMdCart className='pro-ico' />  CART
                </button>
            </NavLink>
            <NavLink>
                <div className='products-pa'>
                <FaShoppingBag className='pro-ico' />   BUY
                </div>
            </NavLink>
              </div>
        </div>
    )
}
export default Product
