import React, { useEffect } from "react";
import { Link } from "gatsby";

export default function Menu() {
  useEffect(() => {
    const $ = window.jQuery;
    var url = typeof window !== "undefined" ? window.location.href : "";
    if (url.substr(url.length - 1) === "/") url = url.slice(0, -1);
    var urlArr = url.split("/");
    var lastPath = urlArr[urlArr.length - 1];
    // if ( lastPath === "video" || lastPath === "video-demo" || lastPath === "we-go-beyond") {
      $('.main-menu-item').hide();
      $('.login').hide();
      $('.demo-page').show();
      if(lastPath === "video-demo") {
        $('.overview-menu').show();
        $('.demo-menu').hide();
      }
      if(lastPath === "video") {
        $('.overview-menu').hide();
        $('.demo-menu').show();
      }
      if(lastPath === "we-go-beyond") {
        $('.overview-menu').hide();
        $('.demo-menu').hide();
      }
    // } else {
    //   $('.main-menu-item').show();
    //   $('.login').show();
    //   $('.demo-page').hide();
    // }
  }, []);
  return (
    <>
      <div className="main-nav">
        <div className="main-menu-item" style={{display: 'none'}}>
          <ul className="base-level">
            <li className="dropdown">
              <Link
                className="company dropdown__title"
                to="/company"
                activeClassName="active"
                aria-expanded="false"
                controls="companyDropdown"
              >
                <span>Company</span>
              </Link>
              <ul
                className="dropdown__menu"
                id="companyDropdown"
                aria-label="submenu"
              >
                <li>
                  <a href="/company#mission">Mission</a>
                </li>
                <li>
                  <a href="/company#corevalues">Core Values</a>
                </li>
                <li>
                  <a href="/company#leadership">Leadership</a>
                </li>
                <li>
                  <Link
                    className="company dropdown__title"
                    to="/company-careers"
                    activeClassName="active"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                className="products dropdown__title"
                to="/products"
                activeClassName="active"
                aria-expanded="false"
                controls="productsDropdown"
              >
                <span>Products</span>
              </Link>
              <ul
                className="dropdown__menu"
                id="productsDropdown"
                aria-label="submenu"
              >
                <li>
                  <a
                    href="/products#creativegallery"
                    controls="creativegallerySub"
                  >
                    Creative Gallery
                  </a>
                  <ul
                    className="dropdown__menu lv2"
                    id="creativegallerySub"
                    aria-label="submenu"
                  >
                    <li>
                      <a href="/products#native-cinemagraph">
                        In-feed Native
                      </a>
                    </li>
                    <li>
                      <a href="/products#display">Display</a>
                    </li>
                    <li>
                      <a href="/products#branded-content">Branded Content</a>
                    </li>
                    <li>
                      <a href="/products#video">Video</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/products#innovation" controls="innovationSub">
                    Innovation
                  </a>
                  <ul
                    className="dropdown__menu lv2"
                    id="innovationSub"
                    aria-label="submenu"
                  >
                    <li>
                      <a href="/ctv">CTV</a>
                    </li>
                    <li>
                      <a href="/exchange-traded-deals">
                        Exchange Traded Deals
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/product-offers" activeClassName="active">
                    Offers & Packages
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                className="technology"
                to="/technology"
                activeClassName="active"
              >
                <span>Technology</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link
                className="ideas"
                to="/ideas"
                activeClassName="active"
                aria-expanded="false"
                controls="ideasDropdown"
              >
                <span>Ideas</span>
              </Link>
              <ul
                className="dropdown__menu"
                id="ideasDropdown"
                aria-label="submenu"
              >
                <li>
                  <a href="/ideas#blog">Blog</a>
                </li>
                <li>
                  <a href="/ideas#news">News</a>
                </li>
                <li>
                  <a href="https://tripleliftevents.com/home/TLSite">Event</a>
                </li>
                <li>
                  <a href="https://www.triplelift-ott.com/spotless">
                    Podcast Series
                  </a>
                </li>
                <li>
                  <a href="/ideas/#distinctions">Distinctions</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                className="contact-us"
                to="/contact-us"
                activeClassName="active"
              >
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="demo-page" style={{display: 'none'}}>
          <ul className="base-level">
            <li className="overview-menu">
              <Link
                className="ideas"
                to="/video"
                activeClassName="active"
              >
                <span>Overview</span>
              </Link>
            </li>
            <li className="demo-menu">
              <Link
                className="ideas"
                to="/video-demo"
                activeClassName="active"
              >
                <span>Demo</span>
              </Link>
            </li>
            <li>
              <a
                className="contact-us"
                href="https://triplelift.com/contact-us/"
              >
                <span>Contact us</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <a className="login" style={{display: 'none'}} href="https://console.triplelift.com/login">
        Login
      </a>
    </>
  );
}
