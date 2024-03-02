import { NavLink } from "react-router-dom";
import { TiDeleteOutline } from "react-icons/ti";
import { FaArrowLeft } from "react-icons/fa";

const Cart = ({ cart, setcart, item, price }) => {
  
  const handleremove = (id) => {
    alert("want to remove this item")
    const arr = cart.filter((data) => data.id !== id);
    setcart(arr);
    window.localStorage.setItem('cartdata', JSON.stringify(arr));
  }
  
  const handleincrement = (item) => {
    setcart(cart =>
      cart.map((data) =>
        data.id === item ? { ...data, quantity: data.quantity + (data.quantity < 10 ? 1 : 0) } : data
      )
    );
  }
  
  const handledecrement = (item) => {
    console.log(item)
    setcart(cart =>
      cart.map((data) =>
        data.id === item ? { ...data, quantity: data.quantity - (data.quantity > 1 ? 1 : 0) } : data
      )
    );
  }
  
  return (
    <div className="cart-head">
      {cart && cart.length > 0 ? (
        <div className="cart-head1">
          <table className="cart-table">
            <thead>
              <tr className="table-head">
                <th><h1>cart items</h1></th>
              </tr>
              <tr className="table-head1">
                <td className="table-cell2"><h6>PRODUCT</h6></td>
                <td className="table-cell1"><h6>PRICE</h6></td>
                <td className="table-cell1-2"><h6>QUANTITY</h6></td>
                <td className="table-cell1-3"><h6>SUB TOTAL</h6></td>
              </tr>
            </thead>
            <tbody>
              {cart.map((data) => (
                <tr className="table-row" key={data.id}>
                  <td className="table-cell3">
                    <img className="table-img" src={data.image} alt={data.name} />
                  </td>
                  <td className="table-cell4">
                    <h4>{data.name}</h4>
                    <h6>product details</h6>
                  </td>
                  <td className="table-cell-1">
                    <h6>{data.price}</h6>
                  </td>
                  <td className="table-cell-2">
                    <button className="q-inc" onClick={() => handleincrement(data.id)}>+</button>
                    <div className="quan">{data.quantity}</div>
                    <button className="q-dec" onClick={() => handledecrement(data.id)}>-</button>
                  </td>
                  <td className="table-cell-3">
                    <h6>{data.quantity * data.price}</h6>
                  </td>
                  <td>
                    <button className="remove" onClick={() => handleremove(data.id)}><TiDeleteOutline /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="summary">
            <thead>
              <tr className="sum-1">
                <th><h1>summary</h1></th>
              </tr>
            </thead>
            <tbody>
              <tr className="sum-2">
                <h5 className="firsth5">ITEMS: {item}</h5>
                <h5 className="secondh5">COUPON CODE</h5>
                <input className="firstin" type="text" />
              </tr>
              <tr className="sum-3">
                <td colSpan="3"><h5 className="thirdh5">TOTAL PRICE: {price}</h5></td>
              </tr>
              <tr className="sum-4">
              
                  <NavLink to="/cart/buy">
                    <button className="cout">checkout</button>
                  </NavLink>
              
              </tr>
              <tr className="sum-5">
                
                  <h5 className="fourh5"><FaArrowLeft />  BACK TO SHOP</h5>
                
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div><h1>YOUR CART IS EMPTY</h1></div>
      )}
    </div>
  );
}

export default Cart;