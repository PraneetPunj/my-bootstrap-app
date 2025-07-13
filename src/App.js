import React, { useState } from 'react';
import LexicalEditor from './LexicalEditor';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="App">
      {/* Modern Navbar with icons */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container-fluid">
          <button className="navbar-brand btn btn-link text-white fw-bold" style={{textDecoration: 'none', fontSize: '1.5rem'}} onClick={() => setPage('home')}>
            <i className="bi bi-bootstrap-fill me-2"></i>My App
          </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button className={`nav-link btn btn-link text-white${page === 'home' ? ' active fw-bold' : ''}`} style={{textDecoration: 'none'}} onClick={() => setPage('home')}>
                  <i className="bi bi-house-door me-1"></i>Home
                </button>
              </li>
              <li className="nav-item">
                <button className={`nav-link btn btn-link text-white${page === 'editor' ? ' active fw-bold' : ''}`} style={{textDecoration: 'none'}} onClick={() => setPage('editor')}>
                  <i className="bi bi-pencil-square me-1"></i>Editor
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Subtle gradient background */}
      <div style={{minHeight: '90vh', background: 'linear-gradient(135deg, #e3f2fd 0%, #f8f9fa 100%)'}}>
        <div className="container py-5">
          {/* Animate page transitions */}
          {page === 'home' && (
            <div className="row justify-content-center animate__animated animate__fadeIn">
              <div className="col-md-8">
                <div className="card shadow-lg border-0">
                  <div className="card-body text-center">
                    <h1 className="card-title mb-3">Welcome to the Home Page</h1>
                    <p className="card-text">This is the home page of your modern Bootstrap React app.</p>
                    <div className="alert alert-info mt-4" role="alert">
                      <i className="bi bi-lightbulb me-2"></i>Tip: Use the Editor tab to start editing!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {page === 'editor' && (
            <div className="row justify-content-center animate__animated animate__fadeIn">
              <div className="col-md-8">
                <div className="card shadow-lg border-0">
                  <div className="card-body">
                    <h1 className="card-title mb-3"><i className="bi bi-pencil-square me-2"></i>Editor</h1>
                    <p className="card-text mb-4">This is the editor page. Start editing below:</p>
                    <div className="mb-4">
                      {/* Lexical Editor */}
                      <React.Suspense fallback={<div>Loading editor...</div>}>
                        <LexicalEditor />
                      </React.Suspense>
                    </div>
                    <div className="alert alert-success" role="alert">
                      <i className="bi bi-check-circle me-2"></i>Editor is ready for your input!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Modern Footer */}
        <footer className="bg-primary text-white text-center py-3 mt-auto shadow-sm">
          <div className="container">
            <span>&copy; {new Date().getFullYear()} My App. All rights reserved. | <button className="btn btn-link text-white text-decoration-underline p-0" style={{fontSize: 'inherit'}} onClick={() => alert('Contact us at info@example.com')}>Contact</button></span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
