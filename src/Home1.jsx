import Carousel from 'react-bootstrap/Carousel';
import c1 from './images/carousel-bg-1.jpg'
import c2 from './images/carousel-bg-2.jpg'
import car1 from './images/carousel-1.png'
import car2 from './images/carousel-2.png'
import { FaArrowRight } from "react-icons/fa";
function Home1(){
    return(
        <Carousel theme="white">
        <Carousel.Item className='carou1'>
          <div>
          <img
            className="c1"
            src={c1}
            alt="First slide"
          />
          <div className='carousel1'>
              <div className='content1'>
                  <h6>// CAR SERVICING //</h6>
                  <h1>Qualified Car Repair Service Center</h1>
                  <button ><h6>LEARN MORE</h6><FaArrowRight className='arrow1' /></button>
              </div>
              <div className='car1'>
              <img className='carr1' src={car1} alt="car1" />
              </div>
          </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div>
          <img
            className="c2"
            src={c2}
            alt="second slide"
          />
          <div className='carousel2'>
              <div className='content2'>
                  <h6>// CAR SERVICING //</h6>
                  <h1>Qualified Car wash Service Center</h1>
                  <button><h6>LEARN MORE</h6><FaArrowRight className='arrow1'  /></button>
                
              </div>
              <div className='car2'>
              <img className='carr2' src={car2} alt="car2" />
              </div>
          </div>
          </div>
        </Carousel.Item>
          </Carousel>
    )
}
export default Home1