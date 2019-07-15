import React from 'react';

const Header = ({ user, text, onClick }) => (
  <header>
    <nav className="navbar navbar-dark bg-primary">
      <a href="/" className="navbar-brand">BlogList</a>
      <span className="navbar-text">{user || text}</span>
      {user && (
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={onClick}
        >
          Logout
        </button>
      )}
    </nav>
  </header>
);

Header.defaultProps = {
  text: 'built with React',
};

export default Header;
