import React, { useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  LeftArrow,
  RightArrow,
  DeviceSvg,
  FacbookIcon,
  InstagramIcon,
} from "./icons";

const Body = ({ editor, slides, websiteUrl, facebookUrl, instagramUrl }) => {
  useEffect(() => {
    const Swiper = window.Swiper;
    new Swiper(".swiper-container", {
      speed: 900,
      touchMoveStopPropagation: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      navigation: {
        nextEl: ".slider-arrow.right",
        prevEl: ".slider-arrow.left",
      },
      autoplay: {
        delay: 9000,
        disableOnInteraction: true,
      },
    });
  }, []);

  return (
    <div className="entry-content">
      <div className="wp-block-columns alignwide">
        <div className="wp-block-column slds-var-p-around_medium">
          <span
            dangerouslySetInnerHTML={{ __html: editor }}
            className="editor"
          ></span>
          <ul class="wp-block-social-links alignleft is-style-logos-only">
            {instagramUrl && (
              <li class="wp-social-link wp-social-link-instagram">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </li>
            )}
            {facebookUrl && (
              <li class="wp-social-link wp-social-link-facebook">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="nofollow noreferrer"
                  aria-label="Facebook"
                >
                  <FacbookIcon />
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="wp-block-column slds-var-p-around_medium">
          {" "}
          <div className="swiper-container">
            <div class="swiper-pagination" />

            <div className="swiper-wrapper">
              {slides.map((slide, index) => {
                const imageData =
                  slide.publisherImage.localFile.childImageSharp
                    .gatsbyImageData;
                return (
                  <div
                    className={`swiper-slide slide-content-container slide-${index}`}
                  >
                    <div className="device-cover">
                      <DeviceSvg />
                      <div className="device-container">
                        <div className="media-container">
                          <GatsbyImage image={imageData} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="arrows">
              <div className="slider-arrow left">
                <LeftArrow />
              </div>
              <div className="slider-arrow right">
                <RightArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
