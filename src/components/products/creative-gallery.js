import React from "react";

export default function CreativeGallery() {
  return (
    <>
      <div className="creative-gallery-section-container">
        <h2 className="bold text-primaryGradient">Discover a better way to tell your brand story.</h2>
        <div className="triggerGalleryMenuContainer sidebar-mobile-menu">
          <button className="triggerGalleryMenu sidebar-mobile-menu__link">
            <img src="/images/wrench.svg" alt="icon" />
            <span>Products &amp; format</span>
          </button>
        </div>
        <div className="product-gallery-body creative-gallery-section-inner" id="creative-gallery">
          <div className="tab"><span>Creative Gallery</span></div>
          <div className="gallery-container">
            <div className="large-controls product-gallery-sidebar">
              <div className="product-selection-container">
                <div className="controlHeadline">Product Selection</div>
                <div className="product-options product-select-grid">
                  <div className="select-item product-option product-option--active" id="product__25712" data-product-id="25712">
                    <img alt="formatselect1" src="/images/product_icon_native_active-3 1.svg" />
                    <span>Native</span>
                  </div>
                  <div className="select-item product-option" id="product__25773" data-product-id="25773">
                    <img alt="play-in-circle" src="/images/play-in-circle.svg" />
                    <span>Video</span>
                  </div>
                  <div className="select-item product-option" id="product__25846" data-product-id="25846">
                    <img alt="branded-content" src="/images/branded-content.svg" />
                    <span>Branded Content</span>
                  </div>
                  <div className="select-item product-option" id="product__25845" data-product-id="25845">
                    <img alt="w_display_no_ad" src="/images/w_display_no_ad 2.svg" />
                    <span>Display</span>
                  </div>
                </div>
              </div>
              <div className="format-selection-container format-list format-list--active" data-format-id="25712">
                <div className="format-selection-container">
                  <div className="controlHeadline">Format Selection</div>
                  <button className="format-option format-select format-option--active" data-parent-id="25712" id="format_option__native-cinemagraph" data-format-description-target="native-cinemagraph">
                    <span>Cinemagraph</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_cinemagraph_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25712" id="format_option__native-image" data-format-description-target="native-image">
                    <span>Image</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_image_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25712" id="format_option__native-scroll" data-format-description-target="native-scroll">
                    <span>Scroll</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_scroll_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25712" id="format_option__native-window" data-format-description-target="native-window">
                    <span>Window</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_window_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25712" id="format_option__native-carousel" data-format-description-target="native-carousel">
                    <span>Carousel</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_carousel_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25712" id="format_option__native-reveal" data-format-description-target="native-reveal">
                    <span>Reveal</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_reveal_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25712" id="format_option__native-pharma" data-format-description-target="native-pharma">
                    <span>Pharma</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_pharma_active.svg" />
                  </button>
                </div>
              </div>
              <div className="format-selection-container format-list" data-format-id="25773">
                <div className="format-selection-container">
                  <div className="controlHeadline">Format Selection</div>
                  <button className="format-option format-select format-option--active" data-parent-id="25773" id="format_option__video-brandedvideo" data-format-description-target="video-brandedvideo">
                    <span>Branded Video</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/product_icon_branded_video_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25773" id="format_option__video-in-streamvideo" data-format-description-target="video-in-streamvideo">
                    <span>In-Stream Video</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_brandedcontent_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25773" id="format_option__video-ottspots" data-format-description-target="video-ottspots">
                    <span>CTV Spots</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_ctp_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25773" id="format_option__video-ottproductinsertion" data-format-description-target="video-ottproductinsertion">
                    <span>CTV Product Insertion</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_ott_productinsertion_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25773" id="format_option__video-ottbrandinsertion" data-format-description-target="video-ottbrandinsertion">
                    <span>CTV Brand Insertion</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_ott_brandinsertion_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25773" id="format_option__video-ottin-actionsix" data-format-description-target="video-ottin-actionsix">
                    <span>CTV In-Action Six</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_ott_inactionsix_active.svg" />
                  </button>
                  <button className="format-option format-select" data-parent-id="25773" id="format_option__video-ottoverlay" data-format-description-target="video-ottoverlay">
                    <span>CTV Overlay</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/format_icon_ott_overlay_active.svg" />
                  </button>
                </div>
              </div>
              <div className="format-selection-container format-list" data-format-id="25846">
                <div className="format-selection-container">
                  <div className="controlHeadline">Format Selection</div>
                  <button className="format-option format-select format-option--active" data-parent-id="25846" id="format_option__brandedcontent-brandedcontent" data-format-description-target="brandedcontent-brandedcontent">
                    <span>Branded Content</span>
                    <img className="format-icon format-icon--svg" alt="icon" src="/images/creative-gallery/product_icon_branded_content_active.svg" />
                  </button>
                </div>
              </div>
              <div className="format-selection-container format-list" data-format-id="25845">
                <div className="format-selection-container">
                  <div className="controlHeadline">Format Selection</div>
                  <button className="format-option format-select format-option--active" data-parent-id="25845" id="format_option__display-display" data-format-description-target="display-display">
                    <span>Display</span>
                    <img className="format-icon" src="/images/creative-gallery/w_display_no_ad.png" alt="icon" />
                  </button>
                </div>
              </div>

            </div>

            <div className="product-gallery-content selected-gallery-content">
              <div className="format-description-box">
                <div className="format-descriptions format-descriptions--active" data-format-description-product-id="25712">
                  <div id="native-cinemagraph" className="format-description format-description--active format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/486121765?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=486121765" data-image-src="/images/creative-gallery/mock_display_mobile_reynoldswrap.png">
                          <img src="/images/creative-gallery/mock_display_mobile_reynoldswrap.png" className="hide-me" alt="icon" />
                          <iframe title="Native : Cinemagraph" src="https://player.vimeo.com/video/486121765?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=486121765"
                            className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details selected-gallery-copy">
                      <div className="format-details-content">
                        <span className="gallery-product-title format-details-title--hide-mobile">Native : Cinemagraph</span>
                        <span className="gallery-product-caption format-details-title--show-mobile">Best for increasing traffic and brand awareness.</span>
                        <span className="gallery-product-description">
                          Engage your audience with subtle movement that captures attention and draws the user into your brand message. Cinemagraph ads provide a unique experience that brings still images to life.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="native-image" className="format-description  format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/480491316?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=480491316" data-image-src="/images/creative-gallery/mock_display_mobile_reynoldswrap.png">
                          <img src="/images/creative-gallery/mock_display_mobile_reynoldswrap.png" className="hide-me" alt="icon" />
                          <iframe title="Native : Image" src="" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Native : Image</span>
                        <span className="gallery-product-caption format-details-title--show-mobile">Best for increasing reach and traffic.</span>
                        <span className="gallery-product-description">
                          Incorporate your brand’s visual content and copy directly into the publisher’s feed on the world’s best sites. Image ads allow users to discover your brand message and click through to your website to engage further.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="native-scroll" className="format-description  format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/480491244?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=480491244" data-image-src="">
                          <iframe src="" title="Native : Scroll" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Native : Scroll</span>
                        <span className="gallery-product-caption format-details-title--show-mobile">Best for engagement</span>
                        <span className="gallery-product-description">
                          Let your ads tell a story through this user-activated ad experience. Scroll ads showcase up to three images that change based on the user’s movement up and down the page.
                        </span>
                      </div>

                    </div>
                  </div>
                  <div id="native-window" className="format-description  format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/480491181?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=480491181" data-image-src="">
                          <iframe src="" title="Native : Window" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0"></iframe>
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Native : Window</span>
                        <span className="gallery-product-caption format-details-title--show-mobile">Best for ad engagement and brand awareness.</span>
                        <span className="gallery-product-description">
                          Capture your audience with vertical images that follow the user as they scroll through the page. Ad creative moves up and down the ad slot with page movement.
                        </span>
                      </div>

                    </div>
                  </div>
                  <div id="native-carousel" className="format-description  format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/420896432?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896432" data-image-src="">
                          <iframe src="" title="Native : Carousel" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Native : Carousel</span>
                        <span className="gallery-product-caption format-details-title--show-mobile">Best for engagement and product sales.</span>
                        <span className="gallery-product-description">
                          Showcase multiple products, highlight specific features, or tell your story with multiple images in a single ad. Carousel ads allow up to ten unique images the user can explore before clicking to learn more or making a purchase.
                        </span>
                      </div>

                    </div>
                  </div>
                  <div id="native-reveal" className="format-description  format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/420896696?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896696" data-image-src="">
                          <iframe src="" title="Native : Reveal" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Native : Reveal</span>
                        <span className="gallery-product-caption format-details-title--show-mobile">Best for delivering important disclosures.</span>
                        <span className="gallery-product-description">
                          Seamlessly address disclosures and offer additional information by adding on a Reveal to any format.
                        </span>
                      </div>


                    </div>
                  </div>
                  <div id="native-pharma" className="format-description  format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/420896686?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896686" data-image-src="">
                          <iframe src="" title="Native : Pharma" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Native : Pharma</span>
                        <span className="gallery-product-caption format-details-title--show-mobile">Best for ensuring FDA compliance with your pharmaceutical ads.</span>
                        <span className="gallery-product-description">
                          Engage and educate users with native creative that features a non-intrusive scrolling ISI section that is FDA compliant.
                        </span>
                      </div>


                    </div>
                  </div>
                </div>
                <div className="format-descriptions" data-format-description-product-id="25773">
                  <div id="video-brandedvideo" className="format-description format-description--active format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/420896408?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896408" data-image-src="">
                          <iframe src="" title="Video : Branded Video" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Video : Branded Video</span>
                        <span className="gallery-product-caption format-details-title--show-mobile">Best for driving video views and increasing brand awareness.</span>
                        <span className="gallery-product-description">
                          Showcase your video in the most optimal placements, directly within the feed of content on the world’s best publishers. Branded Video matches the unique look and feel of each publisher site and offers customized branding to drive
                          higher brand awareness and engagement.
                        </span>
                      </div>

                    </div>
                  </div>
                  <div id="video-in-streamvideo" className="format-description">
                    <div className="format-preview selected-gallery-visual laptop">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg svg--laptop" viewBox="0 0 456 239.9">
                        <defs></defs>
                        <path
                          d="M414.6 35.9c-.1-7.9.1-15.8-.5-23.7-.2-3.3-1.4-6.2-3.8-8.6-2.4-2.7-5.6-3.7-9.1-3.6H55.9c-.4 0-3.8.1-4.2.1-2.2.1-3.9 1-5.5 2.4-2.2 2-3.6 4.5-3.7 7.6v213.8c0 2.6 0 2.6 2.5 2.6h146.1c.6.1 1.3.1 1.9.1h69.8c.6 0 1.3 0 1.9-.1s1.3 0 1.9 0h145.8c.5 0 .9 0 1.2-.4.4-.5.3-1.1.3-1.6.1-10 0-20.1.2-30.1.3-12 0-16 .2-28 .3-15.7.1-25.5.2-41.2.4-31.2.6-58.2.1-89.3zM403.1 210c0 1.5.1 1.3-1.4 1.3h-45.6c-.4 0-.8.1-1.2-.1-4.8 0-9.6.1-14.5.1-10.1 0-22.2 0-32.3-.1H307c-.4-.2-.9-.1-1.3-.1h-74.6c-.5 0-1 .1-1.5-.1-.3 0-.7.1-1 .1-19.8 0-39.7-.1-59.5-.1-.3 0-.5 0-.8-.1-.4-.2-.9-.1-1.3-.1H88.6c-.4 0-.9.1-1.3-.1-4.9 0-9.7.1-14.6.1H54.4c-.9 0-1.2-.1-1.2-1.1V16c0-1 .3-1.2 1.2-1.2h347.7c.3 0 .7 0 1 .1.2.4.1.8.1 1.2-.1 70.6-.1 123.2-.1 193.9z"
                          fill="#505050"></path>
                        <path d="M194.7 230.6c-2.4-.9-3.4-2.1-3.5-4.5H265c-.6 3.1-2.2 4.7-5.3 5.2-3.9.1-12.5.1-13 .1h-37.6c-4.8 0-9.7.3-14.4-.8z" fill="#545655"></path>
                        <path
                          d="M454.6 226.1H264.9c-.3.2-.5.4-.6.8-.7 2.4-2.4 3.6-4.7 4-.2.1-.3 0-.5.1-.8.2-11.8.4-12.4.4h-41.9c-.8 0-4.4-.1-6.3-.3-1.2-.1-2.5-.3-3.6-.8-1.7-.8-3-1.8-3.4-3.8 0-.2-.2-.3-.4-.4H1.5c-1.5 0-1.4 0-1.5 1.5 0 1.2 1.5 5.3 2.8 5.6 4.2 2.5 20.8 6.7 28.3 6.7h393.7c7.6 0 24.1-4.2 28.3-6.7 1.3-.3 2.8-4.4 2.8-5.6.1-1.5.2-1.5-1.3-1.5z"
                          fill="#cdcdd0"></path>
                      </svg>
                      <div className="format-preview__window format-preview__window--laptop">
                        <div className="format-preview__body" data-video-src="https://player.vimeo.com/video/470142095?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=470142095" data-image-src="">
                          <iframe src="" title="Video : In-Stream video" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details format-details--row">
                      <div className="format-details-content selected-gallery-copy format-details-content--row">
                        <span className="gallery-product-title format-details-title--hide-mobile">Video : In-Stream video</span>
                        <span className="gallery-product-description">
                          Engage viewers with 0:05 to 5 minute spots that appear before, during or after their content of choice.
                        </span>
                      </div>


                    </div>
                  </div>
                  <div id="video-ottspots" className="format-description">
                    <div className="format-preview selected-gallery-visual window">
                      <svg className="svg svg--tv" viewBox="0 0 691 425" xmlns="http://www.w3.org/2000/svg">
                        <defs></defs>
                        <path d="M690.991 397.927V0H0v397.927h245.417v4.345l-7.958 12.781V425h216.064v-9.947l-7.958-12.759v-4.345l245.426-.022zm-440.75 17.126l7.95-12.781v-4.345h174.6v4.345l7.945 12.781H250.241zm-240.1-27.71V10.588h670.631v376.753H10.142z"
                          fill="#505050" fillRule="nonzero"></path>
                      </svg>
                      <div className="format-preview__window">
                        <div className="format-preview__body" data-video-src="https://player.vimeo.com/video/420896678?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896678" data-image-src="">
                          <iframe src="" title="Video : CTV Spots" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details format-details--row">
                      <div className="format-details-content selected-gallery-copy format-details-content--row">
                        <span className="gallery-product-title format-details-title--hide-mobile">Video : CTV Spots</span>
                        <span className="gallery-product-description">
                          Build awareness with 0:15, 0:30 and 0:60 spots within commercial breaks across premium streaming inventory.
                        </span>
                      </div>


                    </div>
                  </div>
                  <div id="video-ottproductinsertion" className="format-description">
                    <div className="format-preview selected-gallery-visual window">
                      <svg className="svg svg--tv" viewBox="0 0 691 425" xmlns="http://www.w3.org/2000/svg">
                        <defs></defs>
                        <path d="M690.991 397.927V0H0v397.927h245.417v4.345l-7.958 12.781V425h216.064v-9.947l-7.958-12.759v-4.345l245.426-.022zm-440.75 17.126l7.95-12.781v-4.345h174.6v4.345l7.945 12.781H250.241zm-240.1-27.71V10.588h670.631v376.753H10.142z"
                          fill="#505050" fillRule="nonzero"></path>
                      </svg>
                      <div className="format-preview__window">
                        <div className="format-preview__body" data-video-src="https://player.vimeo.com/video/420896503?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896503" data-image-src="">
                          <iframe src="" title="Video : Product Insertion" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details format-details--row">
                      <div className="format-details-content selected-gallery-copy format-details-content--row">
                        <span className="gallery-product-title format-details-title--hide-mobile">Video : Product Insertion</span>
                        <span className="gallery-product-description">
                          Utilize our computer vision technology to identify contextual moments and surface areas to superimpose a brand’s product into the fabric of the content in a way that’s seamless and additive.
                        </span>
                      </div>

                    </div>
                  </div>
                  <div id="video-ottbrandinsertion" className="format-description">
                    <div className="format-preview selected-gallery-visual window">
                      <svg className="svg svg--tv" viewBox="0 0 691 425" xmlns="http://www.w3.org/2000/svg">
                        <defs></defs>
                        <path d="M690.991 397.927V0H0v397.927h245.417v4.345l-7.958 12.781V425h216.064v-9.947l-7.958-12.759v-4.345l245.426-.022zm-440.75 17.126l7.95-12.781v-4.345h174.6v4.345l7.945 12.781H250.241zm-240.1-27.71V10.588h670.631v376.753H10.142z"
                          fill="#505050" fillRule="nonzero"></path>
                      </svg>
                      <div className="format-preview__window">
                        <div className="format-preview__body" data-video-src="https://player.vimeo.com/video/420896445?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896445" data-image-src="">
                          <iframe src="" title="Video : Brand Insertion" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details format-details--row">
                      <div className="format-details-content selected-gallery-copy format-details-content--row">
                        <span className="gallery-product-title format-details-title--hide-mobile">Video : Brand Insertion</span>
                        <span className="gallery-product-caption format-details-title--hide-mobile">Beta</span>
                        <span className="gallery-product-description">
                          Utilize our computer vision technology to identify contextual moments and surface areas to superimpose a brand’s message into the fabric of the content in a way that’s seamless and additive.
                        </span>
                      </div>


                    </div>
                  </div>
                  <div id="video-ottin-actionsix" className="format-description">
                    <div className="format-preview selected-gallery-visual window">
                      <svg className="svg svg--tv" viewBox="0 0 691 425" xmlns="http://www.w3.org/2000/svg">
                        <defs></defs>
                        <path d="M690.991 397.927V0H0v397.927h245.417v4.345l-7.958 12.781V425h216.064v-9.947l-7.958-12.759v-4.345l245.426-.022zm-440.75 17.126l7.95-12.781v-4.345h174.6v4.345l7.945 12.781H250.241zm-240.1-27.71V10.588h670.631v376.753H10.142z"
                          fill="#505050" fillRule="nonzero"></path>
                      </svg>
                      <div className="format-preview__window">
                        <div className="format-preview__body" data-video-src="https://player.vimeo.com/video/420896357?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896357" data-image-src="">
                          <iframe src="" title="Video : In-Action Six" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details format-details--row">
                      <div className="format-details-content selected-gallery-copy format-details-content--row">
                        <span className="gallery-product-title format-details-title--hide-mobile">Video : In-Action Six</span>
                        <span className="gallery-product-caption format-details-title--hide-mobile">Beta</span>
                        <span className="gallery-product-description">
                          Connect with viewers by creating a :06s spot that runs alongside the stream of content when there’s a natural breaking in the programming.
                        </span>
                      </div>

                    </div>
                  </div>
                  <div id="video-ottoverlay" className="format-description">
                    <div className="format-preview selected-gallery-visual window">
                      <svg className="svg svg--tv" viewBox="0 0 691 425" xmlns="http://www.w3.org/2000/svg">
                        <defs></defs>
                        <path d="M690.991 397.927V0H0v397.927h245.417v4.345l-7.958 12.781V425h216.064v-9.947l-7.958-12.759v-4.345l245.426-.022zm-440.75 17.126l7.95-12.781v-4.345h174.6v4.345l7.945 12.781H250.241zm-240.1-27.71V10.588h670.631v376.753H10.142z"
                          fill="#505050" fillRule="nonzero"></path>
                      </svg>
                      <div className="format-preview__window">
                        <div className="format-preview__body" data-video-src="https://player.vimeo.com/video/420896488?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=420896488" data-image-src="">
                          <iframe src="" title="Video : Overlay" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details format-details--row">
                      <div className="format-details-content selected-gallery-copy format-details-content--row">
                        <span className="gallery-product-title format-details-title--hide-mobile">Video : Overlay</span>
                        <span className="gallery-product-caption format-details-title--hide-mobile">Beta</span>
                        <span className="gallery-product-description">
                          Engage audiences by creating an animated ad experience that runs in the lower third of the content stream, is contextually relevant and can be formatted to meet the design needs of any brand.
                        </span>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="format-descriptions" data-format-description-product-id="25846">
                  <div id="brandedcontent-brandedcontent" className="format-description format-description--active format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="https://player.vimeo.com/video/486123863?dnt=1&amp;app_id=122963&amp;background=1&amp;autoplay=1&amp;muted=1&amp;controls=0&amp;rel=0&amp;modestbranding=1&amp;loop=1&amp;version=3&amp;playlist=486123863" data-image-src="">
                          <iframe src="" title="Branded Content : Branded Content" className="iframe-embed" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Branded Content : Branded Content</span>
                        <span className="gallery-product-caption format-details-title--hide-mobile">Branded Content at Scale.</span>
                        <span className="gallery-product-description">
                          Leverage data to create, distribute and promote authentic branded content. Increase reach by running with multiple publishers simultaneously and maximize ROI through real-time insights and optimization.
                        </span>
                      </div>


                    </div>
                  </div>
                </div>
                <div className="format-descriptions" data-format-description-product-id="25845">
                  <div id="display-display" className="format-description format-description--active format-description--row">
                    <div className="format-preview selected-gallery-visual">
                      <svg className="svg svg--phone" data-name="device-phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.12 355.1">
                        <path
                          d="M140.42,0H24.7C11.12,0,0,11.67,0,25.92V329.17c0,14.27,11.12,25.93,24.7,25.93H140.42c13.59,0,24.7-11.67,24.7-25.93V25.92C165.12,11.67,154,0,140.42,0Zm17.45,331.72a2.17,2.17,0,0,1-2.11,2.22H9.36a2.18,2.18,0,0,1-2.13-2.22h0V23a2.17,2.17,0,0,1,2.13-2.22h146.4A2.17,2.17,0,0,1,157.87,23Z"
                          fill="#505050"></path>
                      </svg>
                      <div className="format-preview__window  format-preview__window--phone">
                        <div className="format-preview__body format-preview__body--phone" data-video-src="" data-image-src="https://triplelift.wpengine.com/wp-content/uploads/2020/10/mobile-display-v2.png">
                          <img src="https://triplelift.wpengine.com/wp-content/uploads/2020/10/mobile-display-v2.png" className="" alt="icon" />
                          <iframe src="" title="Display : Display" className="iframe-embed hide-me" allow="autoplay; fullscreen" allowFullScreen="" width="640" height="360" frameBorder="0" />
                        </div>
                      </div>
                    </div>
                    <div className="format-details">
                      <div className="format-details-content selected-gallery-copy">
                        <span className="gallery-product-title format-details-title--hide-mobile">Display : Display</span>
                        <span className="gallery-product-caption format-details-title--hide-mobile">Best for increasing reach and traffic.</span>
                        <span className="gallery-product-description">
                          Incorporate your brand’s visual content and copy directly into the publisher’s feed on the world’s best sites. Image ads allow users to discover your brand message and click through to your website to engage further.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
