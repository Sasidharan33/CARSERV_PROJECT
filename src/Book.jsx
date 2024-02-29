import './Style.css'
import {  useFormik } from 'formik';
import axios from 'axios';
function Book(){
    const {values,handleChange,handleSubmit} = useFormik({
      initialValues:{
      name:'',
      email:'',
      service:'',
      date:'',
      request:''
      },
      onSubmit: async (values) => {
         try{
            const res = await axios.post('https://carservbe.onrender.com/api/booking',values)
            console.log(res)
            setTimeout(values.name='',values.email='',values.service='',values.date='',values.request='',1000)
            alert('booked successfully')
         }
         catch(err){
           console.log(err)
         }
      }

    })
    return(
        <div className='book'>
        <div className='book-l'>
          <h1>Certified and Award Winning Car Repair Service Provider</h1>
          <p>Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. 
            Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt 
            voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo 
            invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
        </div>
        <div className='book-r'>
          <h1>Book For A Service</h1>
          <form action="" onSubmit={handleSubmit}>
          <input className='input1' onChange={handleChange} name='name' value={values.name} type="text" placeholder='Your Name' />
          <input className='input2' onChange={handleChange} name='email' value={values.email} type="email" placeholder='Your Email' />
          <select name='service' value={values.service} onChange={handleChange}  className='input1' >
            <option value="select a service" selected>select a service</option>
            <option value='service 3'>service 1</option>
            <option value='service 2'>service 2</option>
            <option value='service 3'>service 3</option>
          </select>
          <input onChange={handleChange} value={values.date} name='date' className='input2' type="date" placeholder='Service Date' />
          <input onChange={handleChange} value={values.request} name='request' className='input3' type="text" placeholder='Special Request'/>
          <button type='submit'>BOOK NOW</button>
          </form>
        </div>
</div>
    )
}
export default Book