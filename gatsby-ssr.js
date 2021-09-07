const React = require("react");

exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    <link
      rel='stylesheet'
      href='https://unpkg.com/swiper/swiper-bundle.min.css'
    />,
    <link
      rel='stylesheet'
      href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
    />,
    <link
      rel='stylesheet'
      href='https://unpkg.com/aos@next/dist/aos.css'
    />
  ]);

  setHeadComponents([
    <script src='https://code.jquery.com/jquery-3.3.1.min.js'></script>,
    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js'></script>,
    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js'></script>,
    <script src='https://unpkg.com/micromodal/dist/micromodal.min.js'></script>,
    <script src='https://unpkg.com/swiper/swiper-bundle.min.js'></script>,
    <script src='https://cdn.jsdelivr.net/npm/@vimeo/player@2.15.0/dist/player.min.js'></script>,
    <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'></script>,
    <script src='https://unpkg.com/aos@next/dist/aos.js'></script>,
  ]);
};
