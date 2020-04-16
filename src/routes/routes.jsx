import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import NavBar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Courses from './Courses'
import Demo from './Demo'
import NotFound from './NotFound'


function routes() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/courses' component={Courses} />
        <Route path='/demo' component={Demo} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>

  )
}

export default routes
