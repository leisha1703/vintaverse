'use client';
import React from 'react';
import BouncingLine from '@/components/BouncingLine';
import originalData from '@/data/services';

function Intro2() {
  // Add icon override inside switch, no layout change
  const customData = originalData.map((item, index) => {
    switch (index) {
      case 0:
        return {
          ...item,
          title: 'Time zones are no barrier.',
          desc: 'No matter where you are in the world, it’ll feel like we’re just around the corner. Our streamlined processes make time differences irrelevant.',
          icon: '/assets/imgs/icon-img/99.png', // your custom icon
        };
      case 1:
        return {
          ...item,
          title: 'Impossible? Not in our world.',
          desc: 'We don’t believe in limitations. We bring your designs to life exactly as envisioned—no shortcuts, no compromises, and definitely no BS.',
          icon: '/assets/imgs/icon-img/20.png', // custom icon
        };
      case 2:
        return {
          ...item,
          title: 'Flexible work terms',
          desc: 'While we honor a fixed budget, we operate within a defined Time and Materials model. The terms we agree on will always be tailored to fit.',
          icon: '/assets/imgs/icon-img/30.png', // custom icon
        };
      case 3:
        return {
          ...item,
          title: 'Comprehensive services, all in one place',
          desc: 'From UI/UX and logo design to mobile app development, frontend and backend engineering, and ongoing technical support—we’ve got every aspect of your project covered.',
          icon: '/assets/imgs/icon-img/40.png', // custom icon
        };
      default:
        return item; // no change
    }
  });

  return (
    <section className="intro-accord" style={{ marginTop: '100px', marginBottom: '100px' }}>
      {/* Header in standard-width container */}
      <div className="container">
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
      </div>

      {/* Accordion in full-width container with padding */}
      <div
        className="accordion-wrap"
        style={{
          maxWidth: '100%',
        }}
      >
        {customData.map((item, i) => (
          <div key={i} className="service-item">
            <BouncingLine />
            <div className="content-row">
              <div className="icon">
                <img
                  src={item.icon || item.img}
                  alt={`Icon ${item.title}`}
                />
              </div>
              <h6
                className="title"
                dangerouslySetInnerHTML={{ __html: item.title }}
                style={{
                  maxWidth: '150px', // adjust width as needed
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                }}
              ></h6>

              <div className="text-content">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Intro2;
