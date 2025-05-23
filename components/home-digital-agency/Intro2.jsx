'use client';
import React from 'react';

function Intro2() {
  function openAccordion(event) {
    document.querySelectorAll('.accordion-info').forEach((element) => {
      element.classList.remove('active');
      element.style.maxHeight = 0;
      element.parentElement.classList.remove('active');
    });
    const current = event.currentTarget.nextElementSibling;
    event.currentTarget.parentElement.classList.add('active');
    current.style.maxHeight = current.scrollHeight + 'px';
    current.classList.add('active');
  }

  return (
    <section className="intro-accord" style={{ marginBottom: '80px' }}>
      <div className="container">
        {/* Section Header with animation like "Our Process" */}
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Benefits of <span className="fw-200">Working With Us</span>
              </span>
            </h2>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>The creative process behind our digital marketing</span>
            <span className="thin"></span>
          </h6>
        </div>

        {/* Full-width accordion (no image column) */}
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="accordion bord">
              {[
                {
                  title: "Time zones are no barrier.",
                  content:
                    "No matter where you are in the world, it’ll feel like we’re just around the corner. Our streamlined processes make time differences irrelevant.",
                  delay: ".1s",
                },
                {
                  title: "Impossible? Not in our world.",
                  content:
                    "We don’t believe in limitations. We bring your designs to life exactly as envisioned—no shortcuts, no compromises, and definitely no BS.",
                  delay: ".3s",
                },
                {
                  title: "Flexible work terms",
                  content:
                    "While we honor a fixed budget, we operate within a defined Time and Materials model. The terms we agree on will always be tailored to fit.",
                  delay: ".5s",
                },
                {
                  title: "Comprehensive services, all in one place",
                  content:
                    "From UI/UX and logo design to mobile app development, frontend and backend engineering, and ongoing technical support—we’ve got every aspect of your project covered.",
                  delay: ".7s",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`item ${index === 0 ? 'active' : ''} wow fadeInUp`}
                  data-wow-delay={item.delay}
                >
                  <div onClick={openAccordion} className="title cursor-pointer d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">{item.title}</h6>
                    <span className="ico ti-plus"></span>
                  </div>
                  <div
                    className={`accordion-info${index === 0 ? ' active' : ''}`}
                    style={{
                      maxHeight: index === 0 ? '300px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                    }}
                  >
                    <p className="mt-15">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
