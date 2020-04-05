import React from 'react';
import { Switch, Route } from 'react-router-dom';

import style from 'Styles/content.scss';
import Matches from './matches/matches-container';
import Leagues from './league/leagues-container';
import League from './league/league-container';
import Teams from './team/teams-container';
import Team from './team/team-container';
import NotFound from './not-found';

const ContentContainer = () => {
  return (
    <div className={style.contentContainer}>
      <Switch>
        <Route exact path="/">
          <Matches />
        </Route>
        <Route exact path="/leagues">
          <Leagues />
        </Route>
        <Route path="/leagues/:id">
          <League />
        </Route>
        <Route exact path="/teams">
          <Teams />
        </Route>
        <Route path="/teams/:id">
          <Team />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default ContentContainer;
