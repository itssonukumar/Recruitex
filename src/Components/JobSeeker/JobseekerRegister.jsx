import React from 'react';
import { useForm } from 'react-hook-form';    // Form Validation
import { yupResolver } from '@hookform/resolvers/yup';   // Form Validation
import * as yup from 'yup';   // Form Validation
import axios from 'axios';  // fetch data

// form validation schema
const schema = yup
  .object()
  .shape({
    name: yup.string().required().min(2).max(30),
    email: yup.string().required().email(),
    contact: yup.string().required(),
    password: yup.string().required(),
    location: yup.string().required(),
    image: yup.mixed().required(),
    resume: yup.mixed().required(),
    qualification: yup.string().required(),
    jobPreference: yup.string().required()
  })

const JobseekerRegister = () => {

// form validation useform Hook
const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = async(data) =>{
    const formData = new FormData();
    formData.append('name',data.name);
    formData.append('email',data.email);
    formData.append('contact',data.contact);
    formData.append('password',data.password);
    formData.append('location',data.location);
    formData.append('image',data.image[0]);
    formData.append('resume',data.resume[0]);
    formData.append('qualification', data.qualification);
    formData.append('jobPreference', data.jobPreference);
    // API Calling
    const response = await axios.post('http://localhost:8000/api/seeker-register', formData, {
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    alert("Registration Successfull !")
  }

    return (
        <>
            <div className="form">
                <div className="form_icon">
                <img src="../public/img/icon/seeker.png" height='80px'/>
                </div>
                <h2 className='form_h2'>Job Seeker Sign Up</h2>
                <form onSubmit={handleSubmit(handleData)}>
                    {/* First row: Name and Email */}
                    <div className="form-row">
                        <div>
                            <input {...register('name')} className='form_input' type="text" name="name" placeholder='Enter Your Name' />
                            {errors.name?.message && <span className='err_span'>{errors.name?.message}</span>}
                        </div>
                        <div>
                            <input {...register('email')} className='form_input' type="text" name="email" placeholder='Enter Email' />
                            {errors.email?.message && <span className='err_span'>{errors.email?.message}</span>}
                        </div>
                    </div>

                    {/* Second row: Contact and Password */}
                    <div className="form-row">
                        <div>
                            <input {...register('contact')} className='form_input' type="number" placeholder='Enter Contact Number' name="contact" />
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
                            <input {...register('qualification')} className='form_input' type="text" name="qualification" placeholder='Enter Your Qualification' />
                            {errors.qualification?.message && <span className='err_span'>{errors.qualification?.message}</span>}
                        </div>
                        <div>
                            <input {...register('location')} className='form_input' type="text" name="location" placeholder='Enter Your Location'  />
                            {errors.location?.message && <span className='err_span'>{errors.location?.message}</span>}
                        </div>
                    </div>

                    {/* Fourth Row */}
                    <div className="form-row">
                        <div>
                            <input {...register('jobPreference')} className='form_input' type="text" name="jobPreference" placeholder='Job Preference' />
                            {errors.jobPreference?.message && <span className='err_span'>{errors.jobPreference?.message}</span>}
                        </div>
                        <div>
                            <input {...register('image')} className='form_input form_logo' type="file" name="image" placeholder='Upload Image'  accept='image/*'/>
                            {errors.image?.message && <span className='err_span'>{errors.image?.message}</span>}
                        </div>
                    </div>
                    {/* Fifth Row */}
                    <div className="form-row">
                        <div>
                            <input {...register('resume')} className='form_input form_logo form_resume' type="file" name="resume" placeholder='Upload Resume' accept='.pdf'  />
                            {errors.resume?.message && <span className='err_span'>{errors.resume?.message}</span>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <input type='submit' className='form_button' value='Sign Up' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default JobseekerRegister
