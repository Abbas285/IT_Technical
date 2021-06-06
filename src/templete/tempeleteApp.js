import React from 'react'
import './tempeletecss.css';
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import {Switch ,Route,Redirect} from 'react-router-dom'
function tempeleteApp() {
    return (
      <>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/service" component={Services}/>
          <Route exact path="/contact" component={Contact}/>
          <Redirect to="/"/>
      </Switch>
      </>
    )
}

export default tempeleteApp
