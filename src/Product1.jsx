import cc1 from './images/bal.mp4'
import { IoCarSport } from "react-icons/io5";
import React from 'react';
import {NavLink} from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import Home1 from './Home1';
import About1 from './About1';
import About2 from './About2';
import Serv1 from './Serv1';
import Serv2 from './Serv2';
import Technical from './Technical';
import Book from './Book';
import Testimon from './Testimon';
import Contac from './Contac';
import {data} from './index'
function Product1({handleclick,warning}){
    return(
        <div>
            <Home1/>
            <About1/>
            <About2/>
            <Serv1/>
            <Serv2/>
            <Book/>
            <Technical/>
            <Testimon/>
        <div className="pro">
        {
                warning && <div className='pro-alert'> <h4>product already added</h4> </div>
            }
         <video width='84%' height='750px' autoPlay muted loop src={cc1} type="video/mp4"/>
         <div className='pro1'>
         <h1><IoCarSport className='caa1'/>CarServ</h1>
         </div>
         <div className='pro-head'>
            <div className='pro-head1a'><NavLink to='/products/alloys' className='pro-head2'><h2 className='al'>ALLOYS</h2></NavLink></div>
            <div className='pro-head1b'><NavLink to='/products/spoilers' className='pro-head2a'><h2 className='sl'>SPOILERS</h2></NavLink></div>
            <div className='pro-head1c'><NavLink to='/products/exhaust' className='pro-head2b'><h2 className='el'>EXHAUST</h2></NavLink></div>
         </div>
         <div className='pro-products1'> 
         <img src={data[4].image} alt="alloy14" />
          </div>
         <div className='pro-products1a'>
            <h5>NAME: {data[4].name}</h5>
            <h5>PRICE: {data[4].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data[4])} className='products-ca'>
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
         <img src={data[5].image} alt="alloy16" />
              </div>
         <div className='pro-products2a'>
         <h5>NAME: {data[5].name}</h5>
            <h5>PRICE: {data[5].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data[5])} className='products-ca'>
                <IoMdCart className='pro-ico' />    CART
                </button>
            </NavLink>
            <NavLink>
                <div className='products-pa'>
                <FaShoppingBag className='pro-ico' />   BUY
                </div>
            </NavLink>
              </div>
         <div className='pro-products3'>
         <img src={data[6].image} alt="alloy14" /> 
              </div>
         <div className='pro-products3a'>
         <h5>NAME: {data[6].name}</h5>
            <h5>PRICE: ${data[6].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data[6])} className='products-ca'>
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
         <img src={data[7].image} alt="alloy14" />
              </div>
         <div className='pro-products4a'>
         <h5>NAME: {data[7].name}</h5>
            <h5>PRICE: ${data[7].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data[7])} className='products-ca'>
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
        <Contac/>
        </div>
    )
}
export default Product1