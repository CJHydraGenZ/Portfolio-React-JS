import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import About from "../pages/About";
import "./App.css";
import Tooltip from "@material-ui/core/Tooltip";

function App() {
  return (
    <Router>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Tooltip title="Home">
                <Link to="/">Home</Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Gallery">
                <Link to="/gallery">Gallery</Link>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="About">
                <Link to="/about">About</Link>
              </Tooltip>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
