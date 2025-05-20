import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './Checkbox.module.scss';

const Checkbox = ({ type, text, classNameInput, classNameLabel, onChange, checked}) => (
  <label className={cx(s.root, classNameLabel)}>{text}
    <input
      type={type}
      className={cx(s.input, classNameInput)}
      onChange={onChange}
      checked={checked} 
    />
    <span className={s.checkmark}/>
  </label>
);

Checkbox.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']), 
  classNameInput: PropTypes.string, 
  classNameLabel: PropTypes.string, 
  text: PropTypes.string, 
  onChange: PropTypes.func,
  checked: PropTypes.bool, 
};

Checkbox.defaultProps = {
  type: 'checkbox', 
  className: '', 
  classNameInput: '', 
  classNameLabel: '', 
  text: '',
  checked: false, 
  onChange: () => {}, 
};

export default React.memo(Checkbox);
