import React from 'react';

function Header() {
    return (
            <header className="header">
        <i className="fas fa-bars header-menu" />
        <div className="header-search">
          <input className="header-input" placeholder="Search..." />
        </div>
        <div className="header-avatar">
          <div className="dropdown">
            <ul className="dropdown-list">
              <li className="dropdown-list-item">
                <span className="dropdown-icon">
                  <i className="far fa-user" />
                </span>
                <span className="dropdown-title">My profile</span>
              </li>
              <li className="dropdown-list-item">
                <span className="dropdown-icon">
                  <i className="fas fa-clipboard-list" />
                </span>
                <span className="dropdown-title">My account</span>
              </li>
              <li className="dropdown-list-item">
                <span className="dropdown-icon">
                  <i className="fas fa-sign-out-alt" />
                </span>
                <span className="dropdown-title">Log out</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
}

export default Header;
