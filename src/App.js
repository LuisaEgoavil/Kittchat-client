import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cafe from "./components/pages/Cafe";
import CatInfo from "./components/pages/CatInfo";
import Contact from "./components/pages/Contact";
import Reservation from "./components/pages/Reservation";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
