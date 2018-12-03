import React, { Component } from "react";
import axios from "axios";
import "./Cool.css";
import { Link } from "react-router-dom";

class Cool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    axios.get(`/api/mars`).then(res => {
      console.log(res.data);
      this.setState({
        photo: res.data.latest_photos
      });
    });
  }
  // getSpace(){
  //   axios.get(`/api/space-photo`).then(res => {
  //     console.log(res.data)
  //   })
  // }
  async logout() {
    let res = await axios.get(`auth/logout`);
    console.log(res);
    this.props.history.push("/");
  }

  render() {
    console.log(this.state.photo, this.state.advice);
    let images = this.state.photo.map((e, i) => {
      return (
        <div className="rover_imgs" key={i}>
          <img src={e.img_src} alt="" />
          <p>Camera Name: {e.camera.name}</p>
          <p>Earth Date When Taken: {e.earth_date}</p>
          <p>Landing Date: {e.rover.landing_date}</p>
          <p>Launch Date: {e.rover.launch_date}</p>
          <p>Max Date: {e.rover.max_date}</p>
        </div>
      );
    });
    return (
      <div className="cool_main">
        <div className="cool_header">
          <div className="jotter_mars">
            <span>ThoughtJottr</span>
            {/* <Link to="/login">
              <p>Sign In</p>
            </Link>
            <Link to="/register">
              <p>Register</p>
            </Link> */}
            <Link to="/notepad">
              <p>Notes</p>
            </Link>
            <button onClick={() => this.logout()}>Sign Out</button>
          </div>
        </div>
        <div className="pushdown_mars" />
        <div className="info_mars">Mars Rover Images from 33 Million Miles Away!</div>
        {/* <div className="pushdown_mars" /> */}
        {/* <button onClick={(e) => this.getSpace(e)}>space</button> */}
        <div className="mars_pics">{images}</div>
      </div>
    );
  }
}

export default Cool;
