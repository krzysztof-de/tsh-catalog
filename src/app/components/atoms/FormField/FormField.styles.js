import styled from "styled-components";
import { Theme } from "assets/styles/Theme";

export const Label = styled.label`
  color: ${Theme.colors.black};
  margin: 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
`;

export const Input = styled.input`
  padding: 16px 46px 16px 16px;
  border: 1px solid ${Theme.colors.grey40};
  box-sizing: border-box;
  border-radius: 8px;
  font-size: ${Theme.fontSize.m};
  color: ${Theme.colors.black};
  resize: none;
  height: 48px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;