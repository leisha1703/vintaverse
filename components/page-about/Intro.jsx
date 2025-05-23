import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-6">
                  <img src="/assets/imgs/intro/j1.png" alt="" />
                  <div className="img-icon">
                    {/* <img src="/assets/imgs/arw0.png" alt="" /> */}
                  </div>
                </div>
                <div className="col-6 mt-40">
                  <img src="/assets/imgs/intro/j2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
              Vintaverse is a Full-Stack design lab{' '}
                <span className="fw-200">Turning bold </span> ideas
                into <span className="fw-200">beautiful digital</span> realities--experiences that don't just look
                good.they feel unforgettable
              </h3>
              <p>
                Our design services starts and ends with a best-in-class
                experience strategy that builds brands. Open an online store and
                become an international seller. Your customers will enjoy
                shopping online!
              </p>
              <a href="/page-services" className="underline main-color mt-40">
                <span className="text">
                  Our Services <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
