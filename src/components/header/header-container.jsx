import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import style from 'Styles/header.scss';
import {
  FaBars,
  FaSearch,
  FaSortUp,
  FaSortDown,
  FaUserCircle,
} from 'react-icons/fa';
import HeaderLeagues from './header-leagues';

const Header = () => {
  const [isExpanded, setExpanded] = useState(true);
  const [value, setValue] = useState('');

  return (
    <>
      <div className={style.headerContainer}>
        <div
          className={style.burgerMenu}
          onClick={() => {}}
          onKeyPress={() => {}}
          tabIndex="0"
          role="button"
        >
          <FaBars size="15px" />
        </div>
        <div className={style.brandButton}>
          <Link to="/">
            <span>BRAND</span>
          </Link>
        </div>
        <div className={style.searchBox}>
          <FaSearch className={style.searchIcon} size="15px" />
          <input
            className={style.searchInput}
            type="text"
            placeholder="SEARCH TEAMS, PLAYERS & NEWS"
            value={value}
            onChange={e => setValue(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div
          className={style.leaguesShowHide}
          onClick={() => setExpanded(!isExpanded)}
          onKeyPress={() => setExpanded(!isExpanded)}
          tabIndex="0"
          role="button"
        >
          <span>LEAGUES</span>
          {isExpanded ? (
            <FaSortUp className={style.sortUpIcon} size="15px" />
          ) : (
            <FaSortDown className={style.sortDownIcon} size="15px" />
          )}
        </div>
        <div
          className={style.profileButton}
          onClick={() => {}}
          onKeyPress={() => {}}
          tabIndex="0"
          role="button"
        >
          <span>SIGN IN</span>
          <FaUserCircle className={style.profileIcon} size="15px" />
        </div>
      </div>
      <HeaderLeagues isExpanded={isExpanded} />
    </>
  );
};

export default Header;
