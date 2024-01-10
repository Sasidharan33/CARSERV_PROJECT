
import t1 from "./images/team-1.jpg"
import t2 from "./images/team-2.jpg"
import t3 from "./images/team-3.jpg"
import t4 from "./images/team-4.jpg"
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import About1 from "./About1"
import About2 from "./About2";
import Serv1 from "./Serv1";
import Technical from "./Technical";
import Contac from "./Contac";
function About(){
    return(
        <div>
    <div className="about-nav">
           <h1>About Us</h1>
           <ol>
            <li><a href="">HOME /</a></li>
            <li><a href="">   PAGES /</a></li>
            <li> ABOUT</li>
           </ol>
    </div>
    <About1/>
        <About2/>
       <Serv1/>
  <Technical/>
  <Contac/>
     </div>
    )
}
export default About