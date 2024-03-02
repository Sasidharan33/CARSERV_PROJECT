import React, { useState } from 'react'
import l1 from './images/l1car.avif'
import * as yup from 'yup';
import { useFormik } from 'formik';
import  axios from 'axios';
import {NavLink,Link} from "react-router-dom";
import Login from './Login';
const schema = yup.object().shape({
    username:yup 
    .string()
    .required('username is required')
    .min(3,'username atleast 3characters'),
    email:yup 
    .string()
    .required('email is required')
    .email('enter a valid email'),
    password:yup 
    .string()
    .required('password is required')
    .min(6,'password atleast 6 characters')
 })
function Signin() {
  const[registered,setregisterd] = useState(false)
   const {values,handleChange,isSubmitting,handleBlur,handleSubmit,errors} = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },
    validationSchema:schema,
    onSubmit:async (values,actions) => {
      try{
      const res = await axios.post('https://carservbe.onrender.com/api/users',values);
      if(res.statusText='OK'){
        console.log(res)
        setregisterd(true)
        setTimeout(() => {
          actions.resetForm()
          actions.setSubmitting(false)
        },1000)
      }
    }
    catch(error){
      alert(error.response.data.error)
      setTimeout(values.username='',
        values.email='',
        values.password='',1000)
    }
      
    }
})
  return (
    <div>
      {
        registered ?(<Login/>):(<div className='login-main'>
      
        <div className='login-main2'>
        <form onSubmit={handleSubmit} className='logon'>
              <h1>SIGNIN</h1>
              <input 
              type="text" 
              name='username'
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className='log-input1' 
              placeholder='username' 
              />
              <br />
              <span>{errors.username}</span>
              <br />
              <input 
              type="email" 
              name='email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className='log-input1' 
              placeholder='email' 
              />
              <br />
              <span>{errors.email}</span>
              <br />
              <input 
              type="password" 
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className='log-input1' 
              placeholder='password' 
              />
              <br />
              <span>{errors.password}</span>
              <br />
              <button type='submit' disabled={isSubmitting} className='log-button'>SIGNIN</button>
              <br />
              <span className='sign'>Already a user?<NavLink to='/login'>LOGIN</NavLink></span>   
            </form>
            <img src={l1} alt="carimage" />
          </div>
        </div>)
      }
    </div>
  )
}

export default Signin
