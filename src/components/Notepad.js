import React, { Component } from "react";
import axios from "axios";
import "./Notepad.css";

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

  deleteNote(id) {
    axios.delete(`/api/delete/${id}`).then(res => {
      console.log(res.data);
      this.setState({ notes: res.data });
    });
  }

  async logout() {
    let res = await axios.get(`auth/logout`);
    console.log(res);
    this.props.history.push("/");
  }

  render() {
    let userNotes = this.state.notes.map((val, i) => {
      return (
        <div
          className="the_notes"
          key={i}
          onClick={() =>
            this.selectNote(
              this.setState({ text: this.state.notes[i].note_content })
            )
          }
        >
          {val.note_content}
          <button onClick={e => this.deleteNote(val.note_id)}>X</button>
          
        </div>
      );
    });
    return (
      <div>
        <div className="note_header">
          <h1>Notepad</h1>
          <button onClick={() => this.logout()}>Sign Out</button>
        </div>
        <div className="main_notepad">
          <div className="user_notes">
            <button onClick={e => this.addNewNote(e)}>Add New Note</button>

            <br />
            {/* <hr /> */}
            {userNotes}
          </div>
          {/* <div className="text_area"> */}
          <textarea
            onChange={e => this.handleText(e)}
            value={this.state.text}
            placeholder="Add Your Notes"
            name=""
            id=""
          />
        </div>
      </div>
      // </div>
    );
  }
}

export default Notepad;
