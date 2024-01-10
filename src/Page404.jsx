import { NavLink } from "react-router-dom"
import Contac from "./Contac"
import { IoWarningOutline } from "react-icons/io5";


function Page404(){
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
    <div className="page404">
    <IoWarningOutline className="warning" />
         <h1 className="pa1">404</h1>
         <h1>Page Not Found</h1>
         <p>We’re sorry, the page you have looked for does not exist 
            in our website! Maybe go to our home page or try to use a search?</p>
            <NavLink className="bhome">
            <div className="pa2">GO BACK TO HOME</div>
            </NavLink>
    </div>
    <Contac/>
        </div>
    )
}
export default Page404