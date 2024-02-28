import React from 'react';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import About1 from './About1';
import About2 from './About2';
import Serv1 from './Serv1';
import Serv2 from './Serv2';
import Book from './Book';
import Technical from './Technical';
import Testimon from './Testimon';
import Contac from './Contac';
import Home1 from './Home1';
import Product from './Product';
import Login from './Login';
function Home({handleclick,warning,data,setdata}){
    return(
        
        <div className='containerr'>
       <Home1/>
       <About1/>
       <About2/>
       <Serv1/>
      <Serv2/>
      <Book/>
      <Technical/>
      <Testimon/>
      <Product data={data} setdata={setdata} warning={warning} handleclick={handleclick}/>
      <Contac/>
       </div>
        
    )
}
export default Home