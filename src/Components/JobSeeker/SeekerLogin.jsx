import React from 'react';
import { useForm } from 'react-hook-form';    // Form Validation
import { yupResolver } from '@hookform/resolvers/yup';   // Form Validation
import * as yup from 'yup';   // Form Validation
import axios from 'axios';  // fetch data
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object()
  .shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })

const SeekerLogin = () => {

    const navigate = useNavigate();

// form validation useform Hook
const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async(data) =>{
    const payload = {
        email : data.email, 
        password: data.password
      };

      // API Call
    const response = await axios.post('http://localhost:8000/api/seeker-login', payload, {
        headers:{
          'Content-Type' : "application/json"
        }
      });
  
      // console.log(response);
      if(response.data.code == 200){
        localStorage.setItem('data',JSON.stringify(response.data.data));
        localStorage.setItem('userType',JSON.stringify('seeker'));  //use in dynamic navbar
        alert('Login Successfull!');
        navigate('/seeker')
      }
      else if(response.data.code == 203){
        alert('Your Account is Blocked, Please Contact to Admin');
      }
      else{
        alert("Invalid Email or Password!")
      }
  }

    return (
        <>
            <div className="form">
                <div className="form_icon">
                    <img src="../public/img/icon/seeker.png" height='80px' />
                </div>
                <h2 className='form_h2'>Job Seeker Sign In</h2>
                <form onSubmit={handleSubmit(handleData)}>
                    {/* First row: Name and Email */}
                    <div className="form-row-login">
                        <div>
                            <input {...register('email')}  className='form_input' type="email" name="email" placeholder='Enter Your Email' />
                            {errors.email?.message && <span className='err_span'>{errors.email?.message}</span>}

                        </div>
                    </div>
                    <div className="form-row-login">
                        <div>
                            <input {...register('password')} className='form_input' type="password" name="password" placeholder='Enter Password' />
                            {errors.password?.message && <span className='err_span'>{errors.password?.message}</span>}

                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <input type='submit' className='form_button' value='LOGIN' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default SeekerLogin
