import React, { Component } from "react";
import axios from "axios";
import "./Notepad.css";
import { Icon } from "antd";
import _ from "lodash";

class Notepad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      text: "",
      id: 0
    };
    this.onChange = this.onChange.bind(this);
    this.delayedCallback = _.debounce(this.handleEditReq, 4000);
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
      this.setState({ notes: res.data, text: res.data[0].note_content });
    });
  }

  handleEditReq(e) {
    const { text, id } = this.state;
    console.log(e, text);
    axios.put(`/api/edit`, { text, id }).then(res => {
      console.log("i am the data", res.data);
      this.setState({ notes: res.data });
    });
  }

  handleText(event) {
    this.setState({ text: event.target.value });
    console.log(event);
    this.onChange(event);
  }

  onChange(event) {
    event.persist();
    this.delayedCallback(event);
  }

  selectNote() {}

  deleteNote(id) {
    axios.delete(`/api/delete/${id}`).then(res => {
      console.log(res.data);
      this.setState({ notes: res.data, text: "" });
    });
  }
  handleNewNote() {
    const { text } = this.state;
    if (text === "New Note") {
      this.setState({ text: "" });
    }
  }

  async logout() {
    let res = await axios.get(`auth/logout`);
    console.log(res);
    this.props.history.push("/");
  }

  render() {
    console.log();
    let userNotes = this.state.notes.map((val, i) => {
      return (
        <div
          className="the_notes"
          key={i}
          onClick={() =>
            this.selectNote(
              this.setState({
                text: this.state.notes[i].note_content,
                id: val.note_id
              })
            )
          }
        >
          <div>{val.note_content}</div>
          <div />
          <button onClick={e => this.deleteNote(val.note_id)}>
            <Icon type="delete" />
          </button>
        </div>
      );
    });
    return (
      <div>
        <div className="note_header">
          <h1>Thought Jottr</h1>
          {/* <button>Note Graveyard</button> */}
          <button onClick={() => this.logout()}>Sign Out</button>
        </div>
        <div className="main_notepad">
          <div className="user_notes">
            <button onClick={e => this.addNewNote(e)}>
              New Note <Icon type="smile" />
            </button>
            <br />
            {userNotes}
          </div>
          <textarea
            onClick={e => this.handleNewNote(e)}
            onChange={e => this.handleText(e)}
            value={this.state.text}
            placeholder="Add Your Notes"
            name=""
            id=""
          />
        </div>
      </div>
    );
  }
}

export default Notepad;
