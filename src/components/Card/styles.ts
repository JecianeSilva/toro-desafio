import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    box-shadow: rgba(31, 7, 59, 0.15) 0px 4px 10px;
    display: flex;
    z-index: 999;
    width: 34.8rem;
    padding: 2.4rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.6rem;
`
export const Title = styled.h2`
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
