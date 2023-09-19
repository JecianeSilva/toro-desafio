import styled from "styled-components";
import { devices } from "../../styles/theme";

export const ButtonContainer = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white};
    max-width: 34.8rem;
    width: 100%;
    min-height: 4.8rem;
    padding: 1.6rem 0rem;

    font-family: 'Din Pro Medium';
    font-size: 1.4rem;
    line-height: 150%;
    border-radius: 0.4rem;

    cursor: pointer;
    transition: all 0.25s ease 0s;

    &:hover {
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.primaryDark};
    }
    
    @media ${devices.md} {
        max-width: 80%;
    }

    @media ${devices.sm} {
        max-width: 100%;
    }
`
