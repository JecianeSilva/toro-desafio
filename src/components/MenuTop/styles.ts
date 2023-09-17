import styled from "styled-components";

export const ContainerWrapper = styled.div`
    top: 0px;
    left: 0px;
    right: 0px;
    /* position: relative; */
    /* z-index: 998; */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 1.4rem 4rem;
    gap: 1rem;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px -2px 10px 0px rgba(31, 7, 59, 0.20);

`