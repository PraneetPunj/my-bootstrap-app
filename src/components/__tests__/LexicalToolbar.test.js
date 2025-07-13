import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LexicalToolbar from '../LexicalToolbar';
import { LexicalComposer } from '@lexical/react/LexicalComposer';

const initialConfig = {
  namespace: 'TestEditor',
  theme: {},
  onError: () => {},
};

describe('LexicalToolbar', () => {
  test('renders toolbar buttons and triggers bold, italic, and code commands', () => {
    render(
      <LexicalComposer initialConfig={initialConfig}>
        <LexicalToolbar />
      </LexicalComposer>
    );

    // Check for Bold button
    const boldBtn = screen.getByTitle('Bold');
    expect(boldBtn).toBeInTheDocument();

    // Check for Italic button
    const italicBtn = screen.getByTitle('Italic');
    expect(italicBtn).toBeInTheDocument();

    // Check for Code button
    const codeBtn = screen.getByTitle('Code');
    expect(codeBtn).toBeInTheDocument();

    // Simulate clicks
    fireEvent.click(boldBtn);
    fireEvent.click(italicBtn);
    fireEvent.click(codeBtn);
    // No error should occur
  });
});
