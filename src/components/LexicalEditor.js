import React from 'react';
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
        <OnChangePlugin onChange={editorState => {}} />
      </div>
    </LexicalComposer>
  );
}
