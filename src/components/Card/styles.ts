import styled from "styled-components";
import { devices } from "../../styles/theme";

export const CardContainer = styled.div`
    background-color: ${({theme})=> theme.colors.white};
    border-radius: 8px;
    box-shadow: rgba(31, 7, 59, 0.15) 0px 4px 10px;
    display: flex;
    z-index: 998;
    width: 34.8rem;
    padding: 2.4rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;

    @media ${devices.md} {
        width: 100%;
        max-width: 40rem;
    }

    @media ${devices.sm} {
        width: 100%;
    }
`
export const Title = styled.h3`
    color: ${({theme}) => theme.colors.primaryDark};
    font-size: 2.1rem;
    font-family: 'Din pro Black';
    line-height: 130%; 
`
export const Description = styled.p`
    color: ${({theme}) => theme.colors.neutralMedium};
    font-family: DIN Pro;
    font-size: 1.6rem;
    line-height: 150%;
`
