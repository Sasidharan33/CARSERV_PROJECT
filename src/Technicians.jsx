import Contac from "./Contac"
import Technical from "./Technical"
function Technicians(){
    return(
        <div>
           <div className="serv-nav">
           <h1>Technicians</h1>
           <ol>
            <li><a href="/ho">HOME/</a></li>
            <li><a href="/pa">PAGES/</a></li>
            <li>ABOUT</li>
           </ol>
           </div>
           <Technical/>
           <Contac/>
        </div>
    )
}
export default Technicians