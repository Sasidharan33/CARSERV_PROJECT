import a1 from "./images/about.jpg"
import { FaArrowRight } from "react-icons/fa";
function About2(){
    return(
        <div>
          <div className='about2'>
        <div className='about2l'>
        <img src={a1} alt='about'></img>
        <div className='about2d'><h1>15 <span className='years'>Years</span></h1><h4>Experience</h4></div>
        </div>
        <div className='about2r'>
          <div className='about2r-ha'>// ABOUT US //</div>
          <div className='about2r-ca'><h1><span  className='about2r-ca-1'>CarServ</span> Is The Best Place For Your Auto Care</h1> 
          <p>Tempor erat elitr rebum at clita. Diam dolor 
            diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed 
            stet lorem sit clita duo justo magna dolore erat amet</p></div>
          <div className='about2r-la'>
            <div className='about2r-la-1'><h5>01</h5></div>
            <div className='about2r-la-2'><h6 className='about2r-la-2a'>Professional & Expert</h6><h6>Diam dolor diam ipsum sit amet diam et eos</h6></div>
            <div className='about2r-la-3'><h5>02</h5></div>
            <div className='about2r-la-4'><h6 className='about2r-la-2a'>Quality Servicing Center</h6><h6>Diam dolor diam ipsum sit amet diam et eos</h6></div>
            <div className='about2r-la-5'><h5>03</h5></div>
            <div className='about2r-la-6'><h6 className='about2r-la-2a'>Awards Winning Workers</h6><h6>Diam dolor diam ipsum sit amet diam et eos</h6></div>
          </div>
          <button>READ MORE<FaArrowRight className='arrow' /></button>
        </div>
  </div>
        </div>
    )
}
export default About2