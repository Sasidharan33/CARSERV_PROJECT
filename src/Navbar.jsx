import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
function Navbari({cart}){
    return(
<div className='navbari'>
<Navbar expand="lg" className="bg-body-tertiary">
    <Link className='link1'><h2><IoCarSport className='caa'/>CarServ</h2></Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavLink className='home' to='/'>HOME</NavLink>
        <NavLink className='about' to='/about' >ABOUT</NavLink>
        <NavLink className='services' to='/services' >SERVICES</NavLink>
        <NavDropdown title="PAGES" id="basic-nav-dropdown" className='pages'>
          <NavLink to="/booking" className="dlink"><NavDropdown.Item href="#action/3.1" className='dli'>BOOKING</NavDropdown.Item></NavLink>
          <NavLink to='/technicians' className="dlink"><NavDropdown.Item href="#action/3.2" className='dli'>TECHNICIANS</NavDropdown.Item></NavLink>
          <NavLink to="/testimonial" className="dlink"><NavDropdown.Item href="#action/3.3" className='dli'> TESTIMONIAL</NavDropdown.Item></NavLink>
        </NavDropdown>
        <NavLink className='contact' to="/contact" >CONTACT</NavLink>
        {/* <NavLink  to="/contact" >PRODUCTS</NavLink> */}
        <NavLink to='/cart' className='cart-link'>
        <div className='nav-cart'>
           CART<IoMdCart /><div className='cart-size'></div>
           </div>
        </NavLink>
      </Nav>
      <button className='quote'><h6>GET A QUOTE<FaArrowRight className='arrow' /></h6></button>
    </Navbar.Collapse>
</Navbar>
</div>
    )
}
export default Navbari