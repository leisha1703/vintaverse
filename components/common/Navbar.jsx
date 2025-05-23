'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

function Navbar() {
  // function handleScroll() {
  //   const bodyScroll = window.scrollY;
  //   const navbar = document.querySelector('.navbar');

  //   if (bodyScroll > 300) navbar.classList.add('nav-scroll');
  //   else navbar.classList.remove('nav-scroll');
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  // function handleDropdownMouseMove(event) {
  //   event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  // }

  // function handleDropdownMouseLeave(event) {
  //   event.currentTarget
  //     .querySelector('.dropdown-menu')
  //     .classList.remove('show');
  // }
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
    // console.log(router.pathname)
    // if(router.pathname !== '/'){
      router.push(`/#${id}`)
    // const targetElement = document.getElementById(id);
    // if (targetElement) {
    //   targetElement.scrollIntoView({ behavior: "smooth" });
    // }
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
              // onMouseLeave={handleDropdownMouseLeave}
              // onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
                        <a
      className="nav-link"
      role="button"
      onClick={() => router.push('/page-about')}
    >
      <span className="rolling-text">What We Do</span>
    </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" href="/blog-classic">
                  Blog Standerd
                </a>
                <a className="dropdown-item" href="/blog-grid-sidebar">
                  Grid With Sidebar
                </a>
                <a className="dropdown-item" href="/blog-grid-3column">
                  Grid Three Column
                </a>
                <a className="dropdown-item" href="/blog-details">
                  Blog Details
                </a>
              </div> */}
            </li>
            <li
              // onMouseLeave={handleDropdownMouseLeave}
              // onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
              
  className="nav-link"
  role="button"
  onClick={() => handleScroll("mainHomeServices")}
>
  <span className="rolling-text">Services</span>
</a>

              {/* <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/page-about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-services-details">
                    Services Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-team">
                    Our Team
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-team-details">
                    Team Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-FAQ">
                    FAQS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/page-404">
                    Error 404
                  </a>
                </li>
              </ul> */}
            </li>
            <li
              // onMouseLeave={handleDropdownMouseLeave}
              // onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
              className="nav-link"
              role="button"
              onClick={() => handleScroll("mainHomePortfolio")}
            >
                <span className="rolling-text">Portfolio</span>
              </a>
              {/* <div className="dropdown-menu">
                <a className="dropdown-item" href="/portfolio-gallery">
                  Gallery
                </a>
                <a className="dropdown-item" href="/portfolio-creative">
                  Portfolio Creative
                </a>
                <a
                  className="dropdown-item"
                  href="/portfolio-creative-carousel"
                >
                  Creative Carousel
                </a>
                <a className="dropdown-item" href="/portfolio-grid">
                  Portfolio Grid
                </a>
                <a className="dropdown-item" href="/portfolio-masonry">
                  Portfolio Masonry
                </a>
                <a className="dropdown-item" href="/project-details">
                  Project Details
                </a>
              </div> */}
            </li>
            
            {/* <li className="nav-item">
              <a className="nav-link" href="/page-contact">
                <span className="rolling-text">Contact Us</span>
              </a>
            </li> */}
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
