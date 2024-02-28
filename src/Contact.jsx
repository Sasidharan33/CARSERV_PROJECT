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
            <li>CONTACT</li>
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
       <div className="map-main">
        <div className="map">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1001712.
       1592110943!2d78.1084904859375!3d11.
       26595900500356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc
       80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1708506362872!5m2!1sen!2sin" 
       width="100%" height="400" 
       loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
       <div className="map-form">
        <form action="">
            <input type="text" className="map-name" placeholder="Your Name"/>
            <input type="email" className="map-email" placeholder="Your Email"/>
            <input type="text" className="map-subject" placeholder="Subject" />
            <textarea className="map-message" placeholder="Message" type="pargraph"></textarea>
            <button className="map-submit" type="submit">SEND MESSAGE</button>
        </form>
       </div>
       </div>
     </div>
    
    <Contac/>
        </div>
    )
}
export default Contact