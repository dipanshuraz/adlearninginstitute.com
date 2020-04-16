import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className='container-fluid mainColor'>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <div className=""><h1>Icon</h1>
              <p>Address</p><p>Contact</p></div>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-6">
            <table>
              <tr>
                <td>Our Institute</td>
                <td>Links</td>
                <td>Support</td>
              </tr>
              <tr>
                <td>
                  About Us
                </td>
                <td>Contact</td>
                <td>Become a Part</td>
              </tr>
              <tr>

              </tr>
            </table>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>
    )
  }
}

export default Footer
