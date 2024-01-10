import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

function Navii(){
    return(
        <div className="navi1">
          <div className="nav-con1"><small><FaMapMarkerAlt className="nav-i"/>123 Street, New York, USA</small></div>
          <div className="nav-con2"><small><FaRegClock className="nav-i"/>Mon - Fri : 09.00 AM - 09.00 PM</small></div>
          <div className="nav-con3">
            <div className="nav-icon"><a href=""><FaFacebookF/></a></div>
            <div className="nav-icon"><a href=""><FaTwitter/></a></div>
            <div className="nav-icon"><a href=""><FaLinkedinIn/></a></div>
            <div className="nav-icon"><a href=""><FaInstagram /></a></div>
          
          </div>
          <div className="nav-con4"><small><FaPhoneAlt className="nav-i"/>+012 345 6789</small></div>
        </div>
    )
}
export default Navii