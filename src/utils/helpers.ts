import { EditorState } from "draft-js";

export function getCurrentLineText(editorState: EditorState) {
  const selectionState = editorState.getSelection();
  const contentState = editorState.getCurrentContent();
  const currentContentBlock = contentState.getBlockForKey(selectionState.getStartKey());

  const startOffset = 0;
  const endOffset = currentContentBlock.getLength();

  const currentLineText = currentContentBlock.getText().slice(startOffset, endOffset);
  return currentLineText;
}
