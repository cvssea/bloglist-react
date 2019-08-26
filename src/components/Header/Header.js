import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ user, text, logout }) => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
        BlogList
      </a>
      {user && (
        <>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/add" className="nav-link">
                Add Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/users" className="nav-link">
                Users
              </NavLink>
            </li>
          </ul>
          <span className="navbar-text mr-2">{user}</span>
          <button type="button" className="btn btn-outline-light btn-sm" onClick={logout}>
            Logout
          </button>
        </>
      )}
    </nav>
  </header>
);

Header.defaultProps = {
  text: 'built with React',
};

export default Header;
