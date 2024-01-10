import { NavLink } from "react-router-dom"
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './Animation.css'
function Book1(){
    return(
        <div className="book1">
            <div className="book1-l">
                <h6>// CALL TO ACTION //</h6>
                <h1>Have Any Pre Booking Question?</h1>
                <p>Lorem diam ea sit dolor labore. Clita et dolor erat sed est lorem sed et sit. 
                Diam sed duo magna erat et stet clita ea magna ea sed, sit labore magna lorem tempor
                 justo rebum dolores. Eos dolor sea erat amet et, lorem labore lorem at dolores.
                  Stet ea ut justo et, clita et et ipsum diam.</p>
            </div>
            <div className="book1-r">
                <h3><FaPhoneAlt className="book1-ri" />+012 345 6789</h3>
                <div className="book1-r1">
                    <NavLink className="con-us">CONTACT US<FaArrowRight className='arrow' /></NavLink>
                </div>
            </div>
        </div>
    )
}
export default Book1