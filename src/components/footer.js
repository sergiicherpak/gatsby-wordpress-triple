import React from "react";
import HubspotForm from 'react-hubspot-form';

export default function Footer(props) {
  // var url = typeof window !== 'undefined' ? window.location.href : '';
  // if(url.substr(url.length - 1) == '/') url = url.slice(0, -1);
  // var urlArr = url.split('/');
  // var isvideoPage = false;
	var isvideoPage = true;
  // if (urlArr[urlArr.length - 1] === 'video') {
    // isvideoPage = true;
  // }
  return (
    <>
    <footer>
      <div className="footer-inner-container">
        <div className="footer-newsletter-connect-container">
          <div className="newsletter-container">
            <h2>Our industry moves fast.</h2>
            <p>Sign up to stay up-to-date on the latest news,<br />trends, and upcoming events.</p>
            <div id="aoemail-subscription">
              <HubspotForm
                portalId='6743804'
                formId='a070bad3-936a-43a8-b20f-c857e68ca907'
              />
            </div>
          </div>
          <div className="social-media-container">
            <h2>Connect with us!</h2>
            <ul>
              <li>
                <a href="https://www.linkedin.com/company/triplelift/" target="_blank" rel="noopener noreferrer">
                  <img alt="linkedin" src="/images/icons/linkedin.svg" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/TripleLiftHQ" target="_blank" rel="noopener noreferrer">
                  <img alt="twitter" src="/images/icons/twitter.svg" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/TripleLiftHQ/" target="_blank" rel="noopener noreferrer">
                  <img alt="facebook" src="/images/icons/facebook.svg" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/triplelifthq" target="_blank" rel="noopener noreferrer">
                  <img alt="instagram" src="/images/icons/instagram.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-menu">
          <div>
            <h3>Policies</h3>
            <ul>
              {isvideoPage && (
              <>
              <li><a href="https://triplelift.com/privacy">Privacy</a></li>
              <li><a href="https://triplelift.com/terms-of-use">Terms Of Use</a></li>
              <li><a href="https://triplelift.com/creative_ad_policies">Creative Ad Policies</a></li>
              <li><a href="https://triplelift.com/exchange-supply-policies">Exchange Supply Policies</a></li>
              <li><a href="https://triplelift.com/user-rights-policy-and-opt-out">TripleLift Cookie Opt-out</a></li>
              </>
              )}
              {!isvideoPage && (
              <>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms-of-use">Terms Of Use</a></li>
              <li><a href="/creative_ad_policies">Creative Ad Policies</a></li>
              <li><a href="/exchange-supply-policies">Exchange Supply Policies</a></li>
              <li><a href="/user-rights-policy-and-opt-out">TripleLift Cookie Opt-out</a></li>
              </>
              )}
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              {isvideoPage && (
              <>
              <li><a href="https://academy.triplelift.com/">Native Academy</a></li>
              <li><a href="https://triplelift.com/careers">Careers</a></li>
              <li><a href="https://triplelift.com/company">Company</a></li>
              </>
              )}
              {!isvideoPage && (
              <>
              <li><a href="https://academy.triplelift.com/">Native Academy</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/company">Company</a></li>
              </>
              )}
            </ul>
          </div>
          <div>
            <h3>Certifications & Affiliations</h3>
            <ul className="certs-affils">
              <li><img alt="cmyk_tag_registration" src="/images/footer-images/cmyk_tag_registration.svg" /></li>
              <li><img alt="rgb_tag_certified" src="/images/footer-images/rgb_tag_certified.svg" /></li>
              <li><img alt="iab_uk_gold" src="/images/footer-images/iab_uk_gold.svg" /></li>
              <li><img alt="iab_member_seal" src="/images/footer-images/iab_member_seal.svg" /></li>
              <li><img alt="edaa_certifited_abc" src="/images/footer-images/edaa_certifited_abc.svg" /></li>
            </ul>
          </div>
        </div>
        <div className="footer-small-print"><img alt="white logo" src="/images/logo-white.svg" /><span>Copyright © {new Date().getFullYear()} All Rights Reserved TripleLift</span></div>
      </div>
    </footer>
    </>
  );
};
