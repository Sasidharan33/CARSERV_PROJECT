import Book from "./Book"
import Contac from "./Contac"
import Serv2 from "./Serv2"
import Testimon from "./Testimon"
function Service(){
    return(
        <div>
          
    <div className="serv-nav">
           <h1>Services</h1>
           <ol>
            <li><a href="">HOME/</a></li>
            <li><a href="">PAGES/</a></li>
            <li>ABOUT</li>
           </ol>
    </div>
    <Serv2/>
    <Book/>
    <Testimon/>
    <Contac/>
        </div>
    )
}
export default Service