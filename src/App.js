import './App.css';
import Home from './Home';
import About from './About';
import './Style.css';
import './Animation.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Service from './Service';
import Navbari from './Navbar';
import Booking from './Booking';
import Technicians from './Technicians';
import Testimonial from './Testimonial';
import Navii from './Navii';
import About2 from './About2';
import Serv2eng from './Serv2eng';
import Serv2tir from './Serv2tir';
import Serv2oil from './Serv2oil';
import Page404 from './Page404';
import Contact from './Contact';
import Technical from './Technical';
import Equip from './Equip';
import Product1 from './Product1';
import Product0 from './Product0';
import Product2 from './Product2';
import Cart from './Cart';
import { useState,useEffect } from 'react';
import Buy from './Buy';

function App(){
  const[cart,setcart]=useState([])
  const [warning,setwarning]=useState(false)
  const[price,setprice]= useState(0)
  const[item,setitem]=useState(0)
  const handleitem =()=>{
    let ite=0;
    cart.map((data)=>(
      ite +=data.quantity
    ))
    setitem(ite)
  }
  const handleprice=()=>{
    let ans=0;
    cart.map((data)=>(
      ans += data.quantity * data.price
    ))
    setprice(ans)
  }
  useEffect(()=>{
    handleprice();
    handleitem();
  })
  const handleclick = (data)=>{
    let ispresent=false;
    cart.forEach((product)=>{
      if(data.id==product.id)
      ispresent=true;
    })
    if(ispresent){
    setwarning(true)
    setTimeout(() => {
      setwarning(false)
    }, 2000);
    return;
    }
    setcart([...cart,data])
    
  }
  const handlechange= (item,d)=>{
    let ind= -1;
    cart.forEach((data,index) => {
      if(data.id === item.id)
      ind=index
    });
    const temarr=cart;
    temarr[ind] +=d;
    if(temarr[ind]===0)
    temarr[ind].amount=1.
  }
  return (
    <div className="App">
    <BrowserRouter>
    <Navii/>
    <Navbari size={cart.length}/>
    <Routes>
    <Route path='/' index element={<Home warning={warning} handleclick={handleclick}/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/booking' element={<Booking/>}/>
    <Route path='/technicians' element={<Technicians/>}/>
    <Route path='/testimonial' element={<Testimonial/>}/>
    <Route path='/404' element={<Page404/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/about2' element={<About2/>}/>
    <Route path='/tech' element={<Technical/>}/>
    <Route path='/dia' element={<Home/>} />
    <Route path='/eng' element={<Serv2eng/>}/>
    <Route path='/tir' element={<Serv2tir/>}/>
    <Route path='/oil' element={<Serv2oil/>}/>
    <Route path='/equip' element={<Equip/>}/>
    <Route path='/products/alloys' element={<Product0 warning={warning} handleclick={handleclick} />}/>
    <Route path='/products/spoilers' element={<Product1 warning={warning} handleclick={handleclick}/>}/>
    <Route path='/products/exhaust' element={<Product2 warning={warning} handleclick={handleclick}/>}/>
    <Route path='/cart' element={<Cart item={item} price={price} handlechange={handlechange} setcart={setcart} warning={warning} cart={cart}/>}/>
    <Route path='/cart/buy' element={<Buy item={item} price={price} cart={cart}/>}/>
    </Routes>
    </BrowserRouter> 
    </div>
  );
}
export default App;
