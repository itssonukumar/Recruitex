import React from 'react';
import { FaHandshake } from 'react-icons/fa6';
import { TbReportSearch } from "react-icons/tb";
import { VscGitStashApply } from "react-icons/vsc";



const How = () => {
  return (
    <>
      <div className="how">
        <p className='tc_p m-0 mb-2'>APPLY PROCESS</p>
        <h2 className='how_h2 m-0'>How it works</h2>
        <div className="how_boxes">
            <div className="how_box">
                <div className="howbox_img">
                <TbReportSearch />
                </div>
                <div className="howbox_content">
                    <h6 className='hbc_h6'>1. Search a job</h6>
                    <p className='hbc_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore sint.</p>
                </div>
            </div>
            <div className="how_box">
                <div className="howbox_img">
                <VscGitStashApply />

                </div>
                <div className="howbox_content">
                    <h6 className='hbc_h6'>2. Apply for job</h6>
                    <p className='hbc_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore sint.</p>
                </div>
            </div>
            <div className="how_box">
                <div className="howbox_img">
                <FaHandshake/>
                </div>
                <div className="howbox_content">
                    <h6 className='hbc_h6'>3. Get your job</h6>
                    <p className='hbc_p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae dolore sint.</p>
                </div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default How
