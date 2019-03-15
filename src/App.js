import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Products from './components/products/products';
import Cart from './components/cart/cart';
import "./App.css";
class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Products} />
              <Route path="/cart" component={Cart}/>
            </Switch>

          </div>
        </Router>
    );
  }
}

export default App;
