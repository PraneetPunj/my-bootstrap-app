import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEditorContent } from '../store/editorSlice';

export default function EditorContentDisplay() {
  // Read the editor content and loading/error from Redux
  const content = useSelector(state => state.editor.content);
  const loading = useSelector(state => state.editor.loading);
  const error = useSelector(state => state.editor.error);
  const dispatch = useDispatch();

  return (
    <div className="mt-3">
      <h5>Editor Content (JSON):</h5>
      <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.9rem'}}>{content}</pre>
      <button className="btn btn-outline-secondary mt-2" onClick={() => dispatch(fetchEditorContent())} disabled={loading}>
        {loading ? 'Loading...' : 'Load Mock Content'}
      </button>
      {error && <div className="text-danger mt-2">Error: {error}</div>}
    </div>
  );
}
