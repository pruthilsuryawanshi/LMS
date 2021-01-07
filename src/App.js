import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import IndividualLearning from "./Pages/IndividualLearning";
import "./App.css";

const App = () => {
  const [inputVisible, setInputVisible] = useState(false);

  // const usePageViews = () => {
  //   let location = useLocation();
  //   useEffect(() => {
  //     ga.send(["pageview", location.pathname]);
  //   }, [location]);
  // };

  return (
    <Router>
      <div className="App">
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <LandingPage
                  {...props}
                  inputVisible={inputVisible}
                  setInputVisible={setInputVisible}
                />
              )}
            />
            <Route
              path="/login"
              exact
              render={(props) => (
                <Login
                  {...props}
                  inputVisible={inputVisible}
                  setInputVisible={setInputVisible}
                />
              )}
            />
            <Route
              path="/IndividualLearning"
              exact
              component={IndividualLearning}
            />
          </Switch>
        </AnimatePresence>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
