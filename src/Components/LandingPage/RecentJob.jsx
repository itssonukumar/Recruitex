import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const RecentJob = () => {
    const loginAlert = () =>{
        alert("Please Login To Apply")
    }
    return (
        <>
            <div className="recentjob">
                <div className="tc_p">RECENT JOB</div>
                <h3 className="tc_h2" style={{ marginTop: "15px" }}>Featured Jobs</h3>
                    <div className="recentjobs">
                        <div className="rjjobs" onClick={loginAlert}>
                            <div className="rjj_img">
                                <img src="/img/icon/job-list1.png" alt="" />
                            </div>
                            <div className="rjjdets">
                                <h6 className='rj_h6'>Digital Marketer</h6>
                            <div className="rj_p">
                                <p>Creative Agency</p>
                                <p className='rjp_p'>
                                    <FaLocationDot/> Athens, Greece
                                </p>
                                <p className='rjp_p'>$3500-$4000</p>
                            </div>
                            </div>
                            <div className="rjjcat">
                                <div className="rj_button">Full Time</div>
                                <p className='rjc_p'>7 hours ago</p>
                            </div>
                        </div>
                        <div className="rjjobs" onClick={loginAlert}>
                            <div className="rjj_img">
                                <img src="/img/icon/job-list2.png" alt="" />
                            </div>
                            <div className="rjjdets">
                                <h6 className='rj_h6'>Digital Marketer</h6>
                            <div className="rj_p">
                                <p>Creative Agency</p>
                                <p className='rjp_p'>
                                    <FaLocationDot/> Athens, Greece
                                </p>
                                <p className='rjp_p'>$3500-$4000</p>
                            </div>
                            </div>
                            <div className="rjjcat">
                                <div className="rj_button">Full Time</div>
                                <p className='rjc_p'>7 hours ago</p>
                            </div>
                        </div>
                        <div className="rjjobs" onClick={loginAlert}>
                            <div className="rjj_img">
                                <img src="/img/icon/job-list3.png" alt="" />
                            </div>
                            <div className="rjjdets">
                                <h6 className='rj_h6'>Digital Marketer</h6>
                            <div className="rj_p">
                                <p>Creative Agency</p>
                                <p className='rjp_p'>
                                    <FaLocationDot/> Athens, Greece
                                </p>
                                <p className='rjp_p'>$3500-$4000</p>
                            </div>
                            </div>
                            <div className="rjjcat">
                                <div className="rj_button">Full Time</div>
                                <p className='rjc_p'>7 hours ago</p>
                            </div>
                        </div>
                        <div className="rjjobs" onClick={loginAlert}>
                            <div className="rjj_img">
                                <img src="/img/icon/job-list4.png" alt="" />
                            </div>
                            <div className="rjjdets">
                                <h6 className='rj_h6'>Digital Marketer</h6>
                            <div className="rj_p">
                                <p>Creative Agency</p>
                                <p className='rjp_p'>
                                    <FaLocationDot/> Athens, Greece
                                </p>
                                <p className='rjp_p'>$3500-$4000</p>
                            </div>
                            </div>
                            <div className="rjjcat">
                                <div className="rj_button">Full Time</div>
                                <p className='rjc_p'>7 hours ago</p>
                            </div>
                        </div>
                    </div>
                    </div>
        </>
    )
}

export default RecentJob
