import test1 from "./images/testimonial-1.jpg"
import test2 from "./images/testimonial-2.jpg"
import test3 from "./images/testimonial-3.jpg"
import test4 from "./images/testimonial-4.jpg"
import OwlCarousel from 'react-owl-carousel';
function Testimon(){
    return(
        <div className='testimon'>
        <div className='testimon1'><h5>// TESTIMONIAL //</h5></div>
        <div className='testimon2'><h1>Our Clients Say!</h1></div>
        <OwlCarousel className='owl-theme' loop margin={10} center autoplay>
          <div class='item'>
            <div className='test'>
              <img  src={test1} alt="testimoniqal" />
              </div>
              <h5>Client Name</h5>
              <p>profession</p>
              <div className='itemp'>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
          </div>
          <div class='item'>
          <div className='test'>
              <img  src={test2} alt="testimoniqal" />
              </div>
              <h5>Client Name</h5>
              <p>profession</p>
              <div className='itemp'>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
          </div>
          <div class='item'>
          <div className='test'>
              <img  src={test3} alt="testimoniqal" />
              </div>
              <h5>Client Name</h5>
              <p>profession</p>
              <div className='itemp'>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
          </div>
          <div class='item'>
          <div className='test'>
              <img  src={test4} alt="testimoniqal" />
              </div>
              <h5>Client Name</h5>
              <p>profession</p>
              <div className='itemp'>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
              </div>
          </div>
        
      </OwlCarousel>        
              </div>
      
    )
}
export default Testimon