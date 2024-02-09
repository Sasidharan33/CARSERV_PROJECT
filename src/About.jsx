
import About1 from "./About1"
import About2 from "./About2";
import Serv1 from "./Serv1";
import Technical from "./Technical";
import Contac from "./Contac";
function About(){
    return(
        <div>
    <div className="about-nav">
           <h1>About Us</h1>
           <ol>
            <li><a href="">HOME /</a></li>
            <li><a href="">   PAGES /</a></li>
            <li> ABOUT</li>
           </ol>
    </div>
    <About1/>
        <About2/>
       <Serv1/>
  <Technical/>
  <Contac/>
     </div>
    )
}
export default About