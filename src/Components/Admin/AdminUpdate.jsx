import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';    // Form Validation
import { yupResolver } from '@hookform/resolvers/yup';   // Form Validation
import * as yup from 'yup';   // Form Validation
import axios from 'axios';

const schema = yup
    .object()
    .shape({
        name: yup.string().required().min(2).max(30),
        email: yup.string().required().email(),
        // contact: yup.string().required(),
        password: yup.string().required(),
        // location: yup.string().required(),
        image: yup.mixed().required()
    })


const AdminUpdate = () => {
    useEffect(()=>{
        const adminDetails = JSON.parse(localStorage.getItem('data'));
        if (adminDetails) {
            setValue('name',adminDetails.name)
            setValue('email',adminDetails.email)
            setValue('password',adminDetails.password)
            // setValue('image',adminDetails.image)
        }
    },[])
    // form validation useform Hook
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleData = async (data) => {
        if (!data || data.image.length == 0) {
            alert('Please Select Image')
            return;
        }
        const tempdata = JSON.parse(localStorage.getItem('data'));
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        formData.append('image', data.image[0]);

        const response = await axios.put(`http://localhost:8000/api/admin-update/${tempdata._id}`, formData, {
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
                    <img src="../public/img/icon/admin.png" height='80px' />
                </div>
                <h2 className='form_h2'>Admin Update Profile</h2>
                <form onSubmit={handleSubmit(handleData)}>
                    {/* First row: Name and Email */}
                    <div className="form-row">
                        <div>
                            <label className="ms-1 mb-1">Name: </label>
                            <input {...register('name')} className='form_input' type="text" name="name" placeholder='Enter Your Name' />
                            {errors.name?.message && <span className='err_span'>{errors.name?.message}</span>}
                        </div>
                        <div>
                        <label className="ms-1 mb-1">Email: </label>
                            <input {...register('email')} readOnly className='form_input' type="text" name="email" placeholder='Enter Your Email'/>
                            {errors.email?.message && <span className='err_span'>{errors.email?.message}</span>}
                        </div>
                    </div>

                    {/* Second row: Contact and Password */}
                    <div className="form-row">
                        <div>
                        <label className="ms-1 mb-1">Password: </label>
                            <input {...register('password')} className='form_input' type="password" name="password" placeholder='Enter Password' />
                            {errors.password?.message && <span className='err_span'>{errors.password?.message}</span>}
                        </div>
                        <div>
                        <label className="ms-1 mb-1">Image: </label>
                            <input {...register('image')} className='form_input form_logo' type="file" name="image" accept="image/*" />
                            {errors.image?.message && <span className='err_span'>{errors.image?.message}</span>}
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

export default AdminUpdate
