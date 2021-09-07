import React from "react";

class LaptopBreakout extends React.Component {
  componentDidMount () {
    const $ = window.jQuery;
    const gsap = window.gsap;

    if (document.getElementById("productPageJSIndicator")) {

      window.setTimeout(function() {
        $(".loading").addClass("not-loading");
      }, 100);

      var tl = gsap.timeline({
        repeat: 0
      });

      tl.to(".loading", {
        opacity: 0,
        duration: 1,
      })

      var laptopBreakout = gsap.timeline({
        repeat: 0,
        delay: 1
      });

      laptopBreakout.from(".laptop-breakout", {
          y: 20,
          duration: .5,
        },
        "laptop-breakout-slide-up"
      )

      laptopBreakout.to(".laptop-breakout", {
          opacity: 1,
          duration: .5,
        },
        "laptop-breakout-slide-up"
      )

      laptopBreakout.from(".laptop-breakout img:nth-child(1)", {
          x: -10,
          duration: .4,
        },
        "laptop-breakout"
      )

      laptopBreakout.from(".laptop-breakout img:nth-child(2)", {
          x: -10,
          duration: .4,
        },
        "laptop-breakout"
      )

      laptopBreakout.from(".laptop-breakout img:nth-child(3)", {
          scale: .95,
          x: 15,
          duration: .4,
        },
        "laptop-breakout"
      )

      laptopBreakout.from(".laptop-breakout img:nth-child(4)", {
          scale: .9,
          y: 10,
          x: 30,
          duration: .4,
        },
        "laptop-breakout"
      )
    }
  }
  render() {
    return (
      <div className="hero-visual laptop-breakout">
        <img
          alt="Product_Hero_Comp"
          className="lb1"
          src="/images/laptop-breakout/Product_Hero_Comp.png"
        />
        <img
          alt="Product_Hero_Code"
          className="lb2"
          src="/images/laptop-breakout/Product_Hero_Code.png"
        />
        <img
          alt="Product_Hero_Pub"
          className="lb3"
          src="/images/laptop-breakout/Product_Hero_Pub.png"
        />
        <img
          alt="Product_Hero_Creat"
          className="lb4"
          src="/images/laptop-breakout/Product_Hero_Creative.png"
        />
      </div>
    );
  }
}

export default LaptopBreakout
