import React from 'react';
import data from '@/data/team';

function Team() {
  return (
    <section className="team section-padding" id='mainHomeTestimonials'>
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Team</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Meet our <span className="fw-200">legends.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a href="/page-team" className="butn butn-sm butn-bord radius-30">
                <span>Join to us</span>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-lg-4">
              <div className="item md-mb50">
                <div className="img">
                  <img src={item.img} alt="" />
                  <div className="info">
                    <span className="fz-12">{item.subName}</span>
                    <h6 className="fz-18">{item.name}</h6>
                  </div>
                </div>

                {/* ✅ Updated Social Links */}
                <div className="social">
                  <div className="links">
                 {item.social?.github && (
                      <a href={item.social.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                    {item.social?.linkedin && (
                      <a href={item.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    )}
                    {item.social?.instagram && (
                      <a href={item.social.instagram} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                      </a>
                    )}
                    
                  </div>
                </div>
                {/* End social section */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
