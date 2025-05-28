'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

function Navbar() {

  function handleToggleNav() {
    if (
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document
        .querySelector('.navbar .navbar-collapse')
        .classList.remove('show');
    } else if (
      !document
        .querySelector('.navbar .navbar-collapse')
        .classList.contains('show')
    ) {
      document.querySelector('.navbar .navbar-collapse').classList.add('show');
    }
  }
  const router = useRouter();
  const handleScroll = (id) => {
    router.push(`/#${id}`)
  };

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-150" href="/">
          <img src="/assets/imgs/logo-light.svg" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              className="nav-item dropdown"
            >
              <a
                className="nav-link"
                role="button"
                onClick={() => router.push('/page-about')}
              >
                <span className="rolling-text">What We Do</span>
              </a>

            </li>
            <li

              className="nav-item dropdown"
            >
              <a

                className="nav-link"
                role="button"
                onClick={() => handleScroll("mainHomeServices")}
              >
                <span className="rolling-text">Services</span>
              </a>


            </li>
            <li
              className="nav-item dropdown"
            >
              <a
                className="nav-link"
                role="button"
                onClick={() => handleScroll("mainHomePortfolio")}
              >
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/page-contact"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Contact Us</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
