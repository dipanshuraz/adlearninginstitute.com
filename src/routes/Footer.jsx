import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center text-center flex-columns">
                <h1 className="display-4">AD Learning </h1>
                <h4>EWS 616/1550 Ratanpur Colony, Panki, Kanpur 208020</h4>
              </div>
              <div className="col-md-6 map-bg shadow"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
