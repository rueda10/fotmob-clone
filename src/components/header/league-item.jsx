import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from 'Styles/league-item.scss';

const LeagueItem = ({ name, logo, id }) => {
  return (
    <li className={style.leagueItemContainer}>
      <Link to={`/leagues/${id}`} className={style.leagueItemLink}>
        <img
          alt={`Logo for league ${name}`}
          className={style.leagueItemLogo}
          src={logo}
        />
        <span className={style.leagueItemName}>{name}</span>
      </Link>
    </li>
  );
};

LeagueItem.propTypes = {
  id: PropTypes.number.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default LeagueItem;
