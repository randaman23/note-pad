import React, { Component } from "react";
import { Link } from "react-router-dom";
// import pen from "../images/notebook_write_watch_pen_67636_1920x1080.jpg";
import "./Home.css";
// import { Icon } from "antd";

class Home extends Component {
  render() {
    return (
      <div className="home_main">
        <div className="home_header">
          <span>Thought Jotter</span>
          {/* <Icon type="home" />
          <Icon type="edit" /> */}
        </div>
        <div className="pushdown" />
        {/* <div className="signin" /> */}
        {/* <div className="register"> */}
        <div className="in_register">
          {/* <span>Login or Register</span> */}
          <Link to="/login">
            <p>Sign In</p>
          </Link>
          <Link to="/register">
            <p>Register</p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
