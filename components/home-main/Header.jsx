'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const scrollToIntro = () => {
    const section = document.getElementById('mainHomeAboutUs');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="header main-header bg-img valign"
      data-background="/assets/imgs/background/bggg.png"
      data-overlay-dark="7"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-11">
            <div className="caption">
              <h1>Your creative partner in the</h1>
              <div className="d-flex align-items-end">
                <div>
                  <h1 className="nowrap">
                    <span className="main-color">digital</span> world.
                  </h1>
                </div>
                <div>
                  <div className="text ml-30">
                    <p>
                      Vintaverse is a creative digital agency specializing in branding, UI/UX design, mobile and web development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Arrow + Info Row */}
        <div className="row mt-80">
          <div className="col-lg-6 order-md-2">
            <div className="icon-img" onClick={scrollToIntro}>
              <img
                src="/assets/imgs/icon-img/arrow-down-big.png"
                alt="Scroll down"
                className="bounce-arrow"
              />
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end order-md-1">
            <div className="info">
              <h2 className="mb-10">7k +</h2>
              <h6>
                Projects completed <br />
                <span className="main-color">successfully</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
