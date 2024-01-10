import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
function Contac(){
    return(
        <div className='contac'>
        <div className='contac1'>
          <h4>Address</h4>
          <p><FaMapMarkerAlt className='iconsb' />   123 Street, New York, USA</p>
          <p><FaPhoneAlt className='iconsb' />   +012 345 67890</p>
          <p><FaEnvelope className='iconsb'/>   info@example.com</p>
          <div className='linkss'>
            <div  className='iconsa'>
            <a href=""><FaTwitter className='icons' /></a>
            </div>
            <div className='iconsa'>
            <a href="" ><FaFacebookF className='icons' /></a>
            </div>
            <div  className='iconsa'>
            <a href=""><FaYoutube className='icons' /></a>
            </div>
            <div  className='iconsa'>
            <a href=""><FaLinkedinIn className='icons' /></a>
            </div>
          </div>
          </div>
        <div className='contac2'>
          <h4>Opening Hours</h4>
          <h6>Monday-Friday:</h6>
          <p>09.00AM-09.00PM</p>
          <h6>Saturday-Sunday:</h6>
          <p>09.00 AM-12.00 PM</p>
        </div>
        <div className='contac3'>
          <h4>Services</h4>
          <a href=""><IoIosArrowForward /> Diagnostic Test</a>
          <a href=""><IoIosArrowForward /> Engine Servicing</a>
          <a href=""><IoIosArrowForward /> Tires Replacement</a>
          <a href=""><IoIosArrowForward /> Oil Changing</a>
          <a href=""><IoIosArrowForward /> Vacuam Cleaning</a>
          </div>
        <div className='contac4'>
          <h4>Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <input type="text" placeholder='Your email'></input>
          <button>SIGNUP</button>
          </div>
          <div className="contac5"> 
          <div className="contac5-a"><h6><a href="">Your Site Name</a>All Right Reserved. Designed By <a href="">HTML Codex</a></h6></div>
          <div className="contac5-b">
            <a href="" className="contac5-ba">Home</a>
            <a href="" className="contac5-ba">Cookies</a>
            <a href="" className="contac5-ba">Help</a>
            <a href="">FQAS</a>
            </div>
          </div>
      </div>    
    
       
    )
}
export default Contac