import styled from "styled-components";

export const EvaWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.grayIce};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`    
export const Container = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    width: calc(100% - 40px);
    height: 100%;

    padding-top: 8rem;
    padding-bottom: 8rem;
`
export const Title = styled.h1`
    color: #1F073B;
    text-align: center;
    font-size: 3.2rem;
    line-height: 130%; /* 2.6rem */
    margin-bottom: 2.4rem;;
    & span {
        font-family: 'Din Pro Bold';
    }
`
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 34.8rem;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
`
export const Row = styled.div`
    display: flex;
    margin-top: 4rem;
    justify-content: space-between;
`
export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 12rem;
    justify-content: center;
`