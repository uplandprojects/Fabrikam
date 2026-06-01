import React, { useState } from 'react';

const INITIAL_CART_ITEMS = [
  { id: 1, name: 'Wireless Headphones', price: '$79.99' },
  { id: 2, name: 'Mechanical Keyboard', price: '$129.99' },
  { id: 3, name: 'USB-C Hub', price: '$49.99' },
  { id: 4, name: 'Webcam HD 1080p', price: '$89.99' },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems] = useState(INITIAL_CART_ITEMS);
  const [selectedIds, setSelectedIds] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [confirmation, setConfirmation] = useState('');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleItemSelection = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const addToWishlist = () => {
    const itemsToAdd = cartItems.filter((item) => selectedIds.includes(item.id));
    if (itemsToAdd.length === 0) return;

    setWishlist((prev) => {
      const existingIds = new Set(prev.map((i) => i.id));
      const newItems = itemsToAdd.filter((i) => !existingIds.has(i.id));
      return [...prev, ...newItems];
    });
    setConfirmation(
      `${itemsToAdd.length} item${itemsToAdd.length > 1 ? 's' : ''} added to your wishlist!`
    );
    setSelectedIds([]);
    setTimeout(() => setConfirmation(''), 4000);
  };

  const bg = isDarkMode ? '#1a1a1a' : '#f5f7fa';
  const fg = isDarkMode ? '#f5f7fa' : '#1a1a1a';
  const cardBg = isDarkMode ? '#2a2a2a' : '#ffffff';
  const borderColor = isDarkMode ? '#444' : '#e2e8f0';

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    margin: 0,
    padding: '2rem 1rem',
    fontFamily: "'Poppins', 'Segoe UI', 'Roboto', sans-serif",
    backgroundColor: bg,
    color: fg,
    transition: 'background-color 0.3s ease, color 0.3s ease',
    position: 'relative',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: 'calc(1024px * 0.5 / 6)',
    margin: '0 0 2rem 0',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: '-2px',
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
  };

  const sectionStyle = {
    width: '100%',
    maxWidth: '600px',
    marginBottom: '2rem',
  };

  const sectionHeadingStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    borderBottom: `2px solid ${borderColor}`,
    paddingBottom: '0.5rem',
  };

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '0.75rem 1rem',
    marginBottom: '0.5rem',
    backgroundColor: cardBg,
    borderRadius: '8px',
    border: `1px solid ${borderColor}`,
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
  };

  const addButtonStyle = {
    marginTop: '1rem',
    padding: '0.6rem 1.4rem',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: selectedIds.length === 0 ? 'not-allowed' : 'pointer',
    opacity: selectedIds.length === 0 ? 0.5 : 1,
    transition: 'opacity 0.2s ease',
  };

  const confirmationStyle = {
    marginTop: '0.75rem',
    padding: '0.6rem 1rem',
    backgroundColor: isDarkMode ? '#1e4620' : '#d4edda',
    color: isDarkMode ? '#a3d9a5' : '#155724',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '0.95rem',
  };

  const wishlistItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.6rem 1rem',
    marginBottom: '0.4rem',
    backgroundColor: cardBg,
    borderRadius: '8px',
    border: `1px solid ${borderColor}`,
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

      {/* Cart Section */}
      <section style={sectionStyle} aria-label="Cart">
        <h2 style={sectionHeadingStyle}>🛒 Cart</h2>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.id} style={cardStyle}>
              <input
                type="checkbox"
                id={`cart-item-${item.id}`}
                checked={selectedIds.includes(item.id)}
                onChange={() => toggleItemSelection(item.id)}
                aria-label={`Select ${item.name}`}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <label
                htmlFor={`cart-item-${item.id}`}
                style={{ flex: 1, cursor: 'pointer', fontWeight: '500' }}
              >
                {item.name}
              </label>
              <span style={{ color: isDarkMode ? '#a0aec0' : '#718096' }}>{item.price}</span>
            </li>
          ))}
        </ul>
        <button
          style={addButtonStyle}
          onClick={addToWishlist}
          disabled={selectedIds.length === 0}
          aria-label="Add selected items to wishlist"
        >
          ♡ Add to Wishlist
        </button>
        {confirmation && (
          <div style={confirmationStyle} role="status" aria-live="polite">
            ✓ {confirmation}
          </div>
        )}
      </section>

      {/* Wishlist Section */}
      {wishlist.length > 0 && (
        <section style={sectionStyle} aria-label="Wishlist">
          <h2 style={sectionHeadingStyle}>❤️ Wishlist</h2>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {wishlist.map((item) => (
              <li key={item.id} style={wishlistItemStyle}>
                <span style={{ fontSize: '1.1rem' }}>♥</span>
                <span style={{ flex: 1, fontWeight: '500' }}>{item.name}</span>
                <span style={{ color: isDarkMode ? '#a0aec0' : '#718096' }}>{item.price}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default App;
