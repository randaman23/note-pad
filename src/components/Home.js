import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home_main">
        <div className="home_header">
          <span>Thought Jottr</span>
        </div>
        <div className="pushdown" />
        <div className="thoughts">The Place For All Your Thoughts</div>
        <div className="in_register">
          <Link to="/login">
            <p>Sign In</p>
          </Link>
          <Link to="/register">
            <p>Register</p>
          </Link>
        </div>
        <div className="below">
          <Link to="/cool">
            <p>Mars</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
