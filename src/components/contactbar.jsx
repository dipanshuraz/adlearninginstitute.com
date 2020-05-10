import React, { Component } from 'react';

export class contactbar extends Component {
  render() {
    return (
      <div className="container-fluid bg-secondary ">
        <div className="container">
          <div className="row justify-content-around align-items-center text-white">
            <div className="row justify-content-around align-items-center w-25">
              <i class="fa-2x fab fa-facebook-square "></i>
              <i class="fa-2x fab fa-instagram "></i>
              <i class="fa-2x far fa-envelope"></i>
            </div>
            <div className="">
              <div className="row justify-content-between align-items-center">
                <h6 className="font-weight-bolder py-2 d-flex align-items-center ">
                  <i class="fa-2x fas fa-phone-square-alt "> </i>{' '}
                  <span className="px-2">
                    +91 8299379285 | Open Hours : 10am - 10pm
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contactbar;
