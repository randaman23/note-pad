import React, { Component } from "react";
import { Link } from "react-router-dom";
import pen from "../images/notebook_write_watch_pen_67636_1920x1080.jpg";
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
        <div className="register">
          <div className="in_register">
            <h1>Login or Register</h1>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
        <img src={pen} alt="" width="70%" />
      </div>
    );
  }
}

export default Home;
