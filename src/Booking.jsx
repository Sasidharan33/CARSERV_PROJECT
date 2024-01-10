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
            <li><a href="">HOME/</a></li>
            <li><a href="">PAGES/</a></li>
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