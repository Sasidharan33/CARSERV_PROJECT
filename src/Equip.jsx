import eq1 from './images/eq-1.jpg'
import eq3 from './images/eq-3.jpg'
import eq4 from './images/eq-4.jpg'
import eq5 from './images/eq-5.jpg'
import OwlCarousel from 'react-owl-carousel';
import eq2 from './images/equip-2.jpg'
import { NavLink } from 'react-router-dom';

function Equip(){
    return(
        <div className="equip"> 
        <h5>// MODERN EQUIPMENTS //</h5>
        <div  className="equip1">
            <h1> Automotive equipment</h1>
            <p>Car accessories refer to add-ons that are used to
                 upgrade a new car, improve its capabilities or enhance 
                 its visual appearance. Accessories for cars come in different forms, shapes and sizes.</p>
        </div>
    <OwlCarousel className='owl' margin={30} items={1} animateOut='fadeOut' stagePadding={30}
    smartSpeed={450} nav>

    <div className='equi' >
        <img src={eq1} alt="xzczc" />
    </div>
    <div className='equi'>
        <img src={eq2} alt="ddsv" />
    </div>
    <div className='equi'>
        <img src={eq3} alt="dsdf" />
    </div>
    <div className='equi'>
        <img src={eq4} alt="dfsd" />
    </div>
    <div className='equi'>
        <img src={eq5} alt="asfsdf" />
    </div>
</OwlCarousel>
<div className="eql">
      <NavLink className='eql-l'><h3>GO BACK TO HOME</h3></NavLink>
      </div>
              </div>
    )
}
export default Equip