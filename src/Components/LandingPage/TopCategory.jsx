import React from 'react';
import { TbDeviceImacCode } from "react-icons/tb";
import { TbDeviceMobileCog } from "react-icons/tb";
import {FaChartBar,FaRegLightbulb } from 'react-icons/fa';
import { MdConstruction } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";

const TopCategory = () => {
  return (
    <>
    <div className="top_category">
      <div className="tc_head">
        <p className='tc_p'>FEATURED TOURS PACKAGES</p>
        <h3 className='tc_h2'>Browse Top Categories</h3>
      </div>
      <div className="tc_body mt-4">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 d-flex justify-content-evenly flex-wrap">
          <div className="tc_box">
            <div className="tcBox_img tcBoxImg_icon">
              <FaRegLightbulb/>
            </div>
            <div className="tcBox_content">
            <p className='tcb_p'>Design & Creative</p>
            <p className='tcb_p pink_color'>(658)</p>
            </div>
          </div>
          <div className="tc_box">
            <div className="tcBox_img"><TbDeviceImacCode className='tcBoxImg_icon'/></div>
            <div className="tcBox_content">
              <p className='tcb_p'>Design & Development</p>
              <p className='tcb_p pink_color'>(653)</p>
            </div>
          </div>
          <div className="tc_box">
            <div className="tcBox_img tcBoxImg_icon">
              <FaChartBar/>
            </div>
            <div className="tcBox_content">
            <p className='tcb_p'>Sales & Marketing</p>
            <p className='tcb_p pink_color'>(653)</p>
            </div>
          </div>
          <div className="tc_box">
            <div className="tcBox_img tcBoxImg_icon">
            <TbDeviceMobileCog />
            </div>
            <div className="tcBox_content">
            <p className='tcb_p'>Mobile Applications</p>
            <p className='tcb_p pink_color'>(653)</p>
            </div>
          </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 d-flex justify-content-evenly flex-wrap">
          <div className="tc_box">
            <div className="tcBox_img tcBoxImg_icon">
            <MdConstruction />
            </div>
            <div className="tcBox_content">
            <p className='tcb_p'>Construction</p>
            <p className='tcb_p pink_color'>(653)</p>
            </div>
          </div>
          <div className="tc_box">
            <div className="tcBox_img tcBoxImg_icon">
            <IoHardwareChipOutline />

            </div>
            <div className="tcBox_content">
            <p className='tcb_p'>Information Technology</p>
            <p className='tcb_p pink_color'>(653)</p>
            </div>
          </div>
          <div className="tc_box">
            <div className="tcBox_img tcBoxImg_icon">
            <FaRegBuilding />
            </div>
            <div className="tcBox_content">
            <p className='tcb_p'>Real State</p>
            <p className='tcb_p pink_color'>(653)</p>
            </div>
          </div>
          <div className="tc_box">
            <div className="tcBox_img tcBoxImg_icon">
            <IoNewspaperOutline />
            </div>
            <div className="tcBox_content">
            <p className='tcb_p'>Content Writer</p>
            <p className='tcb_p pink_color'>(653)</p>
            </div>
          </div>
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="tcbtn_cover">
        <div className="tc_button">BROWSE ALL SECTORS</div>
        </div>
      </div>
      </div>
    </>
  )
}

export default TopCategory
