import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    fontFamily: "'Poppins', 'Segoe UI', 'Roboto', sans-serif",
    backgroundColor: isDarkMode ? '#1a1a1a' : '#f5f7fa',
    color: isDarkMode ? '#f5f7fa' : '#000000',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    position: 'relative'
  };

  const headingStyle = {
    fontSize: 'calc(1024px * 0.5 / 6)',
    margin: '0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: '-2px'
  };

  const worldIconStyle = {
    marginTop: '2rem',
    fontSize: '4rem'
  };

  const toggleButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '2rem',
    cursor: 'pointer',
    padding: '10px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <div style={containerStyle}>
      <button 
        style={toggleButtonStyle}
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <h1 style={headingStyle}>Hello World</h1>
      <div style={worldIconStyle}>🌍</div>
    </div>
  );
}

export default App;
