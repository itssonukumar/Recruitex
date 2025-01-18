import React from 'react'

const News = () => {
  return (
    <>
      <div className="news">
        <div className="news_head">
            <p className="tc_p">OUR LATEST BLOG</p>
            <h3 className='tc_h2'>Our recent news</h3>
        </div>
        <div className="news_body">
            <div className="news_item">
                <div className="news_img1"></div>
                <div className="news_text">
                    <p className='news_p1'>| Properties</p>
                    <p className="news_p2">
                    Footprints in Time is the perfect house in Kurashiki
                </p>
                <a href="#" className='news_a'>READ MORE &gt;&gt;</a>
                </div>
            </div>
            <div className="news_item">
            <div className="news_img2">
            </div>
                <div className="news_text">
                <p className='news_p1'>| Properties</p>
                <p className="news_p2">
                    Footprints in Time is the perfect house in Kurashiki
                </p>
                <a href="#" className='news_a'>READ MORE &gt;&gt;</a>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default News
