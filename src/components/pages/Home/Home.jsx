import React from 'react';

import s from './Home.module.scss';

const Home = () => {
  return (
    <div className={s.root}>
      <a href="/signin">Войти</a>
    </div>
  );
};

export default React.memo(Home);
