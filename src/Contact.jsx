import Contac from "./Contac"
import { FaEnvelopeOpen } from "react-icons/fa";
function Contact(){
    return(
        <div>
           <div className="about-nav">
           <h1>Contact</h1>
           <ol>
            <li><a href="">HOME/</a></li>
            <li><a href="">PAGES/</a></li>
            <li>ABOUT</li>
           </ol>
    </div>
    <div className="contact1">
     <h6>// CONTACT US //</h6>
     <h1>Contact For Any Query</h1>
     <div className="contact1-h">
       <div className="contact1-ha">
        <h5>// BOOKING //</h5>
        <p><FaEnvelopeOpen className="envo"/>book@example.com</p>
       </div>
       <div className="contact1-hb">
        <h5>// GENERAL //</h5>
        <p><FaEnvelopeOpen className="envo"/>info@example.com</p>
       </div>
       <div className="contact1-hc">
        <h5>// TECHNICAL //</h5>
        <p><FaEnvelopeOpen className="envo"/>tech@example.com</p>
       </div>
     </div>
    </div>
    <Contac/>
        </div>
    )
}
export default Contact