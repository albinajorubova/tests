import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Button.module.scss';

const Button = ({ value, className, onClick, type, loading}) => (
  <div className={s.root}>
  <button className={cx(s.button, className, { [s.disabl]: loading })} onClick={onClick} type={type} disabled={loading}>
   {loading && (<span className={s.loader}/>)} {!loading && value}
  </button>
  </div>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Button.defaultProps = {
  type: 'button',
};

export default React.memo(Button);
