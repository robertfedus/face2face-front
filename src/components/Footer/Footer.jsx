import React from 'react';

const Footer = () => {
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
    <div className="Footer">
      <h1 id="coding" align="center">
        Face2Face
      </h1>

      <div className="container">
        <div className="left">
          <span onClick={() => scrlTo('register')}>Înscrie-te</span>
        </div>

        <div className="container2">
          <div className="right">
            <span onClick={() => scrlTo('learn-more')}>Află mai multe</span>
          </div>
        </div>
      </div>
      <div className="drepturi">
        <p className="cc">Made with LOVE ❤️ by Interact Arad</p>
      </div>
    </div>
  );
};

export default Footer;
