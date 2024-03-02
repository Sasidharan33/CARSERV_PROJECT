import cc1 from './images/bal.mp4'
import { IoCarSport } from "react-icons/io5";
import React, { useEffect } from 'react';
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
function Product0({handleclick,warning,data}){
    useEffect(()=>{
       console.log(data)
    },[])
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
            <div className='pro-head1a'><NavLink to='/' className='pro-head2'><h2 className='al'>ALLOYS</h2></NavLink></div>
            <div className='pro-head1b'><NavLink to="/products1" className='pro-head2a'><h2 className='sl'>SPOILERS</h2></NavLink></div>
            <div className='pro-head1c'><NavLink to='/products2' className='pro-head2b'><h2 className='el'>EXHAUST</h2></NavLink></div>
         </div>
            <>
            <div className='pro-products1'> 
         <img key={data.product[0].id} src={data.product[0].image} alt="alloy14" />
          </div>
         <div className='pro-products1a'>
            <h5 >SIZE: {data.product[0].name}</h5>
            <h5 >PRICE: ${data.product[0].price}</h5>
                <button onClick={()=>handleclick(data.product[0])} className='products-ca'>
                <IoMdCart className='pro-ico' /> CART
                </button>
            <NavLink>
                <div className='products-pa'>
                <FaShoppingBag className='pro-ico' /> BUY
                </div>
            </NavLink>
              </div>
         <div className='pro-products2'>
         <img key={data.product[1].id} src={data.product[1].image} alt="alloy16" />
              </div>
         <div className='pro-products2a'>
         <h5 >SIZE: {data.product[1].name}</h5>
            <h5 >PRICE: ${data.product[1].price}</h5>
                <button onClick={()=>handleclick(data.product[1])} className='products-ca'>
                <IoMdCart className='pro-ico' />    CART
                </button>

            <NavLink>
                <div className='products-pa'>
                <FaShoppingBag className='pro-ico' />   BUY
                </div>
            </NavLink>
              </div>
         <div className='pro-products3'>
         <img key={data.product[2].id} src={data.product[2].image} alt="alloy14" /> 
              </div>
         <div className='pro-products3a'>
         <h5 >SIZE:{data.product[2].name}</h5>
            <h5>PRICE: {data.product[2].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data.product[2])} className='products-ca'>
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
         <img key={data.product[3].id} src={data.product[3].image} alt="alloy14" />
              </div>
         <div className='pro-products4a'>
         <h5 >SIZE: {data.product[3].name}</h5>
            <h5 >PRICE: ${data.product[3].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data.product[3])}  className='products-ca'>
                <IoMdCart className='pro-ico' />  CART
                </button>
            </NavLink>
            <NavLink>
                <div className='products-pa'>
                <FaShoppingBag className='pro-ico' />   BUY
                </div>
            </NavLink>
              </div>
            </>
        </div>
          <Contac/>
       </div>
    )
}
export default Product0