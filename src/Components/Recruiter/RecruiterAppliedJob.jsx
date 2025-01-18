import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { FaLocationDot } from 'react-icons/fa6'



const RecruiterAppliedJob = () => {

    const [dataId, setDataId] = useState("");
    const [jobData, setJobData] = useState([]);
    useEffect(() => {
        const tempData = JSON.parse(localStorage.getItem('data'));
        setDataId(tempData._id);
        getData();
        // console.log(tempData._id, 'temp');
    }, [dataId]);
    // console.log(dataId, 'did')
    const getData = async () => {
        const tempData = JSON.parse(localStorage.getItem('data'));
        const payload = {
            companyId: tempData._id  // working
        }
        const response = await axios.post('http://localhost:8000/api/recruiter-applied', payload, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.data.code == 200) {
            setJobData(response.data.data);
        }
        // console.log(dataId, '1111111111111111');
    }


    return (
        <>
            <div className="container my-3">
            <h3 className="tc_h2 mb-3">APPLIERS ON JOBS</h3>
                    {jobData.map((el) => {
                        console.log(el);
                        
                        return (
                            <div className="card p-3 mb-3 postedjob_card">
                            <div className="row d-flex justify-content-center align-items-center">
                                {/* Logo Column */}
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <img src={`http://localhost:8000/upload/${el.image}`} alt="Company Logo" className="img-fluid" style={{ maxHeight: '100px' }} />
                                </div>

                                {/* Company Name, Job Title, and Job Type Column */}
                                <div className="col-md-3 d-flex justify-content-start flex-column my-3">
                                    <h5 className='postedjob_h'> {el.name}</h5>
                                    <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobTitle}</span></div>
                                    <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.jobType}</span></div>
                                </div>

                                {/* Job Category, Location, and Salary Column */}
                                <div className="col-md-3">
                                    <div className='postedjob_p2 mb-2'>Category: <span className='postedjob_p1'> {el.category}</span></div>
                                    <div className='postedjob_p2 mb-2'>Location: <span className='postedjob_p1'> {el.jobLocation}</span></div>
                                    <div className='postedjob_p2 mb-2'>Salary: <span className='postedjob_p1'> {el.salary}</span></div>
                                </div>

                                {/* Apply Date and Vacancies Column */}
                                <div className="col-md-3">
                                    <div className='postedjob_p2 mb-2'>Contact: <span className='postedjob_p1'> {el.contact}</span></div>
                                    <div className='postedjob_p2 mb-2'><span className='postedjob_p1'> {el.email}</span></div>
                                    <div className='form_button mt-3' style={{width:'150px', fontSize:"0.8em"}}><a download={`http://localhost:8000/upload/${el?.resume}`} className='form_button' target='_blank' style={{width:'150px',fontSize:"0.8em", textDecoration:"none"}} href={`http://localhost:8000/upload/${el?.resume}`}>DOWNLOAD RESUME</a></div>
                                </div>
                            </div>
                            </div>
                        )
                    })}
                
            </div>
        </>
    )
}

export default RecruiterAppliedJob
