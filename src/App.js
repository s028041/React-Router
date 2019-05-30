import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop"; //Link
import ItemDetail from "./ItemDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h3>
      Project is to see how react libary - React Router works and fetch api
      calls based on route parameters :)
    </h3>
  </div>
);

export default App;
