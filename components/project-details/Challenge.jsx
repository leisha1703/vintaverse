import React from 'react';

function Challenge() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Category :</span>
                <h6>Mobile App</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">App :</span>
                <h6>Sizzle App</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Start Date :</span>
                <h6>7 August 2021</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Tools :</span>
                <h6>Figma</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">01 . The Challenge</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">
                    {/* The goal is there are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration
                    in some form, by injected humour, or randomised words which
                    don&lsquo;t look even slightly believable. */}
                    Modern dating is flooded with noise — endless swipes, recycled bios, and profiles that don’t tell the real story. It’s easy to feel like authenticity has been lost in the scroll.
                  </h5>
                  <p className="fz-18">
                    {/* There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&lsquo;t look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there
                    isn&lsquo;t anything embarrassing hidden in the middle of
                    text. */}
                    At Sizzle, we saw the disconnect: too many apps focus on quantity, not quality. The challenge? Creating a space where real people can find real connection — no filters, no forced lines, no guesswork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
