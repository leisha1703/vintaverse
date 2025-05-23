import React from 'react';

function Intro() {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8">
            <div className="row lg-marg">
              <div className="col-md-6">
                <div>
                  <h6 className="sub-title main-color mb-15">Description</h6>
                  <h3 className="mb-30">
                    We believe that every line of code{' '}
                    <span className="fw-300">and every effort crafts powerful digital experiences.</span>{' '}
                    <span className="fw-300"></span>
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <p className="mb-15">
Designed for thumbs, built for speed — we create mobile-first websites that are fast, functional,beautifully responsive, and brand-focused.</p>
                  {/* <p>
                    Taken possession of my entire soul, like these sweet
                    mornings of spring which i enjoy with my whole.
                  </p> */}

                  {/* <div className="mt-30">
                    <ul className="rest dot-list">
                      <li className="mb-10">React JS</li>
                      <li className="mb-10">Next JS</li>
                      <li className="mb-10">Node JS</li>
                      <li className="mb-10">WordPress</li>
                      <li className="mb-10">Shopify</li>
                      <li className="mb-10">Javascript</li>
                      <li className="mb-10">Tailwind</li>
                      <li className="mb-10">Tailwind</li>
                      <li className="mb-10">Tailwind</li>
                      <li className="mb-10">Tailwind</li>
                      <li>HTML5 & CSS3</li>
                    </ul>
                    
                  </div> */}
                  <div className="mt-30 flex gap-x-10">
  <ul className="rest dot-list" style={{ flex: '1 1 50%' }}>
    <li>User interface</li>
    <li>User experience</li>
    <li>Websites</li>
    <li>Visual design</li>
    <li>Prototypes</li>
    
  </ul>
  <ul className="rest dot-list" style={{ flex: '1 1 50%' }}>
    <li>Web & Mobile apps</li>
    <li>SaaS product design</li>
    <li>Design systems
</li>
    <li>Interaction design
</li>
    
  </ul>
</div>

                </div>
              </div>
            </div>
            <div className="numbers mt-80 md-mb50">
              <div className="row lg-marg">
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20 sm-mb30">
                    <div>
                      <h3 className="fw-300 mb-10">100%</h3>
                      <h6 className="p-color sub-title">
                        Clients Satisfaction
                      </h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10">7K +</h3>
                      <h6 className="p-color sub-title">Projects Completed</h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img src="/assets/imgs/intro/2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
