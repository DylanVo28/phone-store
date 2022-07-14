import React from 'react';
import { bool, func } from 'prop-types';
import iconPrev from'../images/icon-prev.svg'

const LeftNavM8 = React.memo(({
  disabled,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
       <img src={iconPrev.src} alt="prev"/>
    </button>
  );
});

LeftNavM8.displayName = 'LeftNav';

LeftNavM8.propTypes = {
  disabled: bool.isRequired,
  onClick: func.isRequired,
};


export default LeftNavM8;