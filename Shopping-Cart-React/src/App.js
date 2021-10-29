// import logo from './logo.svg';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Home from './Home';
// import Card from './Card';
import Payment from './Payment'
// import {CartProvider} from 'react-use-cart';
import {BrowserRouter as Router,Route, Switch,Link} from 'react-router-dom';
import Provider from './Provider'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Provider}/>
        {/* <Route exact path = "/payment" component = {()=> <Payment authorized = {false}/>}/> */}
        <Route exact path = "/payment" component = {Payment}/>
     </Switch>
    </Router>
    );
}

export default App;
 