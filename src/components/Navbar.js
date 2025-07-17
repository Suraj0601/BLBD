import React from 'react';
import logo from './assets/blbd-hindi-logo.png'; // Place your logo here or use public/logo.png
import carousel from './assets/service-5.jpg'
import carousel2 from './assets/service.jpg'

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bgLight py-1 border-bottom">
        <div className="container d-flex justify-content-between align-items-center small">
            <div className="d-flex flex-wrap">
                            <a href="#" className="text-dark me-4"><i className="fas fa-map-marker textColor me-2"></i>Find A Location</a>
                            <a href="#" className="text-dark me-4"><i className="fas fa-phone-alt textColor me-2"></i>+91 920-495-1513</a>
                            <a href="#" className="text-dark me-0"><i className="fas fa-envelope textColor me-2"></i> blbd.edu@gmail.com</a>
            </div>
          {/* <div>
             <a href="https://www.facebook.com/profile.php?id=61578119375234" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/blbdranchi/" className="btn btn-light btn-square border rounded-circle nav-fill me-3"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/babu-lal-badamiya-devi-institute-of-health-630690373/" className="btn btn-light btn-square border rounded-circle nav-fill me-0"><i className="fab fa-linkedin-in"></i></a>
          </div> */}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          {/* Logo and Company Name */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img src={logo} alt="Logo" className="me-2" />
            <div className="d-flex flex-column lh-sm">
                {/* <span className="fw-bold fs-5">Babu Lal Badamiya Devi</span>
                <span className="text-muted small">Institute of Health, Ranchi</span> */}
            </div>
            </a>

          {/* Toggler for mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle no-arrow"
                    href="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Education<i className="bi bi-caret-down-fill ms-1"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/services/nursing">ANM</a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">GNM</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">B.sc Nursing</a></li>
                </ul>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* slide Start */}
       <div className="container-fluid position-relative px-1">
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={carousel} className="d-block w-100" alt="image1" style={{height:'35rem'}}/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={carousel2} className="d-block w-100" alt="image2" style={{height:'35rem'}}/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel} className="d-block w-100" alt="image3" style={{height:'35rem'}}/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </div>
    </>
  );
};

export default Header;
