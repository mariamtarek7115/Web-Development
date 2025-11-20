import React from 'react';

function Header() {
  return (
    <header className="udemy-header">
      <a href="#" className="udemy-logo">udemy</a>
      <nav className="udemy-nav">
        <a href="#categories" className="nav-link">Categories</a>
        <input 
          type="text" 
          placeholder="Search for anything"
          style={{
            padding: '8px 12px',
            border: '1px solid #000',
            borderRadius: '24px',
            width: '400px',
            fontSize: '14px'
          }}
        />
        <a href="#business" className="nav-link">Udemy Business</a>
        <a href="#teach" className="nav-link">Teach on Udemy</a>
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </nav>
    </header>
  );
}

export default Header;