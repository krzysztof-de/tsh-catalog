import styled from "styled-components";

export const StyledSearch = styled.input`
  padding: 16px 46px 16px 16px;
  border: 1px solid ${({ theme }) => theme.colors.grey40};
  box-sizing: border-box;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.black};
  resize: none;
  height: 48px;
  width: 100%;
  &:focus {
    outline: none;
  }

`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        right: 16px;
        fill: ${({ theme }) => theme.colors.black};
    }

    svg.clear-btn {
      cursor: pointer;
    }

`