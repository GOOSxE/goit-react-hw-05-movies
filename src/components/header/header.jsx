import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './header.module.css';

const Header = () => (
  <header css={css.header}>
    <nav className={css.navigation}>
      <NavLink className={css.navigation_link} to="/">
        Home
      </NavLink>
      <NavLink className={css.navigation_link} to="/movies">
        Movies
      </NavLink>
    </nav>
  </header>
);

export default Header;
