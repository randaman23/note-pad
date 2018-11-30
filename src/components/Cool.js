import React, { Component } from "react";
import axios from 'axios'

class Cool extends Component {
  constructor(props) {
    super(props);
    this.state = {
        photos: []
    };
  }
  componentDidMount(){
      axios.get(`/api/mars`).then(
          res => console.log(res.data)
      )
  }
  render() {
    return (
      <div>
        <div className="home_header">
          <span>Thought Jottr with Mars</span>
        </div>
      </div>
    );
  }
}

export default Cool;
