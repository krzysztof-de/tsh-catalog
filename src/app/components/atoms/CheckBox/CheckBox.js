import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './CheckBox.styles';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';

const CheckBox = React.forwardRef(({ onChange, value, label, name, id, ...props }, ref) => {

  return (
    <Wrapper value={value} >
      <input name={name} id={id} type="checkbox" value={value} onChange={onChange} data-testid={label} {...props} ref={ref} />
      <span className="select-cb">
        <CheckIcon />
      </span>
      {label}
    </Wrapper>
  );
});

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default CheckBox;
