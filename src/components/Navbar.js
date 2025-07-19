import React from 'react';
import logo from './assets/blbd-hindi-logo.png'; // Place your logo here or use public/logo.png
import carousel from './assets/med.jpg'
import carousel2 from './assets/clg.jpg'
import carouse3 from './assets/med2.jpg'

const Header = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bgLight py-1 border-bottom">
        <div className="container d-flex justify-content-between align-items-center small">
            <div className="d-flex flex-wrap">
                            <a href="#" className="text-dark me-4"><i className="fas fa-map-marker textColor me-2"></i>Get Location</a>
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
            <img src={logo} alt="Logo" className="me-2 logLeft" />
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
            <ul className="navbar-nav mb-2 mb-lg-0">
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
                    Courses
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/services/nursing">ANM</a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">GNM</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">B.sc Nursing</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">Paramedical</a></li>
                </ul>
                </li>
                {/* Prabha */}
                

                <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle no-arrow"
                    href="#"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Approvals
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/services/nursing">Courses Recognised by Jharkhand State Medical Faculty</a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">ANM (INC Approved)</a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">GNM (INC Approved)</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">B.sc Nursing (INC Approved)</a></li>
                </ul>
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
                    Admissions
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/services/nursing">Eligibility Criteria</a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">Application Procss</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">Important Dates</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">Scholarships</a></li>
                </ul>
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
                    Campus Life
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/services/nursing">Student Activities and Clubs</a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">Events and cultural Programs</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">Sports Facilities</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">Photo Gallery</a></li>
                </ul>
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
                    News and Updates
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/services/nursing">Course News</a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">Announcements</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">Exam Results</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">Blog</a></li>
                </ul>
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
                    Career
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/services/nursing">Placement Assistance</a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">Alumni Success Stories</a></li>
                    <li><a className="dropdown-item" href="/services/ayurveda">Internship Opportunities</a></li>
                </ul>
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
                    About Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                    <li><a className="dropdown-item" href="/services/nursing">Alumni Registration </a></li>
                    <li><a className="dropdown-item" href="/services/paramedical">Grivance Commitee</a></li>
                </ul>
                </li>

                {/* prabha end */}

                
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li> */}
            </ul>

          </div>
        </div>
      </nav>
      {/* slide Start */}
      <div className="container-fluid px-0">
  <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
    
    {/* Indicators */}
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    {/* Carousel Items */}
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="10000">
        <img src={carousel} className="d-block w-100 img-fluid" alt="image1" style={{ maxHeight: '35rem', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
        <img src={carousel2} className="d-block w-100 img-fluid" alt="image2" style={{ maxHeight: '35rem', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={carouse3} className="d-block w-100 img-fluid" alt="image3" style={{ maxHeight: '35rem', objectFit: 'cover' }} />
        <div className="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>

    {/* Controls */}
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
