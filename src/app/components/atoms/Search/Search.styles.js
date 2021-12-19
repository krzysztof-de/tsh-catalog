import styled from "styled-components";
import { Theme } from "assets/styles/Theme";

export const StyledSearch = styled.input`
  padding: 16px 46px 16px 16px;
  border: 1px solid ${Theme.colors.grey40};
  box-sizing: border-box;
  border-radius: 8px;
  font-size: ${Theme.fontSize.m};
  color: ${Theme.colors.black};
  resize: none;
  width: 492px;

  &:focus {
    outline: none;
  }

`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    & > svg {
        position: absolute;
        right: 16px;
        fill: ${Theme.colors.black};
    }
`