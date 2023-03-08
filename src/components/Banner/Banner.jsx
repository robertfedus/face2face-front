import React from 'react';
import logo from './../../assets/logo.jpg';
import interactPNG from './../../assets/interact.png';

const Banner = () => {
  const scrlTo = destination => {
    const findPos = obj => {
      var curtop = 0;
      if (obj.offsetParent) {
        do {
          curtop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return [curtop];
      }
    };

    window.scroll(0, findPos(document.getElementById(destination)) - 15);
  };
  return (
    <div className="banner-wrapper">
      <div className="Banner">
        <div className="center">
          <img
            src={logo}
            alt="Interact Arad Rotary Sponsored Club face2face face to face interact project"
            className="logo"
          />

          <div className="buttons">
            <button className="left" onClick={() => scrlTo('register')}>
              Înscrie-te
            </button>
            <button className="right" onClick={() => scrlTo('learn-more')}>
              Află mai multe
            </button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <img src={interactPNG} alt="Rotary Interact" className="interact-logo" />
      </div>
    </div>
  );
};

export default Banner;
