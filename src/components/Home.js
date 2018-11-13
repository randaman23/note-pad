import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="/login">
        <button>Sign In</button>
        </Link>
        <Link to="/register">
        <button>Register</button>
        </Link>
      </div>
    );
  }
}

export default Home;
