'use client';

import React, { useState } from 'react';

function Contact() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('email', e.target.email.value);
    formData.append('subject', e.target.subject.value);
    formData.append('message', e.target.message.value);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }

    try {
      const response = await fetch('https://formspree.io/f/myzwqqad', {
        method: 'POST',
        body: formData
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
              <div className="social-icon mt-50">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover-anim"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/company/vintaverse" target="_blank" rel="noopener noreferrer" className="hover-anim"><i className="fab fa-dribbble"></i></a>
                <a href="https://www.behance.net/contactvintave" target="_blank" rel="noopener noreferrer" className="hover-anim"><i className="fab fa-behance"></i></a>
                <a href="https://www.instagram.com/vintaverse.ai/" target="_blank" rel="noopener noreferrer" className="hover-anim"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head">
                <h6 className="sub-title main-color mb-15">Let&rsquo;s Chat</h6>
                <h3 className="text-u ls1">Send a <span className="fw-200">message</span></h3>
              </div>

              <form id="contact-form" className="form2" onSubmit={handleSubmit}>
                <div className="messages"></div>

                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input id="form_name" type="text" name="name" placeholder="Name" required />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <input id="form_email" type="email" name="email" placeholder="Email" required />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea id="form_message" name="message" placeholder="Message" rows="4" required></textarea>
                    </div>
                  </div>

                  {/* File Upload Section */}
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="resume-upload" className="btn d-inline-flex align-items-center gap-2 border px-4 py-2" style={{ color:'#fff',borderRadius: '30px', cursor: 'pointer' }}>
                        <i className="fas fa-paperclip"></i> Send an attachment
                      </label>
                      <input
                        id="resume-upload"
                        name="file"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        style={{ display: 'none' }}
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                      />
                      {selectedFile && <p className="mt-2 small">{selectedFile.name}</p>}
                    </div>
                  </div>

                  <div className="col-12">
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
