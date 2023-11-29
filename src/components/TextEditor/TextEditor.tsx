import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";

export function TextEditor() {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
    />
  );
}