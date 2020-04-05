import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import style from 'Styles/main.scss';
import Header from './header/header-container';
import ContentContainer from './content/content-container';

const Main = () => {
  return (
    <div className={style.mainContainer}>
      <Header />
      <ContentContainer />
    </div>
  );
};

export default Main;
