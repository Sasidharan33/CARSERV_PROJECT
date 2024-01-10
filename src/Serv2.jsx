import { IoCarSport } from "react-icons/io5";
import { FaOilCan } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import s2 from"./images/service-1.jpg"
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
function Serv2(){
    return(
        <div className='serv2'>
          <div className='serv2-1'><h6>// OUR SERVICES //</h6></div>
          <div className='serv2-2'><h1>Explore Our Services</h1></div>
          <div className='serv2-l'>
          <NavLink className="io1 active" to='/dia'>
            <div className="Link1">
            <h4><FaCarSide className='ser1' />Diagnostic Test</h4>
            </div>
            </NavLink>
            <NavLink className="io2" to='/eng'>
            <div className="Link2">
            <h4><IoCarSport className='ser2'/>Engine Servicing</h4>
            </div>
            </NavLink>
            <NavLink className="io3" to='/tir'>
            <div className="Link3">
            <h4><IoMdSettings className="ser3" />Tires Replacement</h4>
            </div>
            </NavLink>
            <NavLink className="io4" to='/oil'>
            <div className="Link4">
            <h4><FaOilCan className='ser4' />Oil Changing</h4>
            </div>
            </NavLink>
          </div>
          <div className='serv2-m'>
            <img id="ser1" src={s2} alt="carserv" />
          </div>
          <div className='serv2-r'>
            <h3 id="serv-head">15 Years Of Experience In Auto Servicing</h3>
            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet 
              diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem 
              sit clita duo justo magna dolore erat amet</p>
              <p><i class="bi bi-check-lg"></i>Quality Servicing</p>
              <p><i class="bi bi-check-lg"></i>Expert Workers</p>
              <p><i class="bi bi-check-lg"></i>Modern Equipment</p>
              <button><h6>READ MORE<FaArrowRight className='arrow' /></h6></button>
            </div>
  </div>
    )
}

export default Serv2