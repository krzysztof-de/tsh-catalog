import styled from 'styled-components'

export const Wrapper = styled.div`
    grid-gap: 8px;
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    width: 112px;
    margin: 16px 0;
    height: 16px;

    svg {
        width: 16px;
        height: 16px;
    }

    svg #star_border path {
        fill: ${({ theme }) => theme.colors.grey50};
    }

    svg #star path {
        fill: ${({ theme }) => theme.colors.secondary};
    }


`

