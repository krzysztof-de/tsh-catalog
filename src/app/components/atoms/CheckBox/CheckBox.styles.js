import styled from 'styled-components';
import { Theme } from 'assets/styles/Theme';

export const StyledCheckbox = styled.label`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 1rem 0 0;
  line-height: 1.1;
  cursor: pointer;

  input {
    display: none;
  }

  & > span.select-cb {
    display: inline-flex;
    flex: 0 0 24px;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    margin-right: 0.75rem;
    border: 1px solid ${({isChecked}) => (isChecked? Theme.colors.primary : Theme.colors.grey40)};
    background: ${({isChecked}) => (isChecked? Theme.colors.primary : Theme.colors.white)};
    border-radius: 4px;

    svg {
      max-width: 100%;
      max-height: 100%;
      fill: ${Theme.colors.white};
      display: ${({isChecked}) => (isChecked?  'block' : 'none' )};
    }
  }
`;
