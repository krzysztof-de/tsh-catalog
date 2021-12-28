import React, { useState, useEffect } from 'react';
import { StyledCheckbox } from './CheckBox.styles';
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg';

const CheckBox = (props) => {
    const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
  };

  return (
    <StyledCheckbox {...props} onClick={toggleCheck}>
      <input type="checkbox" value="Active" name="Active" />
      <span className="select-cb">
        <CheckIcon />
      </span>
      {props.label}
    </StyledCheckbox>
  );
};

export default CheckBox;
