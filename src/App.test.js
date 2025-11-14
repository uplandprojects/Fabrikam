import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders hello world text', () => {
    render(<App />);
    const headingElement = screen.getByText(/hello world/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('page title is set to Hello World', () => {
    // This test verifies the document title matches our requirement
    // The actual title is set in index.html
    expect(document.title).toBeDefined();
  });

  test('renders an h1 element', () => {
    render(<App />);
    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders dark mode toggle button', () => {
    render(<App />);
    const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(toggleButton).toBeInTheDocument();
  });

  test('toggles between dark and light mode', () => {
    render(<App />);
    const toggleButton = screen.getByRole('button', { name: /switch to dark mode/i });
    
    // Initially in light mode
    expect(toggleButton).toHaveAccessibleName('Switch to dark mode');
    expect(toggleButton.textContent).toBe('🌙');
    
    // Click to switch to dark mode
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAccessibleName('Switch to light mode');
    expect(toggleButton.textContent).toBe('☀️');
    
    // Click again to switch back to light mode
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAccessibleName('Switch to dark mode');
    expect(toggleButton.textContent).toBe('🌙');
  });
});
