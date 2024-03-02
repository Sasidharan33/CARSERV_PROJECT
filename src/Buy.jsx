import * as yup from 'yup';
import { useFormik } from "formik";
import  axios from 'axios';


const schema = yup.object().shape({
    firstname:yup
    .string()
    .required('firstname is required')
    .min(3,'first name must be 3 characters long'),
    phone:yup
    .number()
    .required('phone number is required')
    .min(10,'phone number must be 10 digit long'),
    gmail:yup 
    .string()
    .required('gmail is required')
    .email('invalid email format'),
    deliveredAddress:yup.object().shape({
    country:yup 
    .string()
    .required('country is required'),
    building:yup 
    .number()
    .required('building/houseno is required '),
    streetname:yup
    .string()
    .required('street name is required')
    .min(5,'street name must be 5 characters long'),
    city_village:yup 
    .string()
    .required('city/village name is required')
    .min(5,'city/village name must be 5 characters long'),
    district:yup 
    .string()
    .required('district name is required')
    .min(5,'district name must be 5 characters long'),
    postal_zip:yup 
    .number()
    .required('postal/zip code is required')
    .min(6,'postal/zip code must be 6 characters long'),
    }),
    payment:yup 
    .string()
    .required('must select one of the payment method')
    .oneOf(['cashondelivery','upi/paypal','credit/debitcard','emi'],'must select one of the payment method')
})

function Buy({item,price,cart}){
    const {values,handleChange,handleBlur,isSubmitting,handleSubmit,errors} = useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            phone:'',
            gmail:'',
            ordernote:'',
            items:item,
            tprice:price,
            payment:'',
            products:cart,
            deliveredAddress:{
            country:'',
            building:'',
            streetname:'',
            city_village:'',
            district:'',
            postal_zip:''
            }


        },
        validationSchema:schema,
        onSubmit:async (values,actions) => {
             console.log("clicked",values);
            try{
              const res = await axios.post('https://carservbe.onrender.com/api/orders',values);
              console.log(res);
              setTimeout(() => {
              actions.resetForm();
              },1000)
              alert('order placed suceessfully')
            }
            catch(err){
                console.log(err)
            }
        }
    })
    if(cart !== null)
    
    return(
        <div className="buy-form">
            <form onSubmit={handleSubmit} >
            <h1 className="buy-h1">Billing Details</h1>
            <h1 className="buy-h2">Order Summary</h1>
            <div className="buy-form1">
     
     <label htmlFor="" className="lab1"><h5>Country *</h5></label><br/>
        <input type="text"
         name="deliveredAddress.country"
         value={values.deliveredAddress.country}
         className="inp1"
         onChange={handleChange}
         onBlur={handleBlur}
         /><br />
        <p className="valide">{errors.deliveredAddress?.country}</p>
        <div className="username">
        <div className="f1name">
        <label htmlFor="" className="lab2"><h5>First Name *</h5></label><br/>
        <input type="text" 
        name="firstname" value={values.firstname}  
        placeholder="jhon" 
        className="inp2"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        </div>
        <div className="l1name">
        <label htmlFor="" className="lab3"><h5>last Name </h5></label><br/>
        <input type="text" 
        name="lastname" 
        value={values.lastname}  
        placeholder="doe" 
        className="inp3"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        </div>
        <p className="valide">{errors.firstname}</p>
        </div>
        <div className="usercontact">
        <div className="usercontac1">
        <label htmlFor="" className="lab4"><h5>phone *</h5></label><br/>
        <input type="text" 
        name="phone" 
        value={values.phone}  
        placeholder="+916384784423" 
        className="inp4"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.phone}</p>
        </div>
        <div className="usercontac2">        
        <label htmlFor="" className="lab5"><h5>Gmail *</h5></label><br/>
        <input type="text" 
        value={values.gmail} 
        name="gmail"  
        placeholder="dccecc566@gmail.com" 
        className="inp5"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.gmail}</p>
        </div>
        </div>
        <div className="useraddress">
        <label htmlFor="" className="lab6"><h5>address *</h5></label><br/>
        <div className="useraddress1">
        <input placeholder="Building/House No" 
        value={values.deliveredAddress.building}  
        name="deliveredAddress.building" 
        type="text" 
        className="inp6"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.deliveredAddress?.building}</p>
        </div>
        <div className="useraddress2">
        <input placeholder="street name" 
        value={values.deliveredAddress.streetname} 
        type="text"  
        name="deliveredAddress.streetname" 
        className="inp7"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.deliveredAddress?.streetname}</p>
        </div>
        <div className="useraddress3">
        <input placeholder="City/Village Name" 
        value={values.deliveredAddress.city_village} 
        name="deliveredAddress.city_village" 
        type="text" 
        className="inp8"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.deliveredAddress?.city_village}</p>
        </div>
        </div>
        <div className="userdist">
        <div className="userdist1">
        <label htmlFor="" className="lab9"><h5>Distric *</h5></label><br/>
        <input type="text" 
        name="deliveredAddress.district" 
        value={values.deliveredAddress.district}  
        className="inp9"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.deliveredAddress?.district}</p>
        </div>
        <div className="userdist2">
        <label htmlFor="" className="lab10"><h5>Postal/zip *</h5></label><br/>
        <input type="text" 
        value={values.deliveredAddress.postal_zip}  
        name="deliveredAddress.postal_zip" 
        className="inp10"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.deliveredAddress?.postal_zip}</p>
        </div>
        </div>
        <label htmlFor="" className="lab11"><h5>Order Notes </h5></label><br/>
        <textarea type="paragraph" 
        value={values.ordernote}  
        name="ordernote" 
        placeholder="Add Your Notes" 
        className="inp11"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <button >submit</button>
     
     </div>
     <div className="buy-form2">
        <table className="buy-table1">
            <thead>
     <tr className="buy-table">
                    <td className="buy-cell"><h3>Product</h3></td>
                    <td className="buy-cell2"><h3>Quantity</h3></td>
                    <td className="buy-cell1"><h3>Total</h3></td>
                </tr>
                </thead>
     {
        cart.map((data,index)=>(
        
                <tbody>
                <tr key={index} className="buy-table">
                    <td className="buy-cell"><h5 >{data.name} </h5></td>
                    <td className="buy-cell2"><h5>{data.quantity}</h5></td>
                    <td className="buy-cell1"><h5 >{data.quantity * data.price}</h5></td>
                </tr>
                </tbody>
                
                      ))
     }   
                 <tfoot>
                <tr className="buy-table2">
                    <td className="buy-cell2"></td>
                    <td className="buy-cell"><h5> Total Items</h5></td>
                    <td name='items' className="buy-cell1"><h5>{item}</h5></td>
                </tr>
                <tr className="buy-table2">
                <td className="buy-cell2"></td>
                    <td className="buy-cell"><h5> Order Total</h5></td>
                    <td name='tprice' className="buy-cell1"><h5>{price}</h5></td>
                </tr>
                </tfoot>
                </table>
                
  
     </div>
     <h1 className="buy-h3">PAYMENT</h1>
     <div className="buy-form3">
       <input type="radio" name='payment' onChange={handleChange} onBlur={handleBlur} value="cashondelivery"  /> 
       <label htmlFor="cod"><h2>Cash On Delivery</h2></label><br />
       <input type="radio" name='payment' onChange={handleChange} onBlur={handleBlur} value="upi/paypal" />
       <label htmlFor="upi"><h2>Upi/Paypal</h2></label><br />
       <input type="radio" name='payment' onChange={handleChange} onBlur={handleBlur} value="credit/debitcard" />
       <label htmlFor="c/d"><h2>Credit/Debit Card</h2></label><br />
       <input type="radio" name='payment' onChange={handleChange} onBlur={handleBlur} value="emi" />
       <label htmlFor="c/d"><h2>EMI</h2></label><br />
       <p className="valide">{errors.payment}</p>
     </div>
     <button type="submit" disabled={isSubmitting} className="buy-h4">
     <h3>Buy Now</h3>
     </button>
     </form>
        </div>
    )
    }
export default Buy