'use client';
import React from 'react';
import BouncingLine from '@/components/BouncingLine';
import originalData from '@/data/services';

function Intro2() {
  const customData = originalData.map((item, index) => {
    switch (index) {
      case 0:
        return {
          ...item,
          title: 'Time zones are no barrier.',
          desc: 'No matter where you are in the world, it’ll feel like we’re just around the corner. Our streamlined processes make time differences irrelevant.',
          icon: '/assets/imgs/icon-img/99.png',
        };
      case 1:
        return {
          ...item,
          title: 'Impossible? Not in our world.',
          desc: 'We don’t believe in limitations. We bring your designs to life exactly as envisioned—no shortcuts, no compromises, and definitely no BS.',
          icon: '/assets/imgs/icon-img/20.png',
        };
      case 2:
        return {
          ...item,
          title: 'Flexible work terms',
          desc: 'While we honor a fixed budget, we operate within a defined Time and Materials model. The terms we agree on will always be tailored to fit.',
          icon: '/assets/imgs/icon-img/30.png',
        };
      case 3:
        return {
          ...item,
          title: 'Comprehensive services,<br> all in one place',
          desc: 'From UI/UX and logo design to mobile app development, frontend and backend engineering, and ongoing technical support—we’ve got every aspect of your project covered.',
          icon: '/assets/imgs/icon-img/40.png',
        };
      default:
        return item;
    }
  });

  return (
    <section className="intro-accord" style={{ marginTop: '200px', marginBottom: '100px' }}>
      <div className="container">
        <div className="sec-head mb-80" style={{ color: 'black' }}>
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow" style={{ color: 'black' }}>
              <span
                className="rotate-text pt-80"
                style={{
                  
backgroundImage: 'none',
                    WebkitTextFillColor: 'black',
                    color: 'black',                }}
              >
                Benefits of{' '}
                <span
                  className="fw-200"
                  style={{
                    backgroundImage: 'none',
                    WebkitTextFillColor: 'black',
                    color: 'black',
                  }}
                >
                  Working With Us
                </span>
              </span>


            </h2>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center" >
            <span>WE CREATE MEMORABLE WEBSITES</span>
            <span className="thin"></span>
          </h6>
        </div>
      </div>

      <div
        className="accordion-wrap"
        style={{
          
          color: 'black',
          paddingBottom: '100px' // text color to black for all children
        }}
      >
        {customData.map((item, i) => (
          <div key={i} className="service-item" style={{ color: 'black' }}>
            {/* Pass color prop to BouncingLine to make it black */}
            <BouncingLine color="black" />
            <div className="content-row width-72">
              <div className="icon">
                <img
                  src={item.icon || item.img}
                  alt={`Icon ${item.title}`}
                  style={{ filter: 'brightness(0) saturate(100%)' }}
                />

              </div>
              <h6
                className="title"
                dangerouslySetInnerHTML={{ __html: item.title }}
                style={{
                  whiteSpace: 'normal',
                  color: 'black',
                }}
              ></h6>

              <div className="text-content2" >
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
