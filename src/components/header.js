import React from "react";

import Menu from "./menu";

class Header extends React.Component {
  componentDidMount () {
    const gsap = window.gsap;
    const MicroModal = window.MicroModal;
    const $ = window.jQuery;
    

    MicroModal.init({
      openClass: "is-open",
      disableScroll: true,
      disableFocus: false,
      awaitOpenAnimation: false,
      awaitCloseAnimation: true,
    });

    // Navigation
    // TODO: Move to navigation.js or similar
    // ==============================
    $(".js-hamburger").click(function () {
      $(this).toggleClass("is-active");
      $(".fries").toggleClass("show");
      $("body").toggleClass("modal-open");
      $("body").toggleClass("menu-open");
    });

    let videoBordersToAnimate = gsap.utils.toArray(".animate-video-border-outer");

    videoBordersToAnimate.forEach((item) => {
      const borderScrollItem = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          scrub: true,
          start: "20% 80%",
          end: "50% 10%",
          toggleActions: "play reverse play reverse",
        },
      });

      borderScrollItem.from(
        item,
        {
          x: "-100%",
          duration: 0.2,
        },
        "loadin"
      );

      borderScrollItem.to(
        item,
        {
          opacity: 1,
          duration: 0.2,
        },
        "loadin"
      );

      borderScrollItem.to(item, {
        opacity: 0,
        x: "100%",
        duration: 0.4,
        delay: 0.5,
      });
    });

    let ctaBordersToAnimate = gsap.utils.toArray(".animate-border-outer");

    ctaBordersToAnimate.forEach((item) => {
      const borderScrollItem = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "10%, 70%",
          end: "90% 10%",
          scrub: true,
          toggleActions: "play pause play pause",
        },
      });

      borderScrollItem.from(
        item,
        {
          x: "-100%",
          duration: 0.2,
        },
        "loadin"
      );

      borderScrollItem.to(
        item,
        {
          opacity: 1,
          duration: 0.2,
        },
        "loadin"
      );

      borderScrollItem.to(item, {
        opacity: 0,
        x: "100%",
        duration: 0.4,
        delay: 0.5,
      });
    });

    let texturesToAnimateUp = gsap.utils.toArray(".vertical-texture-animation");

    texturesToAnimateUp.forEach((item) => {
      const textureScrollItem = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          scrub: true,
          end: "100%",
          toggleActions: "play reverse play reverse",
        },
      });

      textureScrollItem.from(item, {
        backgroundPosition: "0px 200px",
        duration: 6,
        stagger: 1,
      });
    });
  }
  render () {
    return (
      <>
        <div className="fries menu-hide">
          <div className="menu-on-small">
            <Menu />
          </div>
        </div>
        <div className="sticky-header">
          <div className="burger-and-fries-container" id="navigation">
            <div className="header-vapor-background"></div>
            {/* <a className="logo-in-navigation logo-lockup relative" href="https://triplelift.com"> */}
            <a
              className="logo-in-navigation logo-lockup relative"
              href="https://www.triplelift.com"
            >
              <img
                alt="logomark-gradient"
                className="lift-icon"
                src="/images/logomark-gradient.svg"
              />
              <img
                alt="wordmark-white"
                className="wordmark"
                src="/images/wordmark-white.svg"
              />
            </a>
            <div className="burger-and-fries">
              <button
                className="hamburger hamburger--collapse js-hamburger"
                type="button"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <div className="menu-on-large">
                <Menu />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Header
