import React from 'react';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function LexicalToolbar() {
  const [editor] = useLexicalComposerContext();

  const format = (type) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  };


  return (
    <div className="btn-group mb-3 d-flex justify-content-center editor-toolbar" role="group" aria-label="Formatting toolbar" style={{background: '#f8f9fa', borderRadius: '0.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '0.5rem 0'}}>
      <button type="button" className="btn btn-outline-primary mx-1 d-flex align-items-center" style={{fontSize: '1.25rem', minWidth: '40px'}} onClick={() => format('bold')} title="Bold">
        <span className="me-1"><i className="bi bi-type-bold"></i></span>
        <span style={{fontWeight: 'bold'}}>B</span>
      </button>
      <button type="button" className="btn btn-outline-primary mx-1 d-flex align-items-center" style={{fontSize: '1.25rem', minWidth: '40px'}} onClick={() => format('italic')} title="Italic">
        <span className="me-1"><i className="bi bi-type-italic"></i></span>
        <span style={{fontStyle: 'italic'}}>I</span>
      </button>
      <button type="button" className="btn btn-outline-primary mx-1 d-flex align-items-center" style={{fontSize: '1.25rem', minWidth: '40px'}} onClick={() => format('code')} title="Code">
        <span className="me-1"><i className="bi bi-code"></i></span>
        <span style={{fontFamily: 'monospace'}}>Code</span>
      </button>
    </div>
  );
}
