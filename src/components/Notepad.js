import React, { Component } from "react";
import axios from 'axios'

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    axios.get('/api/user-data').then(res => console.log(res.data))
  }


  render() {
    return (
      <div>
        <h1>Notepad</h1>
      </div>
    );
  }
}

export default Notepad;
