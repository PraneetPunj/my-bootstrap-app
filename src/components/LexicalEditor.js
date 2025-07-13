import React from 'react';
import { useDispatch } from 'react-redux';
import { setContent } from '../store/editorSlice';
import LexicalToolbar from './LexicalToolbar';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { ListNode, ListItemNode } from '@lexical/list';

function Placeholder() {
  return <div className="editor-placeholder">Start typing...</div>;
}

const theme = {
  paragraph: 'editor-paragraph',
};

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  nodes: [ListNode, ListItemNode],
  onError(error) {
    console.error(error);
  },
};

export default function LexicalEditor() {
  const dispatch = useDispatch();

  // This function will be called whenever the editor state changes
  const handleEditorChange = (editorState) => {
    // You can convert editorState to JSON or text here
    editorState.read(() => {
      const json = editorState.toJSON();
      dispatch(setContent(JSON.stringify(json)));
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container card p-3">
        <LexicalToolbar />
        <div className="editor-scroll-area">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input form-control" />}
            placeholder={<Placeholder />}
          />
        </div>
        <ListPlugin />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={handleEditorChange} />
      </div>
    </LexicalComposer>
  );
}
