import cc1 from './images/bal.mp4'
import { IoCarSport } from "react-icons/io5";
import React, { useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import axios from 'axios';
function Product ({handleclick,warning,data,setdata}){
   
   useEffect(() => {
    const fetchdata = async () => {
    try{
        const res = await axios.get('https://carservbe.onrender.com/api/products')
        setdata(res.data )
     }
     catch(err){
      console.log(err)
     }
    }
    fetchdata();
   },[])

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
         {data.product && data.product.length > 0 &&(
            <>
            <div className='pro-products1'> 
         <img src={data.product[0].image} alt="alloy14" />
          </div>
         <div className='pro-products1a'>
            <h5>SIZE: {data.product[0].name}</h5>
            <h5>PRICE: ${data.product[0].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data.product[0])} className='products-ca'>
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
         <img src={data.product[1].image} alt="alloy16" />
              </div>
         <div className='pro-products2a'>
         <h5>SIZE:{data.product[1].name}</h5>
            <h5>PRICE: ${data.product[1].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data.product[1])} className='products-ca'>
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
         <img src={data.product[2].image} alt="alloy14" /> 
              </div>
         <div className='pro-products3a'>
         <h5>SIZE: {data.product[2].name}</h5>
            <h5>PRICE: ${data.product[2].price}</h5>
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
         <img src={data.product[3].image} alt="alloy14" />
              </div>
         <div className='pro-products4a'>
         <h5>SIZE: {data.product[3].name}</h5>
            <h5>PRICE: ${data.product[3].price}</h5>
            <NavLink>
                <button onClick={()=>handleclick(data.product[3])} className='products-ca'>
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
         )}
         
         
        </div>
    )
}
export default Product
