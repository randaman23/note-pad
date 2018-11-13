import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home_main">
        <div className="home_header">
          <h1>Thought Jotter</h1>
        </div>
        <div className="pushdown" />
        <div className="signin" />
        <div>
          <h1>Login or Register</h1>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
