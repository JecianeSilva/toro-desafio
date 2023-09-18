import styled from "styled-components";
import { devices } from "../../styles/theme";

export const ContainerWrapper = styled.div`
    top: 0px;
    left: 0px;
    right: 0px;
    position: fixed;
    z-index: 999;
    margin: 0 auto;


    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 1.4rem 4rem;
    gap: 1rem;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px -2px 10px 0px rgba(31, 7, 59, 0.20);

    @media ${devices.xl} {
        padding: 1.3rem 3.75rem; 
    }
    @media ${devices.lg} {
        padding: 1.1rem 3rem; 
    }
    @media ${devices.md} {
        padding: 1rem 2rem; 
    }
`