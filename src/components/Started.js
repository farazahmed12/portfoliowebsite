import React from "react";

const Started = () => {
  return (
    <section id="about" className="bg-primary">
      <div className="container">
        <div className="row">
          <div className="col offset-lg-8 mx-auto text-center">
            <h2 className="text-white section-heading">
              We've got what you need!
            </h2>
            <hr className="light my-4" />
            <p className="text-faded mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <a
              className="btn btn-light btn-xl js-scroll-trigger"
              role="button"
              href="#services"
            >
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Started;
