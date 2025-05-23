import React from 'react';

function Feat() {
  return (
    <section className="feat" style={{ marginBottom: '80px' }}>
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Our <span className="fw-200">Process</span>
              </span>
            </h2>
            {/* <div className="ml-auto vi-more">
              <a href="#0" className="butn butn-sm butn-bord radius-30">
                <span>View All</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div> */}
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Our approach</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row" style={{ width:' 115%' , }}>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <span className="mb-30 p-color">01 .</span>
              <h6 className="mb-20">Research and Planning </h6>
              <p>Project Planning</p>
              <p>Expectations Setting</p>
              <p>Competitor Analysis</p>
              <p>Digital Strategy</p>
              <p>UX Research</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <span className="mb-30 p-color">02 .</span>
              <h6 className="mb-20">Creativity and UX Design</h6>
              <p>Visual Moodboards</p>
              <p>User Interface Design</p>
              <p>User Experience Design</p>
              <p>Interaction Design</p>
              <p>Design System</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 sm-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <span className="mb-30 p-color">03 .</span>
              <h6 className="mb-20">Technology and Development</h6>
              <p>Web Development</p>
              <p>Front-end Development</p>
              <p>Custom CMS Integrations</p>
              <p>E-commerce Development</p>
              <p>SAAS Implementation</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/6.png" alt="" />
              </div>
              <span className="mb-30 p-color">04 .</span>
              <h6 className="mb-20">Testing and Launch</h6>
              <p>Usability testing</p>
              <p>Performance testing</p>
              <p>Functionality testing</p>
              <p>Security testing</p>
              <p>Integration testing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feat;
