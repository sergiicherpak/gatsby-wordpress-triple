import React from "react";

export default function ExploreOurGallery(props) {
  return (
    <div className='explore-our-gallery-container'>
      <div className='explore-our-gallery'>
        <div className='animate-border-outer shadow-3' />
        <div className='animate-border-content'>
          <span className='headline white'>
            Explore our creative gallery to find solutions for any objective.
          </span>
          <a className='cta cta-style-2' href="/products">
            <span>Explore formats</span>
            <img alt='arrow right' src='/images/arrow-right.svg' />
          </a>
        </div>
      </div>
    </div>
  );
};
