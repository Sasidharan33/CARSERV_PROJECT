import React, { useEffect, useState } from 'react'
import l1 from './images/l1car.avif'
import * as yup from 'yup';
import { useFormik } from 'formik';
import  axios from 'axios';
import {NavLink,Navigate} from "react-router-dom";
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
const Login = ({user,setUser}) => {
   const[token,settoken] = useState(null);
   useEffect(() => {
    const loggedinuser = window.localStorage.getItem('loggedinuser');
    if(loggedinuser){
    const user = JSON.parse(loggedinuser)
    setUser(user);
    settoken(user.token)
    }
   },[])
   const {values,handleChange,isSubmitting,handleBlur,handleSubmit,errors} = useFormik({
    initialValues:{
      username:'',
      email:'',
      password:''
    },
    validationSchema:schema,
    onSubmit:async (values,actions) => {
      try{
        const res = await axios.post('https://carservbe.onrender.com/api/login',values);
        const user = res.data;
        settoken(user.token);
        setUser(user)
        window.localStorage.setItem('loggedinuser',JSON.stringify(user));
        setTimeout(()=> {
          actions.resetForm()
          actions.setSubmitting(false)
        },1000)
        alert("welcome")
      }
      catch(error){
        alert(error.response.data.error)
        setTimeout(values.username='',
        values.email='',
        values.password='',1000)
      }
          
    }
   })

   const loginform = () => {
    return(

    <div className='login-main'>
      
    <div className='login-main2'>
  <form onSubmit={handleSubmit} className='logon'>
  <h1>LOGIN</h1>
  <input 
  type="text" 
  onChange={handleChange}
  onBlur={handleBlur}
  name='username'
  className='log-input1' 
  placeholder='username' 
  value={values.username}
  />
  <br />
  <span>{errors.username}</span>
  <br />
  <input 
  type="email" 
  name='email'
  onChange={handleChange}
  onBlur={handleBlur}
  value={values.email}
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
  <button type='submit' disabled={isSubmitting} className='log-button'>LOGIN</button>
  <br />
  <span className='sign'><NavLink to='/signin'>SIGNIN</NavLink></span>   <span className='forgot'>Forgot Password?</span>
</form>
<img src={l1} alt="carimage" />
      </div>
    </div>)

   }
  return (
    <>
    {
      user ? <Navigate to='/'/>: loginform()
    }
    </>
        )
}

export default Login
