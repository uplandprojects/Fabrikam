import React from 'react';

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    fontFamily: "'Poppins', 'Segoe UI', 'Roboto', sans-serif",
    backgroundColor: '#f5f7fa'
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

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Hello World</h1>
      <div style={worldIconStyle}>🌍</div>
    </div>
  );
}

export default App;
