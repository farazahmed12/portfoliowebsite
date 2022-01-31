import React from "react";

const Service = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">At Your Service</h2>
            <hr className="my-4" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 text-center">
            <div className="mx-auto service-box mt-5">
              <i
                className="fa fa-diamond fa-4x text-primary mb-3 sr-icons"
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-once="true"
              ></i>
              <h3 className="mb-3">Sturdy Templates</h3>
              <p className="text-muted mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="mx-auto service-box mt-5">
              <i
                className="fa fa-paper-plane fa-4x text-primary mb-3 sr-icons"
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-delay="200"
                data-aos-once="true"
              ></i>
              <h3 className="mb-3">Ready to Ship</h3>
              <p className="text-muted mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="mx-auto service-box mt-5">
              <i
                className="fa fa-newspaper-o fa-4x text-primary mb-3 sr-icons"
                data-aos="zoom-in"
                data-aos-duration="200"
                data-aos-delay="400"
                data-aos-once="true"
              ></i>
              <h3 className="mb-3">Up to Date</h3>
              <p className="text-muted mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center">
            <div className="mx-auto service-box mt-5">
              <i
                className="fa fa-heart fa-4x text-primary mb-3 sr-icons"
                data-aos="fade"
                data-aos-duration="200"
                data-aos-delay="600"
                data-aos-once="true"
              ></i>
              <h3 className="mb-3">Made with Love</h3>
              <p className="text-muted mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
