import React from "react";

export default function TechnologyBreakouts(props) {
  return (
    <div className='technology-breakouts'>
      <div className='breakout-container on-small middle'>
        <div className='image-container'>
          <img
            alt='phone container'
            src='/images/technology-homepage/middle/TL_3Phones_MIDDLE_Phone_jrV03.png'
          />
          <img
            alt='phone container'
            src='/images/technology-homepage/middle/TL_3Phones_MIDDLE_Publisher_jrV03.png'
          />
        </div>
        <div className='video-container'>
          <iframe
            title="Hero Video"
            className='video'
            src='https://player.vimeo.com/video/527949240?background=1&amp;autoplay=1'
            width={358}
            height={480}
            frameBorder={0}
            allow='autoplay; fullscreen'
            allowFullScreen
          />
          <a href="/products#_native-cinemagraph">
          </a>
        </div>
      </div>
      <div className='breakout-container on-large'>
        <div className='image-container'>
          <img
            className='bc-1'
            alt='phone layer'
            src='/images/technology-homepage/all/TL_3Phones_SingleImage_Phones_jrV02.png'
          />
          <img
            className='bc-2'
            alt='phone layer'
            src='/images/technology-homepage/all/phones_singleImage_Publisher_jrV02.png'
          />
        </div>
        <div className='video-container left'>
          <iframe
            title="Video left"
            className='video playVideoOnHover'
            src='https://player.vimeo.com/video/528140775?background=1&amp;autoplay=1'
            width={358}
            height={480}
            frameBorder={0}
            allow='autoplay; fullscreen'
            allowFullScreen
          />
          <a href="/products#_native-carousel">
          </a>
        </div>
        <div className='video-container middle'>
          <iframe
            title="Video middle"
            className='video'
            src='https://player.vimeo.com/video/527949240?background=1&amp;autoplay=1'
            width={358}
            height={480}
            frameBorder={0}
            allow='autoplay; fullscreen'
            allowFullScreen
          />
          <a href="/products#_native-cinemagraph">
          </a>
        </div>
        <div className='video-container right'>
          <iframe
            title="Video right"
            className='video playVideoOnHover'
            src='https://player.vimeo.com/video/528607058?background=1&amp;autoplay=1'
            width={358}
            height={480}
            frameBorder={0}
            allow='autoplay; fullscreen'
            allowFullScreen
          />
          <a href="/products#_video-brandedvideo">
          </a>
        </div>
      </div>
    </div>
  );
};
