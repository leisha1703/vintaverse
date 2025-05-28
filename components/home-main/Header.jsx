'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import VantaBackground from './VantaBackground';

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

  return (
    <div className="header-wrapper position-relative w-100 overflow-hidden">
      <div className="position-absolute top-0 start-0 w-100 h-100 z-0 pointer-events-none">
        <VantaBackground />
      </div>

      <div className="header main-header valign position-relative z-1 bg-transparent">
        <div className="container ontop">
          <div className="row">
            <div className="col-lg-11 mt-8">
              <div className="caption">
                <h1>Your creative partner in the</h1>
                <div className="d-flex align-items-lg-end align-items-start flex-column flex-lg-row sub-heading-container">
                  <div>
                    <h1 className="nowrap">
                      <span className="main-color">digital</span> world.
                    </h1>
                  </div>
                  <div>
                    <div className="text ms-md-3 sub-header">
                      <p>
                        Vintaverse is a creative digital agency specializing in branding, UI/UX design, mobile and web development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-20 mt-lg-80">
            <div className="col-6 order-1">
              <div
                className="icon-img bounce-arrow d-flex cursor-pointer"
                onClick={() => {
                  const nextSection = document.getElementById('mainHomeAboutUs');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <img src="/assets/imgs/icon-img/Union.png" alt="" />
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end order-2">
              <div className="info">
                <h2 className="mb-10">
                  7k <span>+</span>
                </h2>
                <h6>
                  Projects completed <br />
                  <span className="main-color">successfully</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
