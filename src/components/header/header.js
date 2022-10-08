import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#/">
          StarDB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
        <Link to="/planet">Planet</Link>
        </li>
        <li>
        <Link to="/starship">Starship</Link>
        </li>
      </ul>
      <button 
        onClick={onServiceChange}
        className="btn btn-primary btn-sm">
        Change Servise
      </button>
    </div>
  );
};

export default Header;