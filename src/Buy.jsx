import {NavLink} from "react-router-dom";
function Buy({item,price,cart}){
    return(
        <div className="buy-form">
            <h1 className="buy-h1">Billing Details</h1>
            <h1 className="buy-h2">Order Summary</h1>
            <div className="buy-form1">
     <form action="">
     <label htmlFor="" className="lab1"><h5>Country *</h5></label><br/>
        <input type="text" className="inp1"/><br />
        <label htmlFor="" className="lab2"><h5>First Name *</h5></label><br/>
        <input type="text" className="inp2"/><br />
        <label htmlFor="" className="lab3"><h5>last Name *</h5></label><br/>
        <input type="text" className="inp3"/><br />
        <label htmlFor="" className="lab4"><h5>Contact Number *</h5></label><br/>
        <input type="text" placeholder="+916384784423" className="inp4"/><br />
        <label htmlFor="" className="lab5"><h5>Gmail *</h5></label><br/>
        <input type="text" placeholder="dccecc566@gmail.com" className="inp5"/><br />
        <label htmlFor="" className="lab6"><h5>address *</h5></label><br/>
        <input placeholder="Building/House No" type="text" className="inp6"/><br />
        <input placeholder="street name" type="text" className="inp7"/><br />
        <input placeholder="City/Village Name" type="text" className="inp8"/><br />
        <label htmlFor="" className="lab9"><h5>Distric *</h5></label><br/>
        <input type="text" className="inp9"/><br />
        <label htmlFor="" className="lab10"><h5>Postal/zip *</h5></label><br/>
        <input type="text" className="inp10"/><br />
        <label htmlFor="" className="lab11"><h5>Order Notes </h5></label><br/>
        <input type="paragraph" placeholder="Add Your Notes" className="inp11"/><br />
     </form>
     </div>
     <div className="buy-form2">
        <table className="buy-table1">
     <tr className="buy-table">
                    <td className="buy-cell"><h3>Product</h3></td>
                    <td className="buy-cell2"><h3>Quantity</h3></td>
                    <td className="buy-cell1"><h3>Total</h3></td>
                </tr>
     {
        cart.map((data)=>(
            <>
                
                <tr className="buy-table">
                    <td className="buy-cell"><h5>{data.name} </h5></td>
                    <td className="buy-cell2"><h5>{data.quantity}</h5></td>
                    <td className="buy-cell1"><h5>{data.quantity * data.price}</h5></td>
                </tr>
        
                </>
                      ))
     }   
                <tr className="buy-table2">
                    <td className="buy-cell2"></td>
                    <td className="buy-cell"><h5> Total Items</h5></td>
                    <td className="buy-cell1"><h5>{item}</h5></td>
                </tr>
                <tr className="buy-table2">
                <td className="buy-cell2"></td>
                    <td className="buy-cell"><h5> Order Total</h5></td>
                    <td className="buy-cell1"><h5>{price}</h5></td>
                </tr>
                </table>
                
  
     </div>
     <h1 className="buy-h3">PAYMENT</h1>
     <div className="buy-form3">
       <NavLink>
        <h2>Net Banking</h2>
       </NavLink>
       <NavLink>
        <h2>UPI</h2>
       </NavLink>
       <NavLink>
        <h2>COD</h2>
       </NavLink>
       <NavLink>
        <h2>Debit/Credit Card</h2>
       </NavLink>
     </div>
     <button className="buy-h4">
     <h3>Buy Now</h3>
     </button>
        </div>
    )
}
export default Buy