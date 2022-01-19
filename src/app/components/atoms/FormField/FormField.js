import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './FormField.styles';

const FormField = React.forwardRef(({ value, label, name, id, type = 'text', placeholder, ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} value={value} placeholder={placeholder} data-testid={label} {...props} ref={ref} />
    </Wrapper>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
