import Contac from "./Contac"
import Testimon from "./Testimon"

function Testimonial(){
    return(
        <div>
         <div className="about-nav">
           <h1>Testimonial</h1>
           <ol>
            <li><a href="/ho">HOME/</a></li>
            <li><a href="/pa">PAGES/</a></li>
            <li>ABOUT</li>
           </ol>
           </div>
           <Testimon/>
           <Contac/>
        </div>
    )
}
export default Testimonial