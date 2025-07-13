import React from 'react';
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function LexicalToolbar() {
  const [editor] = useLexicalComposerContext();

  const format = (type) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  };

  return (
    <div className="btn-group mb-2" role="group" aria-label="Formatting toolbar">
      <button type="button" className="btn btn-outline-secondary" onClick={() => format('bold')}><i className="bi bi-type-bold"></i></button>
      <button type="button" className="btn btn-outline-secondary" onClick={() => format('italic')}><i className="bi bi-type-italic"></i></button>
      <button type="button" className="btn btn-outline-secondary" onClick={() => format('underline')}><i className="bi bi-type-underline"></i></button>
      <button type="button" className="btn btn-outline-secondary" onClick={() => format('code')}><i className="bi bi-code"></i></button>
    </div>
  );
}
