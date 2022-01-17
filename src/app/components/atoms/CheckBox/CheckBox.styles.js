import styled from 'styled-components';

export const Wrapper = styled.label`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 1rem 0 0;
  line-height: 1.1;
  -webkit-user-select: none;  
  -moz-user-select: none;     
  -ms-user-select: none;      
  user-select: none;  
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
    border: 1px solid ${({ isChecked, theme }) => (isChecked ? theme.colors.primary : theme.colors.grey40)};
    background: ${({ isChecked, theme }) => (isChecked ? theme.colors.primary : theme.colors.white)};
    border-radius: 4px;

    svg {
      max-width: 100%;
      max-height: 100%;
      fill: ${({ theme }) => theme.colors.white};
      display: ${({ isChecked }) => (isChecked ? 'block' : 'none')};
    }
  }
`;
