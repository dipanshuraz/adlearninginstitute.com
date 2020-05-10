import React, { Component } from 'react';
import StickyHeader from 'react-sticky-header';
import 'react-sticky-header/styles.css';

export class Navbar extends Component {
  render() {
    return (
      <StickyHeader
        header={
          <div className="container-fluid shadow-sm">
            <div className="container">
              <nav class="navbar navbar-expand-lg navbar-light fixed-nav ">
                <a class="navbar-brand" href="#">
                  ICON
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                  <div className="w-100 d-flex justify-content-around align-items-center text-dark">
                    <a style={{ textDecoration: 'none' }} href="#home">
                      <h4 className="text-dark">Home</h4>
                    </a>
                    <a style={{ textDecoration: 'none' }} href="#courses">
                      <h4 className="text-dark">Courses</h4>
                    </a>
                    <a style={{ textDecoration: 'none' }} href="#demo">
                      <h4 className="text-dark">Demo</h4>
                    </a>
                    <a style={{ textDecoration: 'none' }} href="#about">
                      <h4 className="text-dark">About Us</h4>
                    </a>
                    <a style={{ textDecoration: 'none' }} href="#contact">
                      <h4 className="text-dark">Contact</h4>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        }
      ></StickyHeader>
    );
  }
}

export default Navbar;
