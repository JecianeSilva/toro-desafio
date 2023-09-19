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
    gap: 1.6rem;

    @media ${devices.md} {
        width: 100%;
        max-width: 40rem;
    }

    @media ${devices.sm} {
        width: 100%;
    }
`
export const Title = styled.h3`
    color: var(--color-brand-primary-dark, #306);
    font-size: 2.1rem;
    line-height: 130%; /* 1.70625rem */
`
export const Description = styled.p`
    color: #5B6067;
    /* WEB/Text Mobo/t3 */
    font-family: DIN Pro;
    font-size: 1.6rem;
    line-height: 150%;
`
