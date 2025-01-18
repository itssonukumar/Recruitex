import React from 'react';
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 hero_section">
          <div className="row">
            <div className="hero_txt_section">
              <div className="hero_content">
                <h1 className='hero_txt'><Typewriter
                  options={{
                    strings: ['Find the most exciting startup jobs'],
                    autoStart: true,
                    loop: true,
                  }}
                /></h1>
                <div className="hero_find">
                  <input type="text" className='hero_input' placeholder='Job Title or Keyword' />
                  <select className='hero_input' style={{ borderRight: "3px solid white" }}>
                    <option>Location BD</option>
                  </select>
                  <div className="btn btn-danger hero_button">Find Job</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
