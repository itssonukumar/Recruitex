import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';    // Form Validation
import { yupResolver } from '@hookform/resolvers/yup';   // Form Validation
import * as yup from 'yup';   // Form Validation
import axios from 'axios';
// import axios from 'axios';  // fetch data

// form validation schema
const schema = yup
    .object()
    .shape({
        name: yup.string().required().min(2).max(30),
        email: yup.string().required().email(),
        contact: yup.string().required(),
        password: yup.string().required(),
        location: yup.string().required(),
        logo: yup.mixed().required()
    })


const RecruiterUpdate = () => {

    useEffect(()=>{
        const recruiterDetails = JSON.parse(localStorage.getItem('data'));
        if (recruiterDetails) {
            setValue('name',recruiterDetails.name)
            setValue('email',recruiterDetails.email)
            setValue('location',recruiterDetails.location)
            setValue('contact',recruiterDetails.contact)
            setValue('password',recruiterDetails.password)
            // setValue('logo',recruiterDetails.logo)
        }
    },[])
    // form validation useform Hook
    const { register, handleSubmit, setValue ,formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleData = async (data) => {
        if (!data || data.logo.length == 0) {
            alert('Please Select Image')
            return;
        }
        const tempdata = JSON.parse(localStorage.getItem('data'));
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('contact', data.contact);
        formData.append('password', data.password);
        formData.append('location', data.location);
        formData.append('logo', data.logo[0]);

        const response = await axios.put(`http://localhost:8000/api/recruiter-update/${tempdata._id}`, formData, {
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        if(response.data.code==200){
            alert("Profile Updated Succefully");
        }

    }

    return (
        <>
            <div className="form">
                <div className="form_icon">
                    <img src="../public/img/icon/recruiter.png" height='80px' />
                </div>
                <h2 className='form_h2'>Recruiter Update Profile</h2>
                <form onSubmit={handleSubmit(handleData)}>
                    {/* First row: Name and Email */}
                    <div className="form-row">
                        <div>
                            <input {...register('name')} className='form_input' type="text" name="name" placeholder='Enter Company Name' />
                            {errors.name?.message && <span className='err_span'>{errors.name?.message}</span>}
                        </div>
                        <div>
                            <input {...register('email')} className='form_input' type="text" name="email" placeholder='Enter Email'/>
                            {errors.email?.message && <span className='err_span'>{errors.email?.message}</span>}
                        </div>
                    </div>

                    {/* Second row: Contact and Password */}
                    <div className="form-row">
                        <div>
                            <input {...register('contact')} className='form_input' type="text" placeholder='Enter Contact Number' name="contact" />
                            {errors.contact?.message && <span className='err_span'>{errors.contact?.message}</span>}
                        </div>
                        <div>
                            <input {...register('password')} className='form_input' type="password" name="password" placeholder='Enter Password' />
                            {errors.password?.message && <span className='err_span'>{errors.password?.message}</span>}
                        </div>
                    </div>

                    {/* Third row: Location and Logo */}
                    <div className="form-row">
                        <div>
                            <input {...register('location')} className='form_input' type="text" name="location" placeholder='Enter Location' />
                            {errors.location?.message && <span className='err_span'>{errors.location?.message}</span>}
                        </div>
                        <div>
                            <input {...register('logo')}  className='form_input form_logo' type="file" name="logo" placeholder='Enter Logo' accept="image/*" />
                            {errors.logo?.message && <span className='err_span'>{errors.logo?.message}</span>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <input type='submit' className='form_button' value='Update Profile' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default RecruiterUpdate
