import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let userNotes = this.props.state.notes.map((val, i) => {
      return <div>{console.log(userNotes)}</div>;
    });
    return (
      <div>
        <h1>Notepad</h1>
        <button>Sign Out</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(mapStateToProps)(Notepad);
