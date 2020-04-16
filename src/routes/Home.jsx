import React, { Component } from 'react'

export class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="bg-light d-flex justify-content-center py-2">
          <p className="lead">
            How to Enroll Your Child to a Class? <button className='btn btn-outline-success badge badge-pill'>Join Now</button>
          </p>
        </div>
        <div className='container'>
          <div className="row">
            <div className="col-md-10">
              <h2>TALLY COURSE FEATURES</h2>
              <div className="row">
                <div className="col-md-4">
                  <h1>Icon</h1>
                Planned Curriculum
                <p>The entire Tally Online Course is designed to meet the requirements of industry and are approved from C.A. & Business Experts.</p>
                </div>
                <div className="col-md-4">
                  <h1>Icon</h1>
                Effective Lessons
                <p>Topics are explained through step by step process in a very simple language which is easy for students to understand and learn.</p>
                </div>
                <div className="col-md-4">
                  <h1>Icon</h1>
                Certification
                <p>We conduct online examination in MCQ Format and you will be awarded with Tally Expert certificate on passing exams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
