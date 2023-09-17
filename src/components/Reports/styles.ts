import styled from "styled-components";

export const ReportWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.grayLight};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`    
export const ReportContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1140px;
    width: calc(100% - 40px);

    padding-top: 8rem;
    padding-bottom: 8rem;
`

export const ContainerInfo = styled.div` 
    width: 53.8rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.h1`
    color: #1F073B;
    font-size: 3.2rem;
    font-family: 'Din Pro';
    line-height: 130%; /* 2.6rem */
    margin-bottom: 2.4rem;
    & span {
        font-family: 'Din Pro Bold';
    }
`

export const Detail = styled.p`
    font-size: 1.8rem;
    line-height: 150%; /* 2.6rem */
    margin-bottom: 4rem;
    & span {
        font-family: 'Din Pro Bold';
    }
`

export const ReportImage = styled.div`
    width: 100%;
    max-width: 66.6rem;
    min-height: 57.88rem;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;
    width: 100%;
    height: 100%;

    background-size: cover;
    transform: rotate(4.847deg);
    flex-shrink: 0;
    background-image: image-set(url('/assets/images/phono-screen.png') 1x, url('/assets/images/phone-screen2x.png') 2x);
    
`
export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 12rem;
    justify-content: center;
`