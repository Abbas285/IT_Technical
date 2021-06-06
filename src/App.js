
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './templete/Home'
import About from './templete/About'
import Services from './templete/Services'
import Contact from './templete/Contact'
import Navbar from './templete/NaveBar';
import Fotter from './templete/Footer'
import {Switch ,Route,Redirect} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
      <Switch>ss
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Services}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
      <Fotter/>
  </>
  );
}

export default App;
