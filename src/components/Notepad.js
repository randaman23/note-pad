import React, { Component } from "react";
import axios from "axios";
import "./Notepad.css";
// import { connect } from "react-redux";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios.get("/api/user-data").then(res => {
      console.log(res.data);
      this.setState({ notes: res.data });
      // this.props.getUserNotes(res.data);
    });
  }

  addNewNote() {
    axios.post("/api/addnote").then(res => {
      console.log(res.data);
      this.setState({notes: res.data})
    });
  }

  render() {
    let userNotes = this.state.notes.map((val, i) => {
      return (
        <div key={i}>
          {val.note_content} <hr />
        </div>
      );
    });
    return (
      <div>
        <div className="note_header">
          <h1>Notepad</h1>
          <button>Sign Out</button>
        </div>
        <div className="main_notepad">
          <div className="user_notes">
            <button onClick={e => this.addNewNote(e)}>Add New Note</button>
            <br />
            <hr />
            {userNotes}
          </div>
          <div className="text_area">
            <textarea name="" id="" cols="90" rows="10" />
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     notes: state.notes
//   };
// }

// export default connect(mapStateToProps)(Notepad)

export default Notepad;
