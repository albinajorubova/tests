import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './IconBtn.module.scss';

const IconBtn = ({ Icon, onClick, colorOnHover = "#007b00", size = 40 }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className={s.root}>
      <button
        className={cx(s.button, { [s.hovered]: isHovered })}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Icon
          size={size}
          color={isHovered ? colorOnHover : 'transparent'}
        />
      </button>
    </div>
  );
};

IconBtn.propTypes = {
  Icon: PropTypes.elementType.isRequired,  
  onClick: PropTypes.func,                  
  colorOnHover: PropTypes.string,           
  size: PropTypes.number,                   
};

export default React.memo(IconBtn);
