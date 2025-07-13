import React from 'react';
import LexicalToolbar from './LexicalToolbar';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';

function Placeholder() {
  return <div className="editor-placeholder">Start typing...</div>;
}

const theme = {
  // Add custom theme styles here if desired
  paragraph: 'editor-paragraph',
};

const initialConfig = {
  namespace: 'MyEditor',
  theme,
  onError(error) {
    console.error(error);
  },
};

export default function LexicalEditor() {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container card p-3">
        <LexicalToolbar />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input form-control" />}
          placeholder={<Placeholder />}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={editorState => {}} />
      </div>
    </LexicalComposer>
  );
}
