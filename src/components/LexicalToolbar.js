import React from 'react';
import { FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND, UNDO_COMMAND, REDO_COMMAND } from 'lexical';
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND } from '@lexical/list';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function LexicalToolbar() {
  const [editor] = useLexicalComposerContext();

  const format = (type) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  };

  const formatElement = (tag) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, tag);
  };

  const insertList = (type) => {
    if (type === 'ul') {
      editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
    } else if (type === 'ol') {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
    }
  };

  const undo = () => editor.dispatchCommand(UNDO_COMMAND, undefined);
  const redo = () => editor.dispatchCommand(REDO_COMMAND, undefined);

  return (
    <div className="editor-toolbar-container d-flex justify-content-center py-2" style={{background: 'linear-gradient(90deg, #f8f9fa 60%, #e3f2fd 100%)', borderRadius: '0.75rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', marginBottom: '1rem', border: '1px solid #e0e0e0'}}>
      <div className="editor-toolbar d-flex flex-wrap align-items-center gap-2 px-2">
        {/* Headings */}
        <button type="button" className="btn btn-light btn-sm d-flex align-items-center" title="Heading 1" onClick={() => formatElement('h1')}>
          <i className="bi bi-type-h1 me-1"></i> H1
        </button>
        <button type="button" className="btn btn-light btn-sm d-flex align-items-center" title="Heading 2" onClick={() => formatElement('h2')}>
          <i className="bi bi-type-h2 me-1"></i> H2
        </button>
        <button type="button" className="btn btn-light btn-sm d-flex align-items-center" title="Heading 3" onClick={() => formatElement('h3')}>
          <i className="bi bi-type-h3 me-1"></i> H3
        </button>
        {/* Blockquote */}
        <button type="button" className="btn btn-light btn-sm d-flex align-items-center" title="Blockquote" onClick={() => formatElement('quote')}>
          <i className="bi bi-chat-left-quote me-1"></i>
        </button>
        {/* Lists */}
        <button type="button" className="btn btn-light btn-sm d-flex align-items-center" title="Bulleted List" onClick={() => insertList('ul')}>
          <i className="bi bi-list-ul me-1"></i>
        </button>
        <button type="button" className="btn btn-light btn-sm d-flex align-items-center" title="Numbered List" onClick={() => insertList('ol')}>
          <i className="bi bi-list-ol me-1"></i>
        </button>
        {/* Undo/Redo */}
        <button type="button" className="btn btn-light btn-sm d-flex align-items-center" title="Undo" onClick={undo}>
          <i className="bi bi-arrow-counterclockwise me-1"></i>
        </button>
        <button type="button" className="btn btn-light btn-sm d-flex align-items-center" title="Redo" onClick={redo}>
          <i className="bi bi-arrow-clockwise me-1"></i>
        </button>
        {/* Bold/Italic */}
        <button type="button" className="btn btn-outline-primary btn-sm d-flex align-items-center" style={{fontSize: '1.1rem', minWidth: '36px'}} onClick={() => format('bold')} title="Bold">
          <i className="bi bi-type-bold"></i>
        </button>
        <button type="button" className="btn btn-outline-primary btn-sm d-flex align-items-center" style={{fontSize: '1.1rem', minWidth: '36px'}} onClick={() => format('italic')} title="Italic">
          <i className="bi bi-type-italic"></i>
        </button>
      </div>
    </div>
  );
}
