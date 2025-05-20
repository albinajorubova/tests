import React from 'react';
import PropTypes from 'prop-types';

import s from './AuthFooter.module.scss';

const AuthFooter = ({ question, link, linkText }) => (
  <div className={s.root}>
    {question} <a href={link} className={s.link}>{linkText}</a>
  </div>
);
  
AuthFooter.propTypes = {
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string,
  question: PropTypes.string,
};

export default React.memo(AuthFooter);
