exports.onInitialClientRender = () => {
  const $ = window.jQuery;
  const gsap = window.gsap;
  // const ScrollTrigger = window.ScrollTrigger;

  // Dev Utils
  // TODO: Move to a utils.js or similar
  // ==============================

  var tl = gsap.timeline({ repeat: 0 });

  var $nav = $('#navigation .burger-and-fries');

  tl.to(".loading", {
    opacity: 0,
    duration: 0.5,
  });

  tl.set(".burger-and-fries-container", {
    opacity: 1,
  });

  tl.from("#navigation .logo-in-navigation", {
    y: -20,
    opacity: 0,
    duration: 0.2,
    delay: 0.3,
  });

  if(!$nav.hasClass('loaded')) {
    tl.from("#navigation .burger-and-fries", {
      y: -20,
      opacity: 0,
      duration: 0.3,
      delay: 0.3,
    });

    tl.from("#navigation .menu-on-large .main-nav a", {
      x: 50,
      y: -40,
      opacity: 0,
      duration: 0.2,
      stagger: {
        amount: 0.5,
      },
    });

    $nav.addClass('loaded');
  }
  tl.from(".down-arrow", {
    opacity: 0,
    y: -10,
    duration: 0.5,
  });

  // Vimeo
  // TODO: Move to a vimeo.js or similar
  // I can't get these scripts works.
  // ==============================

  // $(".playVideoOnHover").each(function () {
  //   var iframe = $(this);
  //   var player = new Vimeo.Player(iframe);
  //   player.pause();
  // });

  // $(".playVideoOnHover").hover(
  //   function () {
  //     var iframe = $(this);
  //     var player = new Vimeo.Player(iframe);
  //     player.play();
  //   },
  //   function () {
  //     var iframe = $(this);
  //     var player = new Vimeo.Player(iframe);
  //     player.pause();
  //   }
  // );

  // The debounce function receives our function as a parameter
  const debounce = (fn) => {
    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;

    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) {
        cancelAnimationFrame(frame);
      }

      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        // Call our function and pass any params we received
        fn(...params);
      });
    };
  };

  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  };

  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener("scroll", debounce(storeScroll), {
    passive: true,
  });

  // Update scroll position for first time
  storeScroll();
};
