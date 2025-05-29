'use client';

import React, { useState } from 'react';

function Contact() {
  const [interests, setInterests] = useState([]);
  const [budget, setBudget] = useState('');

  const interestOptions = [
    "Site from scratch",
    "UX/UI design",
    "Product design",
    "Webflow site",
    "Motion design",
    "Branding",
    "Mobile development",
    "Web development"
  ];

  const budgetOptions = [
    "10–20k",
    "30–40k",
    "40–50k",
    "50–100k",
    ">100k"
  ];

  const toggleInterest = (item) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleBudgetSelect = (item) => {
    setBudget(item);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      interests,
      budget
    };

    try {
      const response = await fetch('https://formspree.io/f/xrbqwwjz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('There was an error sending your message.');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send message.');
    }
  };


  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            {/* LEFT CONTACT INFO BLOCK */}
            <div className="sec-head info-box full-width md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:+919317867676">+91 9317867676</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Address</h6>
                <p>E-55, Phase 8 Industrial Area, Mohali</p>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <p>Contact@vintaverse.com</p>
              </div>
              <div className="morinfo mt-30  ">
                
                <h6>Find Us on:</h6>
              </div>
              <div className="social-icon mt-30 ">
                {/* Social Links */}
                <a href="https://github.com/Vintaverse-k" target="_blank" rel="noopener noreferrer" className="hover-anim"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/company/vintaverse" target="_blank" rel="noopener noreferrer" className="hover-anim"><i className="fab fa-linkedin"></i></a>
                {/* <a href="https://www.behance.net/contactvintave" target="_blank" rel="noopener noreferrer" className="hover-anim"><i className="fab fa-behance"></i></a> */}
                <a href="https://www.instagram.com/vintaverse.ai/" target="_blank" rel="noopener noreferrer" className="hover-anim"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-20">
                <h6 className="sub-title main-color mb-15 text-center">Let&lsquo;s Chat</h6>
                <h3 className="text-u ls1 text-center">Send a <span className="fw-200">message</span></h3>
              </div>

              <form id="contact-form" className="form2" onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="controls row">
                  
                  {/* Interests Section */}
                  <div className="col-12">
                    <label className="mb-10 fw-500 d-block">I'm interested in…</label>
                    <div className="d-flex flex-wrap gap-2 mb-15">
                      {interestOptions.map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => toggleInterest(item)}
                          className={`btn rounded-pill px-4 py-2 mt-10 ${interests.includes(item) ? 'text-white' : ''}`}
                          style={{
                            borderRadius: '30px',
                            border: '1px solid #fff',
                            backgroundColor: interests.includes(item) ? '#fd5b38' : 'transparent',
                            color: interests.includes(item) ? '#fff' : '#fff',
                          }}
                        >
                          {item}
                        </button>
                      ))}

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-15">
                      <input id="form_name" type="text" name="name" placeholder="Name" required />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-15">
                      <input id="form_email" type="email" name="email" placeholder="Email" required />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-15">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>


                  {/* Budget Section */}
                  <div className="col-12 ">
                    <label className="mb-10 fw-500 d-block mb-15">Project budget (USD)</label>
                    <div className="d-flex flex-wrap gap-2 mb-15">
                      {budgetOptions.map((item) => (
                        <button
                          type="button"
                          key={item}
                          onClick={() => handleBudgetSelect(item)}
                          className={`btn rounded-pill px-4 py-2 ${budget === item ? 'text-white' : ''}`}
                          style={{
                            borderRadius: '30px',
                            border: '1px solid #fff',
                            backgroundColor: budget === item ? '#fd5b38' : 'transparent',
                            color: budget === item ? '#fff' : '#fff',
                          }}
                        >
                          {item}
                        </button>
                      ))}

                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea>
                    </div>
                    <div className="mt-30">
                      <button type="submit" className="butn butn-full butn-bord radius-30">
                        <span className="text">Let's Talk</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
