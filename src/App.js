import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
