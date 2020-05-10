import React, { Component } from 'react';
import Card from '../components/card';
import ScrollableAnchor from 'react-scrollable-anchor';
import ContactBar from '../components/contactbar';
import Footer from './Footer';

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <ScrollableAnchor id={'home'}>
          <div className="row">
            <div className="container-fluid"></div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'courses'}>
          <div className="row">
            <div className="container-fluid">
              <div className="container courses">
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col my-3">
                    <Card
                      title={'TALLYACE'}
                      desc={
                        "It is a basic level certification and certifies a candidate's skill on Computerized Accounting and Tally. This certification assists candidates to become job-ready and opens up multiple career options."
                      }
                    />
                  </div>
                  <div className="col my-3">
                    <Card
                      title={'TALLYACE'}
                      desc={
                        "It is a basic level certification and certifies a candidate's skill on Computerized Accounting and Tally. This certification assists candidates to become job-ready and opens up multiple career options."
                      }
                    />
                  </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col my-3">
                    <Card
                      title={'TALLYACE'}
                      desc={
                        "It is a basic level certification and certifies a candidate's skill on Computerized Accounting and Tally. This certification assists candidates to become job-ready and opens up multiple career options."
                      }
                    />
                  </div>
                  <div className="col my-3">
                    <Card
                      title={'TALLYACE'}
                      desc={
                        "It is a basic level certification and certifies a candidate's skill on Computerized Accounting and Tally. This certification assists candidates to become job-ready and opens up multiple career options."
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'contact'}>
          <div className="row">
            <div className="container-fluid">
              <div className="row text-center align-items-center justify-content-center flex-column">
                <h1>Contact Us</h1>
                <div className="container">
                  <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Check me out
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'footer'}>
          <div className="row">
            <div className="container-fluid footer">
              <div className="row my-3">
                <Footer />
              </div>

              <div className="row">
                <ContactBar />
              </div>
            </div>
          </div>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default Home;
