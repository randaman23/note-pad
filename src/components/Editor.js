import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
    this.setEditor = editor => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  componentDidMount() {
    this.focusEditor();
  }

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState), "BOLD");
  }

  render() {
    return (
      <div style={styles.editor} onClick={this.focusEditor}>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <Editor
          ref={this.setEditor}
          editorState={this.state.editorState}
          onChange={this.onChange}
          handleKeyCommand={this.handleKeyCommand}
        />
      </div>
    );
  }
}

const styles = {
  editor: {
    border: "1px solid gray",
    minHeight: "6em"
  }
};

// ReactDOM.render(<MyEditor />, document.getElementById("container"));
export default MyEditor;
