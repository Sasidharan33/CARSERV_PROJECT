import { NavLink } from "react-router-dom"
import t1 from "./images/team-1.jpg"
import t2 from "./images/team-2.jpg"
import t3 from "./images/team-3.jpg"
import t4 from "./images/team-4.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Technical(){
    return(
        <div className='technical'>
        <div className='technical1'><h6>// OUR TECHNICIANS //</h6></div>
        <div className='technical2'><h1>Our Expert Technicians</h1></div>
        <div className='technical3'>
          <img src={t1} alt="tech" />
          <div className="tech1">
            <NavLink className="ll1"><FaFacebookF/></NavLink>
            <NavLink className="ll2"><FaTwitter/></NavLink>
            <NavLink className="ll3"><FaInstagram /></NavLink>
          </div>
          <h5>Full Name</h5>
          <p>Designation</p>
        </div>
        <div className='technical4'>
        <img src={t2} alt="tech"></img>
        <div className="tech2">
        <NavLink className="ll1"><FaFacebookF/></NavLink>
        <NavLink className="ll2"><FaTwitter/></NavLink>
        <NavLink className="ll3"><FaInstagram /></NavLink>
        </div>
        <h5>Full Name</h5>
          <p>Designation</p>
        </div>
        <div className='technical5'>
          <img src={t3} alt="tech" />
          <div className="tech3">
          <NavLink className="ll1"><FaFacebookF/></NavLink>
          <NavLink className="ll2"><FaTwitter/></NavLink>
          <NavLink className="ll3"><FaInstagram /></NavLink>
          </div>
          <h5>Full Name</h5>
          <p>Designation</p>
        </div>
        <div className='technical6'>
          <img src={t4} alt="tech" />
          <div className="tech4">
          <NavLink className="ll1"><FaFacebookF/></NavLink>
          <NavLink className="ll2"><FaTwitter/></NavLink>
          <NavLink className="ll3"><FaInstagram /></NavLink>
          </div>
          <h5>Full Name</h5>
          <p>Designation</p>
        </div>

</div>
    )
}
export default Technical