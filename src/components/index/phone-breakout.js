import React from "react";

export default function PhoneBreakOut() {
  return (
    <div className='phone-breakout'>
      <img
        className="pb-1"
        alt='phone layer'
        src='/images/phone-breakout/Home_Hero_PhoneLayersPhone@3x.png'
      />
      <img
        className="pb-2"
        alt='phone layer'
        src='/images/phone-breakout/Home_Hero_PhoneLayersCodeall@3x.png'
      />
      <img
        className="pb-3"
        alt='phone layer'
        src='/images/phone-breakout/Home_Hero_PhoneLayersPublisher@3x_jrV01.png'
      />
      <img
        className="pb-4"
        alt='phone layer'
        src='/images/phone-breakout/Home_Hero_PhoneLayersLinesall@3x.png'
      />
      <img
        className="pb-5"
        alt='phone layer'
        src='/images/phone-breakout/Home_Hero_PhoneLayersNotessall@3x.png'
      />
      <div className='video-container'>
        <iframe
          title='phone-breakout'
          allow='autoplay; fullscreen'
          allowFullScreen=''
          className='video'
          frameBorder='0'
          height='360'
          src='https://player.vimeo.com/video/528142359?background=1&amp;amp;autoplay=1'
          width='640'
        />
      </div>
    </div>
  );
}
