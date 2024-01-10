import {Link} from "react-router-dom";
import './Animation.css'
function About1(){
    return(
        <div>
       <div className="about1">
        <div className="main">
            <div className="con1">
                <div className="i1"><i class="bi bi-patch-check-fill"></i></div>
                <div className="t1">Quality Servicing</div>
                <div className="p1">Diam dolor diam ipsum sit amet diam et eos erat ipsum</div>
                <div className="l1"><Link to='/about2'>Read more</Link></div>
            </div>
            <div className="con2">
                <div className="i2"><i class="bi bi-person-gear"></i></div>
                <div className="t2">Expert Workers</div>
                <div className="p2">Diam dolor diam ipsum sit amet diam et eos erat ipsum</div>
                <div className="l2"><Link to='/tech'>Read more</Link></div>
            </div>
            <div className="con3">
                <div className="i3"><i class="bi bi-tools"></i></div>
                <div className="t3">Modern Equipment</div>
                <div className="p3">Diam dolor diam ipsum sit amet diam et eos erat ipsum</div>
                <div className="l3"><Link to='/equip'>Read more</Link></div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default About1