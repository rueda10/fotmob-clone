import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from 'Styles/header-leagues.scss';
import LeagueItem from './league-item';

import { leagues } from '../../data/data';

const HeaderLeagues = ({ isExpanded }) => {
  return (
    <div
      className={`${style.headerLeagues} ${
        isExpanded ? style.headerLeaguesDisplay : style.headerLeaguesHidden
      }`}
    >
      <ul>
        {leagues.map(league => (
          <LeagueItem id={league.id} logo={league.logo} name={league.name} />
        ))}
      </ul>
      <Link className={style.allLeaguesButton} to="/leagues">
        ALL LEAGUES
      </Link>
    </div>
  );
};

HeaderLeagues.propTypes = {
  isExpanded: PropTypes.bool,
};

HeaderLeagues.defaultProps = {
  isExpanded: true,
};

export default HeaderLeagues;
