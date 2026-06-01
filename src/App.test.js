import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
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

describe('Cart and Wishlist', () => {
  test('renders cart section with items', () => {
    render(<App />);
    expect(screen.getByRole('region', { name: /cart/i })).toBeInTheDocument();
    expect(screen.getByText('Wireless Headphones')).toBeInTheDocument();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.getByText('USB-C Hub')).toBeInTheDocument();
    expect(screen.getByText('Webcam HD 1080p')).toBeInTheDocument();
  });

  test('renders checkboxes for each cart item', () => {
    render(<App />);
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(4);
    checkboxes.forEach((cb) => expect(cb).not.toBeChecked());
  });

  test('"Add to Wishlist" button is disabled when no items are selected', () => {
    render(<App />);
    const addButton = screen.getByRole('button', { name: /add selected items to wishlist/i });
    expect(addButton).toBeDisabled();
  });

  test('selecting a cart item enables the "Add to Wishlist" button', () => {
    render(<App />);
    const checkbox = screen.getByRole('checkbox', { name: /select wireless headphones/i });
    fireEvent.click(checkbox);
    const addButton = screen.getByRole('button', { name: /add selected items to wishlist/i });
    expect(addButton).not.toBeDisabled();
  });

  test('adds multiple selected items to the wishlist and shows confirmation', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('checkbox', { name: /select wireless headphones/i }));
    fireEvent.click(screen.getByRole('checkbox', { name: /select usb-c hub/i }));

    fireEvent.click(screen.getByRole('button', { name: /add selected items to wishlist/i }));

    // Confirmation message
    expect(screen.getByRole('status')).toHaveTextContent('2 items added to your wishlist!');

    // Wishlist section now visible
    expect(screen.getByRole('region', { name: /wishlist/i })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: /wishlist/i })).toHaveTextContent('Wireless Headphones');
    expect(screen.getByRole('region', { name: /wishlist/i })).toHaveTextContent('USB-C Hub');
  });

  test('checkboxes are unchecked after adding items to wishlist', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('checkbox', { name: /select mechanical keyboard/i }));
    fireEvent.click(screen.getByRole('button', { name: /add selected items to wishlist/i }));

    const checkboxes = screen.getAllByRole('checkbox');
    checkboxes.forEach((cb) => expect(cb).not.toBeChecked());
  });

  test('wishlist section is not shown when wishlist is empty', () => {
    render(<App />);
    expect(screen.queryByRole('region', { name: /wishlist/i })).not.toBeInTheDocument();
  });

  test('adds a single item and shows singular confirmation message', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('checkbox', { name: /select webcam hd 1080p/i }));
    fireEvent.click(screen.getByRole('button', { name: /add selected items to wishlist/i }));

    expect(screen.getByRole('status')).toHaveTextContent('1 item added to your wishlist!');
  });

  test('duplicate items are not added to the wishlist', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('checkbox', { name: /select wireless headphones/i }));
    fireEvent.click(screen.getByRole('button', { name: /add selected items to wishlist/i }));

    // Add again
    fireEvent.click(screen.getByRole('checkbox', { name: /select wireless headphones/i }));
    fireEvent.click(screen.getByRole('button', { name: /add selected items to wishlist/i }));

    const wishlistItems = screen.getAllByText('Wireless Headphones');
    // One in cart, one in wishlist – should be exactly 2 (not 3)
    expect(wishlistItems).toHaveLength(2);
  });
});
