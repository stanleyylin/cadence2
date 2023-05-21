import React from 'react'
import InfiniteScroller from '../../components/InfiniteScroller.tsx';
import './carousel.css';
import slide1 from '../../res/slide1.png';
import slide2 from '../../res/slide2.png';
import slide3 from '../../res/slide3.png';
import slide4 from '../../res/slide4.png';
import slide5 from '../../res/slide5.png';

const Carousel = () => {
  return (
    <div className='features'>
      <InfiniteScroller speed="40" direction="right" className='dance'>
        <div className="contentBlock">
          <img src={slide1} className="scroller-photo"/>
          <p className='feature'>
            ROYALTY FREE MUSIC APP.
          </p>
        </div>
        <div className="contentBlock">
          <img src={slide2} className="scroller-photo"/>
          <p className='feature'>
            EASY DIGITAL LICENSING FOR COMMERCIAL USE.
          </p>
        </div>
        <div className="contentBlock">
          <img src={slide3} className="scroller-photo"/>
          <p className='feature'>
            TRANSPARENT AND SECURE TRANSACTIONS.
          </p>
        </div>
        <div className="contentBlock">
          <img src={slide4} className="scroller-photo"/>
          <p className='feature'>
            MONETIZE YOUR WORK DIRECTLY WITH SCALABLE PAYMENTS.
          </p>
        </div>
        <div className="contentBlock">
          <img src={slide5} className="scroller-photo"/>
          <p className='feature'>
            SEAMLESSLY SEARCH & DISCOVER NEW AND FAVOURITE ARTISTS.
          </p>
        </div>
      </InfiniteScroller>
    </div>
  )
}

export default Carousel
