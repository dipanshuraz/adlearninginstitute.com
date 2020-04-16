import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className="row">
          <div className="col-12">
            <ul className='d-flex bg-dark text-white justify-content-around align-items-center pt-3'>
              <li>+91 8299379285</li> |
         <li>dipanshuraz2@gmail.com</li>
            </ul>
          </div>
          <nav class="bg-success d-flex justify-content-center">
            <Link to='/'>Home</Link>
            <Link to='/demo'>Book Demo</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/courses'>Courses</Link>
          </nav>
        </div>
      </div >
    )
  }
}

export default Navbar
