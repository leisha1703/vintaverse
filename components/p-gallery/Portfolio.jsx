import React from 'react';

function Portfolio() {
  return (
    <section className="work-grid pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/grid/sz.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Sizzle App</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/grid/71.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Fitness</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details2">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-2">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/grid/wp13.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>WP Center</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details4">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-end">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/grid/l8.png" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">App Design</span>
                  <h6>Live Streaming App</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details3">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5 offset-lg-2">
            <div className="item mb-80 mt-40">
              <div className="img">
                <img src="/assets/imgs/works/grid/5.jpg" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-8 offset-lg-2">
            <div className="item mt-40">
              <div className="img">
                <img src="/assets/imgs/works/grid/6.jpg" alt="" />
              </div>
              <div className="cont d-flex align-items-end mt-30">
                <div>
                  <span className="p-color mb-5 sub-title">Web Design</span>
                  <h6>Figma Digital Agency</h6>
                </div>
                <div className="ml-auto">
                  <a href="/project-details">
                    <span className="ti-arrow-top-right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;


// style={{ border: '2px solid #D73B18', borderRadius: '20px' }}