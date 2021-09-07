import React from "react";
import Layout from "../components/layout";
import HomepageHero from "../components/index/homepage-hero";
import Why from "../components/index/why-triplelift";
import Explore from "../components/index/explore-our-gallery";
import Technology from "../components/index/technology-breakouts";
import WeWorkWith from "../components/index/we-work-with";
import Seo from "../components/seo";


class IndexPage extends React.Component {
  componentDidMount () {
    const $ = window.jQuery;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    const Swiper = window.Swiper;
    // const MicroModal = window.MicroModal;
    if (document.getElementById("homepageJSIndicator")) {
      gsap.config({ nullTargetWarn: false });

      // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
      window.requestAnimationFrame(function () {
        var tl = gsap.timeline({ repeat: 0 });

        tl.from(".homepage", {
          autoAlpha: 0,
        });

        tl.from(
          ".homepage .phone-breakout",
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
          },
          "phone-breakout-slide-up"
        );

        tl.from(
          ".homepage .phone-breakout .pb-1",
          {
            x: -10,
            duration: 0.4,
          },
          "phone-breakout"
        );

        tl.from(
          ".homepage .phone-breakout .pb-2",
          {
            opacity: 0,
            x: -10,
            duration: 0.4,
          },
          "phone-breakout"
        );

        tl.from(
          ".homepage .phone-breakout .pb-3",
          {
            scale: 0.95,
            x: 15,
            duration: 0.4,
          },
          "phone-breakout"
        );

        tl.from(
          ".homepage .phone-breakout .pb-4",
          {
            scale: 0.9,
            y: 10,
            x: 30,
            duration: 0.4,
          },
          "phone-breakout"
        );

        tl.from(
          ".homepage .phone-breakout .pb-5",
          {
            opacity: 0,
            scale: 0.9,
            y: 10,
            x: 30,
            duration: 0.4,
          },
          "phone-breakout"
        );

        tl.from(
          ".homepage .phone-breakout .video",
          {
            opacity: 0,
            scale: 0.95,
            y: 5,
            x: 5,
            duration: 1,
          },
          "phone-breakout-2"
        );

        tl.from(
          ".homepage-hero .copy *",
          {
            opacity: 0,
            y: 10,
            duration: 0.3,
            stagger: 0.1,
          },
          "a"
        );

        tl.from(
          ".homepage-hero .cta",
          {
            opacity: 0,
            y: -10,
          },
          "a"
        );

        tl.from(
          ".homepage .slider-arrow.left",
          {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            x: 50,
          },
          "a"
        );

        tl.from(
          ".homepage .slider-arrow.right",
          {
            opacity: 0,
            scale: 0,
            duration: 0.3,
            x: -50,
          },
          "a"
        );

        tl.from(
          ".homepage-hero .swiper-pagination",
          {
            opacity: 0,
            y: -10,
          },
          "a"
        );

        const parallaxHomePageHero2 = gsap.timeline({
          scrollTrigger: {
            trigger: ".homepage-hero",
            start: "top top",
            end: "100% center",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });

        ScrollTrigger.matchMedia({
          all: function () {
            parallaxHomePageHero2.to(
              ".homepage-hero .swiper-pagination",
              {
                opacity: 0,
                duration: 1,
                y: -20,
              },
              "a"
            );
            parallaxHomePageHero2.to(
              ".homepage-hero .cta",
              {
                opacity: 0,
                duration: 1,
                y: -20,
              },
              "a"
            );
            parallaxHomePageHero2.to(
              ".homepage-hero .arrows",
              {
                opacity: 0,
                duration: 1,
                y: -20,
              },
              "a"
            );
            parallaxHomePageHero2.to(
              ".homepage-hero .inner-slide",
              {
                opacity: 0,
                duration: 1,
                y: -20,
              },
              "a"
            );
          },

          "(min-width: 1024px)": function () {
            // const parallaxHomePageHero = gsap.timeline({
            //   scrollTrigger: {
            //     trigger: ".homepage-hero",
            //     pin: ".swiper-container",
            //     start: "top top",
            //     end: "100% center",
            //     scrub: true,
            //   },
            // });

            const parallaxHomePageHero2Large = gsap.timeline({
              scrollTrigger: {
                trigger: ".homepage-hero",
                start: "top top",
                end: "100% center",
                scrub: true,
              },
            });

            parallaxHomePageHero2Large.to(
              ".homepage-hero .copy > *",
              {
                opacity: 0,
                duration: 1,
                y: -20,
                stagger: 0.3,
              },
              "a"
            );

            const parallaxHomePageHero3Large = gsap.timeline({
              scrollTrigger: {
                trigger: ".homepage-hero",
                start: "20% top",
                end: "100% center",
                scrub: true,
              },
            });

            parallaxHomePageHero3Large.to(
              ".homepage-hero .phone-breakout > *",
              {
                y: -100,
                opacity: 0,
                duration: 5,
                stagger: -0.5,
              },
              "b"
            );
          },
        });

        const whyTripleLiftParallax = gsap.timeline({
          scrollTrigger: {
            trigger: ".why-triplelift",
            scrub: true,
            start: "-25% center",
            end: "top center",
            toggleActions: "play",
          },
        });

        whyTripleLiftParallax.from(".why-triplelift h2", {
          opacity: 0,
          duration: 0.5,
          y: 20,
        });

        whyTripleLiftParallax.from(".why-triplelift-section", {
          opacity: 0,
          duration: 1,
          x: -10,
          stagger: 0.5,
        });

        const exploreGalleryParallax = gsap.timeline({
          scrollTrigger: {
            trigger: ".explore-our-gallery-container",
            scrub: true,
            end: "10%",
            toggleActions: "play",
          },
        });

        exploreGalleryParallax.to(
          ".why-triplelift-section",
          {
            duration: 1,
            y: -20,
          },
          "exploreGallery"
        );

        exploreGalleryParallax.from(
          ".explore-our-gallery-container > *",
          {
            opacity: 0.5,
            duration: 0.6,
          },
          "exploreGallery"
        );

        const technologyBreakoutsParralax = gsap.timeline({
          scrollTrigger: {
            trigger: ".technology-breakouts",
            start: "-50% center",
            end: "40% center",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });

        technologyBreakoutsParralax.from(
          ".breakout-container.on-large .image-container .bc-1",
          {
            opacity: 0.5,
            y: 80,
            duration: 1,
          },
          "abc"
        );

        technologyBreakoutsParralax.from(
          ".breakout-container.on-large .image-container .bc-2",
          {
            opacity: 0.5,
            y: 60,
            duration: 1,
          },
          "abc"
        );

        technologyBreakoutsParralax.from(
          ".breakout-container.on-large .video-container .video",
          {
            opacity: 0.5,
            y: 40,
            duration: 1,
          },
          "abc"
        );

        const weWorkWithParallax = gsap.timeline({
          scrollTrigger: {
            trigger: ".we-work-with",
            start: "-5% center",
            end: "40% center",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });

        weWorkWithParallax.from(
          ".we-work-with h3",
          {
            opacity: 0,
            y: 40,
            duration: 0.3,
          },
          "weWorkWith"
        );

        weWorkWithParallax.to(
          ".explore-our-gallery-container ",
          {
            y: -100,
            duration: 0.6,
          },
          "weWorkWith"
        );

        weWorkWithParallax.from(
          ".we-work-with .logo-grid",
          {
            opacity: 0,
            y: 20,
            duration: 0.08,
            stagger: 0.03,
          },
          "weWorkWith",
          "-=1.2"
        );

        let headlines = gsap.utils.toArray(".we-work-with h4 .gradient-border");

        headlines.forEach((item) => {
          const weWorkWithHeadlineBorder = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          });

          weWorkWithHeadlineBorder.from(item, {
            x: "-100%",
            duration: 0.2,
          });
        });

        // section transitions

        const whyTLGradientTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".why-triplelift",
            start: "-25% center",
            end: "200% center",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });

        whyTLGradientTL.to(
          ".homepage-section-transition-container .section-transition.transition2",
          {
            opacity: 1,
            duration: 1,
          },
          "why-triplelift"
        );

        const moveSectionBackground1 = gsap.timeline({
          scrollTrigger: {
            trigger: ".why-triplelift",
            start: "top center",
            end: "300% bottom",
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });

        moveSectionBackground1.to(
          ".homepage-section-transition-container .section-transition.transition2",
          {
            backgroundPosition: "300% 0%",
          },
          "explore"
        );

        ScrollTrigger.refresh();
      });
    }

    // TODO: check if swiper for global
    // Instantiate swipers
    const swiper = new Swiper(".swiper-container", {
      speed: 900,
      touchMoveStopPropagation: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".slider-arrow.right",
        prevEl: ".slider-arrow.left",
      },
      autoplay: {
        delay: 9000,
        disableOnInteraction: true,
      },
    });

    $("body").click(function () {
      swiper.autoplay.stop();
    });

    $(window).scroll(function () {
      swiper.autoplay.stop();
    });
  }
  render () {
    return (
      <Layout>
        <Seo
          title="TripleLift - Programmatic Advertising Platform Reinvented"
          description="Technology at the intersection of creative and media, driving the next generation of programmatic advertising from desktop to television."
          />
        <div id="homepageJSIndicator"></div>
        <div className="homepage">
          <div className="homepage-section-transition-container section-transition-container">
            <div className="section-transition transition1" />
            <div className="section-transition transition2" />
            <div className="section-transition transition3" />
          </div>
          <HomepageHero />
          <Why />
          <Explore />
          <Technology />
          <WeWorkWith />
        </div>
      </Layout>
    );
  }
};

export default IndexPage;
