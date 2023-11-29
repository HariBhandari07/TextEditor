import React from "react";
import { convertFromRaw, convertToRaw, DraftHandleValue, Editor, EditorState, Modifier, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import "./TextEditor.css";
import { Button } from "../Button/Button.tsx";
import { getCurrentLineText } from "../../utils/helpers.ts";
import { CHAR_STYLE_MAP, STYLE_MAP } from "../../utils/constants.ts";

export function TextEditor() {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  React.useEffect(() => {
    try {
      const savedContent = localStorage.getItem("editorDocument");
      if (savedContent) {
        setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(savedContent))));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleSaveToLocalStorage = () => {
    try {
      localStorage.setItem("editorDocument", JSON.stringify(convertToRaw(editorState.getCurrentContent())));
    } catch (e) {
      console.warn(e);
    }
  };

  const handleBeforeInput = (chars: string, editorState: EditorState) => {
    if (chars !== " ") return "not-handled";

    const currentLineContent = getCurrentLineText(editorState);
    const selection = editorState.getSelection();
    const startOffset = selection.getStartOffset();

    for (const { prefix, blockType, inlineStyle, offset } of CHAR_STYLE_MAP) {
      if (currentLineContent.slice(0, prefix.length) + chars === prefix) {
        const newContent = Modifier.replaceText(
          editorState.getCurrentContent(),
          selection.merge({
            anchorOffset: startOffset - offset,
            focusOffset: startOffset,
          }),
          "",
        );

        let updatedEditorState;

        if (blockType) {
          updatedEditorState = RichUtils.toggleBlockType(
            EditorState.push(editorState, newContent, "remove-range"),
            blockType,
          );
        } else if (inlineStyle) {
          updatedEditorState = RichUtils.toggleInlineStyle(
            EditorState.push(editorState, newContent, "remove-range"),
            inlineStyle,
          );
        }

        if (updatedEditorState) {
          setEditorState(updatedEditorState);
          return "handled";
        }
      }
    }

    return "not-handled";
  };

  const handleReturn = (_e: KeyboardEvent, editorState: EditorState): DraftHandleValue => {
    try {
      const contentState = Modifier.splitBlock(
        editorState.getCurrentContent(),
        editorState.getSelection(),
      );

      const currentInlineStyles = editorState.getCurrentInlineStyle().toJS();

      const editorStateAfterSplitBlock = EditorState.push(editorState, contentState, "split-block");
      const editorStateAfterUnstyled = RichUtils.toggleBlockType(editorStateAfterSplitBlock, "unstyled");

      let editorStateAfterInlineUnstyle = editorStateAfterUnstyled;
      // Toggle all inline styles
      currentInlineStyles.forEach((style: string) => {
        editorStateAfterInlineUnstyle = RichUtils.toggleInlineStyle(editorStateAfterInlineUnstyle, style);
      });

      setEditorState(editorStateAfterInlineUnstyle);

      return "handled";
    } catch (e) {
      console.error(e);
      return "not-handled";
    }
  };


  return (
    <div>
      <section className="buttonGroup">
        <Button onClick={handleSaveToLocalStorage}>
          Save Data
        </Button>
      </section>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleBeforeInput={handleBeforeInput}
        handleReturn={handleReturn}
        customStyleMap={STYLE_MAP}
      />
    </div>
  );
}
