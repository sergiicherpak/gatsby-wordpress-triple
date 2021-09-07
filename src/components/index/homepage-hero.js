import React from "react";
import PhoneBreakout from "./phone-breakout";

export default function HomePageHero(props) {
  return (
    <div className='hero homepage-hero'>
      <div className='swiper-container'>
        <div className='swiper-wrapper'>
          <div className='swiper-slide slide-content-container slide-1'>
            <div className='flex items-center slider-static'>
              <PhoneBreakout />
            </div>
            <div className='hero-copy-cta-container'>
              <a className='cta cta-style-3' data-micromodal-trigger='modal-1' href="#video-modal">
                <span>See our ads in action</span>
                <img alt="triangle inside circle" src='/images/triangle-inside-circle.svg' />
              </a>
              <div className='copy mt3'>
                <h1>
                  Reinventing ad placement, <br /> one medium at a time
                </h1>
                <p className='mt3'>
                  Since pioneering Native advertising in 2012, we have built 4
                  product lines across 13 different formats, each with elements
                  of customization not found anywhere else in the industry.
                </p>
              </div>
            </div>
          </div>
          <div className='swiper-slide slide-content-container slide-2'>
            <div className='flex items-center slider-static inner-slide'>
              <div className='image-container'>
                <img
                  src='/images/slides/Website-HeroCarousel-2-WGB.png'
                  alt='Product Hero Comp'
                />
              </div>
            </div>
            <div className='hero-copy-cta-container'>
              <a
                className='cta cta-style-3'
                href='https://triplelift.com/go/we-go-beyond'>
                <span>Learn more</span>
                <img alt='' src='/images/arrow-right.svg' />
              </a>
              <div className='copy mt3'>
                <h1>
                  Good enough... <br /> Is Never Enough
                </h1>
                <p className='mt3'>We drive the success of every impression</p>
              </div>
            </div>
          </div>

          <div className='swiper-slide slide-content-container slide-3'>
            <div className='flex items-center slider-static inner-slide'>
              <div className='image-container'>
                <img
                  src='/images/slides/TL_Home-Carousel-3-VIDEO_V01.png'
                  alt='Product Hero Comp'
                />
              </div>
            </div>
            <div className='hero-copy-cta-container'>
              <a
                className='cta cta-style-3'
                href='/video/'>
                <span>Learn more</span>
                <img alt='icon' src='/images/arrow-right.svg' />
              </a>
              <div className='copy mt3'>
                <h1>
                  TripleLift is a Top 3 Programmatic Video Provider
                </h1>
                <p className='mt3'>600B+ available impressions per month. Direct inventory from 2,000+ publishers</p>
              </div>
            </div>
          </div>
        </div>
        <div className='swiper-pagination' />
        <div className='arrows'>
          <div className='slider-arrow left'>
            <img alt='' src='/images/arrow-left.svg' />
          </div>
          <div className='slider-arrow right'>
            <img alt='' src='/images/arrow-right.svg' />
          </div>
        </div>
      </div>
      <div className='modal micromodal-slide' id='modal-1' aria-hidden='true'>
        <div className='modal__overlay' tabIndex={-1} data-micromodal-close>
          <div
            className='modal__container'
            role='dialog'
            aria-modal='true'
            aria-labelledby='modal-1-title'>
            <button
              className='modal__close'
              aria-label='Close modal'
              data-micromodal-close
            />
            <main className='modal__content' id='modal-1-content'>
              <div className='embed-container'>
                <iframe
                  title="popup video"
                  className='video-in-modal'
                  src='https://player.vimeo.com/video/489101689?background=1'
                  width={640}
                  height={360}
                  frameBorder={0}
                  allow='autoplay; fullscreen'
                  allowFullScreen={true}
                />
              </div>
            </main>
            <footer className='modal__footer' />
          </div>
        </div>
      </div>
    </div>
  );
};
