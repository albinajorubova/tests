import React from 'react';
import PropTypes from 'prop-types';

import s from './AuthHeader.module.scss';

const AuthHeader = ({ title, desc }) => (
  <div className={s.root}>
    <h3 className={s.title}>{title}</h3>
    {desc && (<p className={s.desc}>{desc}</p>)}
  </div>
);
  
AuthHeader.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string
};

export default React.memo(AuthHeader);
