import React, { Component } from "react";
import axios from "axios";
import "./Notepad.css";
// import { connect } from "react-redux";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      text: ""
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
      this.setState({ notes: res.data });
    });
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  selectNote() {}

  render() {
    let userNotes = this.state.notes.map((val, i) => {
      return (
        <div
          key={i}
          onClick={() =>
            this.selectNote(
              this.setState({ text: this.state.notes[i].note_content })
            )
          }
        >
          {val.note_content} <hr />
        </div>
      );
    });
    return (
      <div m>
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
            <textarea
              onChange={e => this.handleText(e)}
              value={this.state.text}
              placeholder="Add Your Notes"
              name=""
              id=""
              cols="90"
              rows="10"
            />
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
