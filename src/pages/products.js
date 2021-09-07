import React from "react";
import Layout from "../components/layout";

import ProductsHero from "../components/products/products-hero";
import CreativeGallery from "../components/products/creative-gallery";
import InnovationHeader from "../components/products/innovation-header";
import Seo from "../components/seo";

class Products extends React.Component {
  componentDidMount () {
    const gsap = window.gsap;
    // const $ = window.jQuery;

    const creativeGallerySectionTL = gsap.timeline( {
      scrollTrigger: {
        trigger: ".creative-gallery-section-container",
        scrub: true,
        end: "5%",
        toggleActions: "play reverse play reverse",
      }
    });

    creativeGallerySectionTL
    .to(
      '.productpage-section-transition-container .section-transition.section1',
      {
        opacity: 0,
        duration: 1
      },"transition1"
    );

    creativeGallerySectionTL
    .to(
      '.productpage-section-transition-container .section-transition.white',
      {
        opacity: 1,
        duration: 1
      },"transition1"
    );

    const innovationHeaderSectionTLIntro = gsap.timeline( {
      scrollTrigger: {
        trigger: ".innovation-header-container",
        scrub: true,
        start: "20px center",
        end: "80px 20%",
        toggleActions: "play reverse play reverse",
      }
    });

    innovationHeaderSectionTLIntro
    .from(
      '.innovation-header-container .copy',
      {
        y: -10,
        duration: .6
      },"transition2"
    );


    const fadeInFirstCTA = gsap.timeline( {
      scrollTrigger: {
        trigger: ".product-page-cta-1",
        start: "-40% center",
        end: "50% center",
        scrub: true,
        toggleActions: "play reverse play reverse",
      }
    });

    fadeInFirstCTA
    .from(
      '.product-page-cta-1',
      {
        opacity: .8,
        duration: 1
      },"transition5"
    );

    if (window.NodeList && !NodeList.prototype.forEach) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }

    // Triplelift Gallery
    window.requestAnimationFrame(function () {
      triplelift_gallery_start();
    });

    function triplelift_gallery_start() {
      let viewMoreButtons = document.querySelectorAll('.view-more-cta');
      let viewPublisher = document.querySelectorAll('.view-more-content__item');
      let productSelection = document.querySelectorAll('.product-option');
      let formatSelection = document.querySelectorAll('.format-option');
      let formatDescriptionActive = document.querySelector('.format-description--active');
      let videoSrc = formatDescriptionActive.querySelector('.format-preview__body').dataset.videoSrc;

      // Load video, if any
      if (videoSrc) loadVideo(formatDescriptionActive);

      // View Publishers List Button
      viewMoreButtons.forEach(function(viewMoreButton, index) {
        viewMoreButton.addEventListener('click', function(event) {
          event.preventDefault();
          let viewMoreContentID = this.attributes.href.nodeValue;
          let viewMoreContent = document.querySelector(viewMoreContentID);
          let formatDetails = this.closest('.format-details');
          let formatDetailsContent = formatDetails.querySelector('.format-details-content');

          this.classList.toggle('view-more-cta--open');
          viewMoreContent.classList.toggle('view-more-content--open');
          formatDetailsContent.classList.toggle('format-details-content--hide');

          if (!this.classList.contains('view-more-cta--open')) {
            reloadPreview();
          }

          return false;
        });
      });

      // Publisher Selection
      viewPublisher.forEach(
        function(publisher, index) {
          publisher.addEventListener('click', function(event) {
            event.preventDefault();
            let mediaSource = this.dataset.mediaSrc;
            let formatBlock = this.closest('.format-description');
            let previewBody = formatBlock.querySelector('.format-preview__body');
            let mediaType = this.dataset.mediaType;
            if (mediaType === 'image') {
              previewBody.querySelector('img').classList.remove('hide-me');
              previewBody.querySelector('iframe').classList.add('hide-me');
              previewBody.querySelector('img').src = mediaSource;
              previewBody.querySelector('iframe').src = '';
            } else {
              previewBody.querySelector('iframe').src = mediaSource;
              previewBody.querySelector('iframe').classList.remove('hide-me');
              previewBody.querySelector('img').classList.add('hide-me');
            }
            let publisherContentItems = document.querySelectorAll('.view-more-content__item');
            publisherContentItems.forEach(
              function(publisherContentItem, index) {
                if (publisherContentItem.classList.contains('pub--active')) {
                  publisherContentItem.classList.remove('pub--active');
                }
              }
            );

            this.classList.add('pub--active');

            return false;
          });
        }
      );

      // Product selection
      productSelection.forEach(
        function(product, index) {
          product.addEventListener('click', productEventListener);
        }
      );

      // Format Selection
      formatSelection.forEach(
        function(format, index) {
          format.addEventListener('click', function(event) {
            event.preventDefault();


            let formatDescriptionID = this.dataset.formatDescriptionTarget;
            let formatDescriptionTarget = document.querySelector('#' + formatDescriptionID);

            window.location.hash = "_" + formatDescriptionID;

            document.querySelector('.format-descriptions--active').classList.remove('format-descriptions--active');
            document.querySelector('.format-description--active').classList.remove('format-description--active');
            document.querySelector('.format-option--active').classList.remove('format-option--active');

            this.classList.add('format-option--active');
            formatDescriptionTarget.parentElement.classList.add('format-descriptions--active');
            formatDescriptionTarget.classList.add('format-description--active');

            loadVideo(formatDescriptionTarget);
            return false;
          });
        }
      );

      let selected = window.location.hash;
      selected = selected.substring(1);
      if (selected !== '') {
        let selectedStr = selected.substring(1);
        let idSelectedFormat = 'format_option__' + selectedStr;
        if (document.getElementById(idSelectedFormat) != null) {
          let idProduct = document.getElementById(idSelectedFormat).dataset.parentId;
          let idProductSelected = 'product__' + idProduct;

          document.querySelector('.product-option--active').classList.remove('product-option--active');
          document.querySelector('.format-list--active').classList.remove('format-list--active');
          document.querySelector('.format-option--active').classList.remove('format-option--active');
          document.querySelector('.format-description--active').classList.remove('format-description--active');

          document.getElementById(idProductSelected).classList.add('product-option--active');
          let tabActive = document.querySelectorAll('[data-format-id="' + idProduct + '"]')[0];
          tabActive.classList.add('format-list--active');

          document.getElementById(idSelectedFormat).classList.add('format-option--active');
          document.getElementById(idSelectedFormat).click();
        }
      }

      // Mobile Menu
      document.querySelector('.sidebar-mobile-menu__link').addEventListener('click', mobileMenuEventListener);

      // Mobile Sidebar
      if (window.innerWidth <= 1000) toggleMobileSidebarEventListener();
      window.onresize = toggleMobileSidebarEventListener;

      function toggleMobileSidebarEventListener() {
        let options = document.querySelectorAll('.product-option, .format-option');
        if (window.innerWidth <= 1000) {
          options.forEach(
            function(option, index) {
              option.addEventListener('click', mobileSidebarEventListener);
            }
          );
        } else {
          options.forEach(
            function(option, index) {
              option.removeEventListener('click', mobileSidebarEventListener);
            }
          );
        }
      }

      function mobileSidebarEventListener() {
        let mobileMenu = document.querySelector('.sidebar-mobile-menu__link');
        let sidebar = document.querySelector('.product-gallery-sidebar');

        mobileMenu.classList.remove('sidebar-mobile-menu__link--open');
        sidebar.classList.remove('product-gallery-sidebar--open');
      }

      function mobileMenuEventListener(event) {
        event.preventDefault();
        let mobileMenu = this;
        let sidebar = document.querySelector('.product-gallery-sidebar');

        mobileMenu.classList.toggle('sidebar-mobile-menu__link--open');
        sidebar.classList.toggle('product-gallery-sidebar--open');
        sidebar.scrollIntoView();
      }

      function productEventListener(event) {
        event.preventDefault();

        let productID = this.dataset.productId;
        let formatSelectionList = document.querySelector('.format-list[data-format-id="' + productID + '"]');

        document.querySelector('.product-option--active').classList.remove('product-option--active');
        document.querySelector('.format-list--active').classList.remove('format-list--active');

        this.classList.add('product-option--active');
        formatSelectionList.classList.add('format-list--active');
        formatSelectionList.querySelector('.format-option').click();

        return false;
      }

      function loadVideo(element) {
        document.querySelectorAll('.iframe-embed').forEach(function(iframe, index) {
          iframe.src = '';
        });
        let preview = element.querySelector('.format-preview__body');
        let iframe = preview.querySelector('.iframe-embed');
        let source = preview.dataset.videoSrc;
        if (iframe) iframe.src = source;

        var hashUrl = window.location.hash;
        var elemtID = hashUrl.substring(2);
        if (hashUrl !== '' && document.getElementById(elemtID)) {
          if (document.getElementById(elemtID).classList.contains('format-description')) {
            let productGalleryContentTop = document.querySelector('.product-gallery-body').offsetTop - 78;
            setTimeout(function() {
              window.scrollTo({
                top: productGalleryContentTop,
                behavior: 'smooth'
              });
            }, 150);
          }
        }
      }

      function reloadPreview() {
        let preview = document.querySelector('.format-description--active .format-preview__body');
        let videoSrc = preview.dataset.videoSrc;
        let imageSrc = preview.dataset.imageSrc;
        if (videoSrc) {
          preview.querySelector('iframe').src = videoSrc;
        } else if (imageSrc) {
          preview.querySelector('img').src = imageSrc;
        }
      }
    }
  }
  render() {
    return (
      <Layout>
        <Seo title="Products Overview" />
        <div id="productPageJSIndicator" />
        <div className="loading"></div>
        <div className="productpage-section-transition-container section-transition-container">
          <div className="section-transition section1"></div>
          <div className="section-transition white"></div>
        </div>
        <ProductsHero />
        <CreativeGallery />
        <InnovationHeader />
        <div className="explore-our-gallery-container product-page-cta product-page-cta-1">
          <div className="explore-our-gallery">
            <div className="animate-border-outer shadow-3" />
            <div className="animate-border-content">
              <div className="product-page-cta-content-inner">
                <div className="headline-container">
                  <span className="headline text-primaryGradient">CTV</span>
                  <span className="sideheadline">Beta</span>
                </div>
                <img
                  alt="ottbeta"
                  className="section-visual small"
                  src="/images/ottbeta.png"
                />
                <p>
                  We’re pioneering an innovative post-production solution that
                  provides integrated ad experiences in streaming TV.
                </p>
                <a className="cta cta-style-2 right-text-align" href="/ctv/">
                  <span>
                    See What we're
                    <br />
                    working on
                  </span>
                  <img src="/images/arrow-right.svg" alt="arrow right" />
                </a>
              </div>
              <img
                alt="ottbeta"
                className="section-visual large"
                src="/images/ottbeta.png"
              />
            </div>
          </div>
        </div>
        <div className="explore-our-gallery-container product-page-cta product-page-cta-2">
          <div className="explore-our-gallery">
            <div className="animate-border-outer shadow-3" />
            <div className="animate-border-content">
              <div className="product-page-cta-content-inner">
                <div className="headline-container">
                  <span className="headline text-primaryGradient">
                    Exchange Traded Deals
                  </span>
                </div>
                <img
                  alt="etd"
                  className="section-visual small"
                  src="/images/ETD.png"
                />
                <p>
                  We’ve organized our most direct, effective and requested
                  inventory to create deals that are built for you, easy to buy
                  and include all the benefits of working with TripleLift.
                </p>
                <a
                  href="/exchange-traded-deals"
                  className="cta cta-style-2 right-text-align">
                  <span>
                    Explore exchange
                    <br />
                    traded deals
                  </span>
                  <img src="/images/arrow-right.svg" alt="arrow right" />
                </a>
              </div>
              <img
                alt="etd"
                className="section-visual large"
                src="/images/ETD.png"
              />
            </div>
          </div>
        </div>
        <div className="explore-our-gallery-container product-page-cta product-page-cta-3">
          <div className="explore-our-gallery">
            <div className="animate-border-outer shadow-3" />
            <div className="animate-border-content">
              <div className="product-page-cta-content-inner">
                <div className="headline-container">
                  <span className="headline text-primaryGradient">
                    Offers & Packages
                  </span>
                </div>
                <img
                  alt="offers packages"
                  className="section-visual small"
                  src="/images/offers-packages.png"
                />
                <p>
                  We routinely offer deals and packages tailored to advertisers
                  like you. These packages highlight consumer and cultural trends,
                  TripleLift performance data, and creative best practices to get
                  the most out of your campaign.
                </p>
                <a
                  href="/product-offers"
                  className="cta cta-style-2 right-text-align">
                  <span>Explore product offers</span>
                  <img src="/images/arrow-right.svg" alt="arrow right" />
                </a>
              </div>
              <img
                alt="offers packages"
                className="section-visual large"
                src="/images/offers-packages.png"
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Products
