import * as yup from 'yup';
import { useFormik } from "formik";

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
    .min(6,'postal/zip code must be 6 characters long')
})

function Buy({item,price,cart}){
    const {values,handleChange,handleBlur,handleSubmit,errors} = useFormik({
        initialValues:{
            firstname:'',
            firstname:'',
            lastname:'',
            phone:'',
            gmail:'',
            ordernote:'',
            country:'',
            building:'',
            streetname:'',
            city_village:'',
            district:'',
            postal_zip:''

        },
        validationSchema:schema,
        onSubmit: (values) => {
             console.log(values)
             setTimeout(values='',1000);    
        }
    })
    
    
    
    return(
        <div className="buy-form">
            <h1 className="buy-h1">Billing Details</h1>
            <h1 className="buy-h2">Order Summary</h1>
            <div className="buy-form1">
     <form onSubmit={handleSubmit} >
     <label htmlFor="" className="lab1"><h5>Country *</h5></label><br/>
        <input type="text"
         name="country"
         value={values.country}
         className="inp1"
         onChange={handleChange}
         onBlur={handleBlur}
         /><br />
        <p className="valide">{errors.country}</p>
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
        value={values.house}  
        name="building" 
        type="text" 
        className="inp6"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.building}</p>
        </div>
        <div className="useraddress2">
        <input placeholder="street name" 
        value={values.streetname} 
        type="text"  
        name="streetname" 
        className="inp7"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.streetname}</p>
        </div>
        <div className="useraddress3">
        <input placeholder="City/Village Name" 
        value={values.city_village} 
        name="city_village" 
        type="text" 
        className="inp8"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.city_village}</p>
        </div>
        </div>
        <div className="userdist">
        <div className="userdist1">
        <label htmlFor="" className="lab9"><h5>Distric *</h5></label><br/>
        <input type="text" 
        name="district" 
        value={values.district}  
        className="inp9"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.district}</p>
        </div>
        <div className="userdist2">
        <label htmlFor="" className="lab10"><h5>Postal/zip *</h5></label><br/>
        <input type="text" 
        value={values.postal_zip}  
        name="postal_zip" 
        className="inp10"
        onChange={handleChange}
        onBlur={handleBlur}
        /><br />
        <p className="valide">{errors.postal_zip}</p>
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
        <button type="submit">submit</button>
     </form>
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
        cart.map((data)=>(
        
                <tbody>
                <tr className="buy-table">
                    <td className="buy-cell"><h5>{data.name} </h5></td>
                    <td className="buy-cell2"><h5>{data.quantity}</h5></td>
                    <td className="buy-cell1"><h5>{data.quantity * data.price}</h5></td>
                </tr>
                </tbody>
                
                      ))
     }   
                 <tfoot>
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
                </tfoot>
                </table>
                
  
     </div>
     <h1 className="buy-h3">PAYMENT</h1>
     <div className="buy-form3">
       
     </div>
     <button className="buy-h4">
     <h3>Buy Now</h3>
     </button>
        </div>
    )
}
export default Buy