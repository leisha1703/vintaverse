'use client';
import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Pagination, Navigation],
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.testimonials-minim .swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <section className="testimonials" style={{display:'none'}}>
      <div className="container section-padding bord-bottom-grd">
        <div className="row">
          <div className="col-lg-4 md-mb50">
            <div className="img-full">
              <div className="fit-img">
                <img src="/assets/imgs/testim/bg.jpg" alt="" />
              </div>
              <div className="fix-img">
                <img src="/assets/imgs/arw1.svg" alt="icon" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont-full">
              <div
                className="testim-swiper"
                data-carousel="swiper"
                data-loop="true"
                data-space="30"
              >
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-testim"
                  className="swiper-container"
                  data-swiper="container"
                >
                  <SwiperSlide>
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <p  style={{fontSize: '16px',}}>
                           With over 8+ years of experience in the IT sector, Vinta Kumari is a seasoned UI/UX designer known for crafting intuitive and visually compelling digital experiences. Her expertise spans across website design, mobile app UI (both iOS and Android), branding graphics, and professional presentations.
Vinta has led the creative direction for over 1500+ projects, combining deep user research with elegant design systems to elevate brands and products. Proficient in tools like Figma, Sketch, Adobe Photoshop, and Illustrator, she brings a modern, user-centered approach to every interface.
Whether designing complex applications or marketing visuals, Vinta is passionate about turning ideas into meaningful user journeys with high aesthetic and functional value.                          </p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <div className="fit-img circle">
                              <img src="/assets/imgs/team/v1.jpg" alt="" />
                            </div>
                          </div>
                          <div className="ml-20">
                            <h5>Vinta Kumari</h5>
                            <span className="sub-title main-color">
                              Founder & CEO
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <div className="content">
                        <div className="text">
                          <p style={{fontSize: '16px',}}>
                           A visionary leader with a passion for both speed and precision, Diwakar Kalia brings a rare blend of competitive spirit and strategic thinking to the digital world. A professional racer since 2010, Diwakar's journey into tech was fueled by the same adrenaline and discipline that powers him on the track.
With over 7 years of hands-on experience in project management, Diwakar has successfully led and delivered a wide spectrum of digital projects — from eCommerce platforms and CMS websites to on-demand delivery apps and blockchain-based solutions. His ability to bridge creativity, technology, and client vision has helped Vintaverse build a strong reputation for delivering high-quality, on-time solutions.
As the CEO of Vintaverse, Diwakar is not just a leader but a driving force behind a team that thrives on innovation, clarity, and client success. His commitment to seamless execution and user-centered design continues to set the tone for every project the agency takes on.b done.
                          </p>
                        </div>
                        <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
                          <div>
                            <div className="fit-img circle">
                              <img src="/assets/imgs/team/ddd.jpg" alt="" />
                            </div>
                          </div>
                          <div className="ml-20">
                            <h5>Diwakar Kalia</h5>
                            <span className="sub-title main-color">
                              Founder & CEO
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="256.721"
                  height="208.227"
                  viewBox="0 0 256.721 208.227"
                  className="qout-svg"
                >
                  <path
                    data-name="Path"
                    d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
                    transform="translate(121.55 640.568)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1"
                    opacity="0.322"
                  ></path>
                </svg>
              </div>
              <div className="swiper-arrow-control control-abslout">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
              <div className="circle-blur">
                <img src="/assets/imgs/patterns/blur1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
