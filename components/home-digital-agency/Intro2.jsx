'use client';
import React from 'react';

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    event.currentTarget.parentElement.classList.add('active');
    event.currentTarget.nextElementSibling.style.maxHeight = '300px';
    event.currentTarget.nextElementSibling.classList.add('active');
  }
  return (
    <section className="intro-accord">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
            <img src="/assets/imgs/weBelive.png" alt="" />
              {/* <img src="/assets/imgs/arw2.png" alt="" /> */}
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Benefits of
working with us</h6>
                <h3>
                  The creative process behind <br /> our digital marketing.
                </h3>
              </div>
              <div className="accordion bord">
                <div className="item active wow fadeInUp" data-wow-delay=".1s">
                  <div onClick={openAccordion} className="title">
                    {/* <h6>Designing Content With AI Power</h6> */}
                    <h6>Time zones are no barrier.</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      {/* Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole. */}
                      {/* Empowered by intelligent creativity, like the refreshing clarity of spring mornings that inspire my entire being. */}
                      No matter where you are in the world, it’ll feel like we’re just around the corner. Our streamlined processes make time differences irrelevant.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div onClick={openAccordion} className="title">
                    {/* <h6>Talented, Professional & Expert Team</h6> */}
                    <h6>Impossible? Not in our world.</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      {/* Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole. */}
                      {/* A team whose expertise commands confidence, much like the quiet assurance of a perfect spring day. */}
                      We don’t believe in limitations. We bring your designs to life exactly as envisioned—no shortcuts, no compromises, and definitely no BS.
                    </p>
                  </div>
                </div>

                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    {/* <h6>We Build and Activate Brands</h6> */}
                    <h6>Flexible work terms</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      {/* Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole. */}
                      {/* We bring brands to life with a touch that stirs the soul—like the gentle awakening of a spring dawn. */}
                      While we honor a fixed budget, we operate within a defined Time and Materials model. The terms we agree on will always be tailored to fit
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".5s">
                  <div onClick={openAccordion} className="title">
                    {/* <h6>We Build and Activate Brands</h6> */}
                    <h6>Comprehensive services, all in one place</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="">
                      {/* Taken possession of my entire soul, like these sweet
                      mornings of spring which i enjoy with my whole. */}
                      {/* We bring brands to life with a touch that stirs the soul—like the gentle awakening of a spring dawn. */}
From UI/UX and logo design to mobile app development, frontend and backend engineering, and ongoing technical support—we’ve got every aspect of your project covered.                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
