import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light bg-dark navbar-expand-lg fixed-top"
      id="mainNav"
    >
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">
          Portfolio Website
        </a>
        <button
          data-toggle="collapse"
          data-target="#navbarResponsive"
          className="navbar-toggler navbar-toggler-right"
          type="button"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-align-justify text-light"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link js-scroll-trigger text-light"
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link js-scroll-trigger text-light"
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link js-scroll-trigger text-light"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link js-scroll-trigger text-light"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
