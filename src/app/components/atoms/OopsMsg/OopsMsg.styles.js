import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    height: 344px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 8px;
    margin: 0 20px;
    padding: 10px;
    text-align: center;

    & > span {
        color: ${({ theme }) => theme.colors.grey80};
    }

    svg {
        margin: 14px;
    }
`