import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <div className="footer_wrapper">
        <div className="footer">
          <div className="foot" style={{marginTop:"5px"}}>
            <div className="foot_h6">ABOUT US</div>
            <p className='foot_p'>Heaven frucvitful does't cover lesser dsays appear creeping seasons to behold</p>

            <div className="footlogo footlogo_img">
              <img src="/img/logo/logo2_footer.png" alt="" />
            </div>
          </div>
          <div className="foot">
            <div className="foot_h6">CONTACT INFO</div>
            <p className='foot_p'>Address: Lucknow,UP</p>
            <p className='foot_p'>Phone: 6299708530</p>
            <p className='foot_p'>Email: sandeep841433@gmail.com</p>

            <h6 className='footlogo'>5000+ <abbr style={{ fontWeight: 400 }}>Talented Hunters</abbr></h6>
          </div>
          <div className="foot">
            <div className="foot_h6">IMPORTANT LINKS</div>
            <a className='foot_a'><p className='foot_p1'>View Project</p></a>
            <a className='foot_a'><p className='foot_p1'>Contact Us</p></a>
            <a className='foot_a'><p className='foot_p1'>Testimonial</p></a>
            <a className='foot_a'><p className='foot_p1'>Properties</p></a>
            <a className='foot_a'><p className='foot_p1'>Support</p></a>

            <h6 className='footlogo'>451 <abbr style={{ fontWeight: 400 }}>Talented Hunters</abbr></h6>
          </div>
          <div className="foot">
            <div className="foot_h6">NEWSLATTER</div>
            <p className='foot_p'>Heaven frucvitful does't cover lesser dsays appear creeping seasons.</p>
            <div className="send">
              <input type="email" placeholder='Email Address' /><button><FaPaperPlane style={{ color: "white" }} /></button></div>

            <h6 className='footlogo'>482 <abbr style={{ fontWeight: 400 }}>Talented Hunters</abbr></h6>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer
