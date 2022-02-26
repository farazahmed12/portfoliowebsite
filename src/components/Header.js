import React from "react";

const Header = () => {
  return (
    <header
      className="masthead text-center text-white d-flex"
      style={{ backgroundImage: "url('assets/img/header.jpg')" }}
    >
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>React Porfolio Website</strong>
            </h1>
            <hr />
          </div>
        </div>
        <div className="col-lg-8 mx-auto">
          <p className="text-faded mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo.
          </p>
          <a
            className="btn btn-primary btn-xl js-scroll-trigger"
            role="button"
            href="#services"
          >
            Find Out More
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
