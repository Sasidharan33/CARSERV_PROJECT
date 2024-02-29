import About1 from './About1'
import Book from './Book'
import Book1 from './Book1'
import Contac from './Contac'
function Booking(){
    return(
     <div>
        <div className="about-nav">
           <h1>Booking</h1>
           <ol>
            <li>HOME/</li>
            <li>PAGES/</li>
            <li>ABOUT</li>
           </ol>
    </div>
    <About1/>
    <Book/>
    <Book1/>
    <Contac/>
     </div>
    )
}
export default Booking