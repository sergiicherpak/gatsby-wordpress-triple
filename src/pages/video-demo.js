import React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";

import "../styles/video.css";

class Demo extends React.Component {
  componentDidMount () {
    const $ = window.jQuery;
    // const carousel = window.bootstrap.Carousel;
    const aos = window.AOS;
    var CURRENT_BRAND = 1;
    $(document).ready(function() {
      aos.init();

      var carousel = $('.carousel');
      var btn1 = $(".cib_ott");
      var btn2 = $(".cib_instream");
      var btnDo = $(".cib_do");
      var btnSs = $(".cib_ss");
      var btnBi = $(".cib_bi");
      carousel.carousel({
        interval: false,
      });

      carousel.on('slide.bs.carousel', function onSlide(ev) {
        var id = ev.to;
        if (id === 1) {
          $("#divToggle").attr('style', 'display:flex !important');
        } else {
          $("#divToggle").attr('style', 'display:none !important');
        }
        if (id === 2) {
          $("#divToggleInShow").attr('style', 'display:flex !important');
        } else {
          $("#divToggleInShow").attr('style', 'display:none !important');
        }
      });

      btn1.click(function() {
        btn1.addClass('active'); //ctv
        btn2.removeClass('active'); //instream
        toggleCTVInStream(true);
      });
      btn2.click(function() {
        btn1.removeClass('active'); //ctv
        btn2.addClass('active'); //instream
        toggleCTVInStream(false);
      });

      btnDo.click(function() {
        btnDo.addClass('active');
        btnSs.removeClass('active');
        btnBi.removeClass('active');
        setInShowVideo('do');
      });

      btnSs.click(function() {
        btnDo.removeClass('active');
        btnSs.addClass('active');
        btnBi.removeClass('active');
        setInShowVideo('ss');
      });

      btnBi.click(function() {
        btnDo.removeClass('active');
        btnSs.removeClass('active');
        btnBi.addClass('active');
        setInShowVideo('bi');
      });

      $('#imgBrand1').click(function() {
        brandClick(1);
      });
      $('#imgBrand2').click(function() {
        brandClick(2);
      });
      $('#imgBrand3').click(function() {
        brandClick(3);
      })
      function enlargeImg(img) {
        img.style.transform = "scale(1.1)";
        img.style.transition =
        "transform 0.25s ease";
      }

      function shrinkImg(img) {
        img.style.transform = "scale(.99)";
        img.style.transition =
        "transform 0.25s ease";
      }


      function brandClick(brand_id) {
        CURRENT_BRAND = brand_id;
        $("#section2").hide();
        $('#progressTimer').width(0);
        document.getElementById("imgBrand" + brand_id).style.backgroundColor = "#009999";
        enlargeImg(document.getElementById("imgBrand" + brand_id));
        switch (brand_id) {
          case 1:
            document.getElementById("imgBrand2").style.backgroundColor = "#888888";
            shrinkImg(document.getElementById("imgBrand2"));
            document.getElementById("imgBrand3").style.backgroundColor = "#888888";
            shrinkImg(document.getElementById("imgBrand3"));
            $("#divToggle").attr('style', 'display:none !important');
            $("#divToggleInShow").attr('style', 'display:none !important');

          break;
          case 2:
            document.getElementById("imgBrand1").style.backgroundColor = "#888888";
            shrinkImg(document.getElementById("imgBrand1"));
            document.getElementById("imgBrand3").style.backgroundColor = "#888888";
            shrinkImg(document.getElementById("imgBrand3"));
            $("#divToggle").attr('style', 'display:none !important');
            $("#divToggleInShow").attr('style', 'display:none !important');
          break;
          case 3:
            document.getElementById("imgBrand1").style.backgroundColor = "#888888";
            shrinkImg(document.getElementById("imgBrand1"));
            document.getElementById("imgBrand2").style.backgroundColor = "#888888";
            shrinkImg(document.getElementById("imgBrand2"));

            $("#divToggle").attr('style', 'display:none !important');
            $("#divToggleInShow").attr('style', 'display:none !important');
          break;
          default:
          break;
        }
        switchVideo(brand_id);

        $("#myRenderer").show();
        $('html, body').animate({
          scrollTop: $("#renderPosition").offset().top - 50
        }, 500);
        $("#txtRender").show();
        $("#divProgress").show();
        var timeout = 2200;
        $('#progressTimer').animate({
          width: '100%',
        }, timeout);
        setTimeout(function() {
          $("#section2").show();
          $("#txtRender").hide();
          $("#divProgress").hide();
        }, timeout);

      }

      function toggleCTVInStream(isCTV) {
        var vidInBreak = "/images/video/In-Break_CTVSpots_Stella.mp4";
        switch (CURRENT_BRAND) {
          case 1:
            vidInBreak = "/images/video/In-Stream_Instream_Stella_web.mp4";
          break;

          case 2:
            vidInBreak = "/images/video/In-Stream_toyota.mp4";
          break;

          case 3:
            vidInBreak = "/images/video/In-Stream_In-Stream_LOreal_web.mp4";
          break;

          default:
          break;
        }
        if (isCTV) {
          switch (CURRENT_BRAND) {
            case 1:
              vidInBreak = "/images/video/In-Break_CTVSpots_Stella.mp4";
            break;

            case 2:
              vidInBreak = "/images/video/In-Break_CTVSpots_Toyota.mp4";
            break;

            case 3:
              vidInBreak = "/images/video/In-Break_CTVSpots_LOreal.mp4";
            break;

            default:
            break;
          }
        }
        $('#laptopVideoPlayer').attr('src', vidInBreak);
        $("#laptopVideoPlayer")[0].load();
      }

      function setInShowVideo(tab) {
        var video = '';
        switch (CURRENT_BRAND) {
          case 1:
            if(tab === 'do') {
              video = '/images/video/10047A-Stella-Artois-Overlay-No-Chill-with-Gil-Stella-v1-4_23_21-FINAL.mp4'
            }
            if(tab === 'ss') {
              video = '/images/video/SS_Make-This-Tonight_Stella-Artois.mp4'
            }
            if(tab === 'bi') {
              video = '/images/video/In-Show_BrandIntegration_Stella_web.mp4'
            }

          break;
          case 2:
            if(tab === 'do') {
              video = '/images/video/10047A_OL_Toyota Mirai_FINAL.mp4'
            }
            if(tab === 'ss') {
              video = '/images/video/In-Show_SplitScreen_Toyota_web.mp4'
            }
            if(tab === 'bi') {
              video = '/images/video/CONFORM__Whistle_Toyota_Mirai_v001.mp4'
            }
          break;
          case 3:
            if(tab === 'do') {
              video = '/images/video/In-Show_DynamicOverlay_LOreal_web.mp4'
            }
            if(tab === 'ss') {
              video = '/images/video/10047A TL Microsite SS_LOreal v2 4_26_21.mp4'
            }
            if(tab === 'bi') {
              video = '/images/video/CONFORM_LOREAL__THIS_IS_US__v006.mp4'
            }
          break;

          default:
          break;
        }

        $('#tvVideoPlayer').attr('src', video);
        $("#tvVideoPlayer")[0].load();
      }

      function switchVideo(brand_id) {
        var vidInFeed = "";
        var vidInBreak = "";
        var vidInShow = "";
        switch (brand_id) {
          case 1:
          vidInFeed = "/images/video/In-Feed_BrandedVideo_Stella_web.mp4";
          vidInBreak = "/images/video/In-Stream_Instream_Stella_web.mp4";
          vidInShow = "/images/video/10047A-Stella-Artois-Overlay-No-Chill-with-Gil-Stella-v1-4_23_21-FINAL.mp4";
          break;

          case 2:
          vidInFeed = "/images/video/In-Feed_BrandedVideo_Toyota_web.mp4";
          vidInBreak = "/images/video/In-Break_CTVSpots_Toyota.mp4";
          vidInShow = "/images/video/In-Show_SplitScreen_Toyota_web.mp4";
          break;

          case 3:
          vidInFeed = "/images/video/In-Feed_BrandedVideo_LOreal_web.mp4";
          vidInBreak = "/images/video/In-Stream_In-Stream_LOreal_web.mp4";
          vidInShow = "/images/video/In-Show_DynamicOverlay_LOreal_web.mp4";
          break;

          default:
          break;
        }
        $('#laptopVideoPlayer').attr('src', vidInBreak);
        $("#laptopVideoPlayer")[0].load();
        $('#mobileVideoPlayer').attr('src', vidInFeed);
        $("#mobileVideoPlayer")[0].load();
        $('#tvVideoPlayer').attr('src', vidInShow);
        $("#tvVideoPlayer")[0].load();

        // Set active ctv video
        btn1.trigger( "click" );

        // Set active for Dynamic Overlay Video
        btnDo.trigger( "click" );
        carousel.carousel(0);
      }
    });

  }
  render () {
    return (
      <Layout>
        <Seo title="Demo Our Video Portfolio" />
        <div className="section1">
          <div className="wel_container">
            <img className="wel_logo" src="/images/video/logo_video_hero_dark_background.png" alt="logo" />
            <div className="wel_txt" data-aos="fade-up">
              <h1>Demo Our Video Portfolio</h1>
              <div className="section-content">
                <p className="mgb-26">
                  As a top 3 programmatic video provider, TripleLift delivers the most effective video advertising experience everywhere audiences consume content:
                </p>
                <p> <span style={{color: "#F47B20"}}>In-Feed</span> creates context and drives performance through our Branded Video product.</p>

                <p>
                  <span style={{color: "#F15C2C"}}> In-Break</span> drives awareness and consideration through both Online In-Stream and CTV formats.
                </p>

                <p>
                  <span style={{color: "#ED79B0"}}>In-Show</span> engages through unique, breakthrough formats being pioneered by TripleLift (currently in beta).
                </p>
                <p  className="mgt-26">
                  Check out how easy it is to run across any or all of our formats with only <span style={{color: "#F47B20"}}>4</span> basic assets that are already a staple of every marketers’ toolkit: Video, Headline, Caption, and 3-D product rendering or
                  Image.
                </p>
              </div>

            </div>
          </div>
          <div className="brand_container">
            <h1 data-aos="fade-up">Let's try it</h1>
            <p data-aos="fade-up" style={{fontSize: '1.8rem'}}>
              Click on a Brand
            </p>
            <div className="try_brands row">
              <div className="col-sm-4 teams">
                <img className="brand__" src="/images/video/TL_video_stella_hover.png" id="imgBrand1" alt="stella" data-aos="fade-up" />
              </div>
              <div className="col-sm-4 teams">
                <img className="brand__" src="/images/video/toyota_hover.png" id="imgBrand2" alt="toyota" data-aos="fade-up" />
              </div>
              <div className="col-sm-4 teams">
                <img className="brand__" src="/images/video/loreal_hover.png" id="imgBrand3" alt="loreal" data-aos="fade-up" />
              </div>
            </div>
            <div id="renderPosition"></div>
            <div className="carousel_render"
              style={{
                display: 'none! important',
                marginTop: '50px'
              }}
              id="myRenderer">
              <p id="txtRender" style={{display: 'none'}}>Rendering...</p>
              <div className="progress" id="divProgress" style={{display: 'none'}}>
                <div id="progressTimer" className="progress-bar"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="section2" style={{display: 'none'}} id="section2">
          <h1 id="loading" style={{display: 'none'}}>Loading...</h1>
          <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{paddingBottom: '50px', display: 'block'}}>
            <div style={{width: '100%', height: '60px'}}></div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div style={{width: '100%', textAlign: 'center', color: 'white'}}>
                  <h2 style={{color: 'white'}}>In-Feed</h2>
                </div>
                <div className="laptop-wrapper" style={{height: '500px'}}>
                  <div className="mobile_container">
                    <video id="mobileVideoPlayer" className="video" autoPlay={true} loop muted playsInline controls={false}>
                      <source src="/images/video/In-Feed_BrandedVideo_LOreal_web.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="carousel-item ">
                <div style={{width: '100%', textAlign: 'center', color: 'white'}}>
                  <h2 style={{color: 'white'}}>In-Break</h2>
                </div>
                <div className="wrapper" style={{height: '500px'}}>
                  <div className="laptop_container">
                    <video className="video" id="laptopVideoPlayer" autoPlay={true} loop muted playsInline controls={false}>
                      <source src="/images/video/In-Stream_In-Stream_LOreal_web.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div style={{width: '100%', textAlign: 'center', color: 'white'}}>
                  <h2 style={{color: 'white'}}>In-Show</h2>
                </div>
                <div className="laptop-wrapper" style={{height: '500px'}}>
                  <div className="tv_container">
                    <video id="tvVideoPlayer" className="video" autoPlay={true} loop muted playsInline controls={false}>
                      <source src="/images/video/10047A-Stella-Artois-Overlay-No-Chill-with-Gil-Stella-v1-4_23_21-FINAL.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
              <div className="d-flex flex-column justify-content-center align-items-center c_btn prev_">
                <i className="fa">&#xf177;</i>
              </div>
            </a>
            <a className="carousel-control-next" href="#myCarousel" data-slide="next">
              <div className="d-flex flex-column justify-content-center align-items-center c_btn next_">
                <i className="fa">&#xf178;</i>
              </div>
            </a>
            <div className="d-flex carousel_imgch_btn" id="divToggle">

              <div className="ci_btn__ d-flex">
                <div className="d-flex justify-content-center align-items-center toggle-btn cib_ott active">CTV</div>
                <div className="d-flex justify-content-center align-items-center toggle-btn cib_instream">IN-STREAM</div>
              </div>

            </div>

            <div className="d-flex carousel_imgch_btn inshow" id="divToggleInShow">
              <div className="ci_btn__ d-flex">
                <div className="d-flex justify-content-center align-items-center toggle-btn cib_do active">Dynamic Overlay</div>
                <div className="d-flex justify-content-center align-items-center toggle-btn cib_ss">Split Screen</div>
                <div className="d-flex justify-content-center align-items-center toggle-btn cib_bi">Brand Integration</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="row">
            <h1>Benchmarks</h1>
          </div>
          <div className="row">
            <div className="col-sm-4 items-center" data-aos="fade-up">
              <h2 style={{color: '#F47B20'}}>In-Feed</h2>
              <p>+9x purchase intent</p>
              <p>+2x engagement </p>
              <p>+10x time spent </p>
            </div>
            <div className="col-sm-4 items-center" data-aos="fade-up">
              <h2 style={{color: '#F15C2C'}}>In-Break</h2>
              <p>+10% brand consideration </p>
              <p>+12% positive perception</p>
              <p>+4.4x brand favorability </p>
            </div>
            <div className="col-sm-4 items-center" data-aos="fade-up">
              <h2 style={{color: '#ED79B0'}}>In-Show</h2>
              <p>+12x brand awareness </p>
              <p>+3.6x engagement </p>
              <p>77% less intrusive</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Demo
