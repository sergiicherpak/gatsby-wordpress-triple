import React from "react";

class DownArrow extends React.Component {
  componentDidMount () {
    const gsap = window.gsap;
    const downarrowTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".down-arrow",
        start: "20px center",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    });

    downarrowTL.to(
      ".down-arrow",
      {
        opacity: 0,
        duration: 2,
        y: 100,
      },
      0.5
    );
  }
  render() {
    return (
      <div className="down-arrow">
        <img alt="arrow down" className="arrow-down" src="/images/arrow-down.svg" />
      </div>
    );
  }
}

export default DownArrow
