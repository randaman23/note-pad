import React, { Component } from "react";
import axios from "axios";
import "./Cool.css";

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

  render() {
    console.log(this.state.photo, this.state.advice);
    let images = this.state.photo.map((e, i) => {
      return (
        <div key={i}>
          <img src={e.img_src} alt="" />
          <p>Earth Date When Taken: {e.earth_date}</p>
        </div>
      );
    });
    return (
      <div className="cool_main">
        <div className="home_header">
          <span>Thought Jottr with Mars</span>
        </div>
        <div className="pushdown_mars" />
        <div className="mars_pics">{images}</div>
      </div>
    );
  }
}

export default Cool;
