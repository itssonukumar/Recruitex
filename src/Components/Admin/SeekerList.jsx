import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeekerList = () => {
const [seeker, setSeeker] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])  // always use get method in useEffect

    const fetchData = async()=>{
       const response = await axios.get('http://localhost:8000/api/admin-seekerlist', {
            headers:{
                'Content-Type': "application/json"
            }
        })
        console.log(response);
        
        if(response.data.code == 200){
            setSeeker(response.data.data);
        }
    }

    const handleBlock = async(el)=>{
        // console.log(el, "ppppppppppp");
        const payload = {
            status: el.isBlock ? false : true
        }
       const response = await axios.put(`http://localhost:8000/api/admin-seekerblock/${el._id}`, payload,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        if (response.data.code == 200) {
            alert("Status Updated Succefully")
            fetchData()
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    {seeker.map((el)=>(
                        <div className="col-md-5 my-3">
                        <div className="card text-center px-2">
                            <img
                                src={`http://localhost:8000/upload/${el.image}`}
                                alt="Profile"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h3 className="card-title form_h2">{el.name}</h3>
                                <div className="card-details">
                                    <div className="detail-item">
                                        <span className="detail-label">Email:</span>
                                        <span className="detail-value">{el.email}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Contact:</span>
                                        <span className="detail-value">{el.contact}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Location:</span>
                                        <span className="detail-value">{el.location}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Qualification:</span>
                                        <span className="detail-value">{el.qualification}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Preference:</span>
                                        <span className="detail-value">{el.jobPreference}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div onClick={()=>handleBlock(el)} className='form_button mb-4' style={{width:"90%", margin:"0px auto", fontSize:"0.9em"}}>{el.isBlock ? "UNBLOCK" : "BLOCK"}</div>
                            </div>
                        </div>
                    </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default SeekerList
