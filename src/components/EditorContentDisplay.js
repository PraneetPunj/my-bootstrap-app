import React from 'react';
import { useSelector } from 'react-redux';

export default function EditorContentDisplay() {
  // Read the editor content from Redux
  const content = useSelector(state => state.editor.content);

  return (
    <div className="mt-3">
      <h5>Editor Content (JSON):</h5>
      <pre style={{background: '#f8f9fa', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.9rem'}}>{content}</pre>
    </div>
  );
}
