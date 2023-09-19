import styled from "styled-components";
import { devices } from "../../styles/theme";
import { Container } from "../Container";

export const ReportWrapper = styled.div`
    background-color: ${({theme}) => theme.colors.grayLight};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`    
export const ReportContainer = styled(Container)`
    @media ${devices.md} {
        flex-direction: column-reverse;
        gap: 4rem;
        padding: 4rem 2.4rem;
    }
`

export const ContainerInfo = styled.div` 
    width: 53.8rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${devices.xl} {
        width: 41.5rem;
        font-size: 3.75rem;
    }

    @media ${devices.lg} {
        width: 33rem;
        font-size: 3.2rem;
    }

    @media ${devices.md} {
        width: 80%;
        align-items: center;
    }

    @media ${devices.sm} {
        width: 100%;
    }
`

export const Title = styled.h2`
    color: ${({theme}) => theme.colors.primaryDarkest};
    align-self: stretch;
    font-size: 3.2rem;
    line-height: 130%;
    margin-bottom: 2.4rem;
    & span {
        font-family: 'Din Pro Bold'
    }

    @media ${devices.xl} {
        font-size: 3rem;
    }

    @media ${devices.lg} {
        font-size: 1.7rem;
    }

    @media ${devices.md} {
        font-size: 2.8rem;
        line-height: 110%;
        text-align: center;
    }
`

export const Detail = styled.p`
    font-size: 1.8rem;
    line-height: 150%; 
    margin-bottom: 4rem;

    @media ${devices.xl} {
        font-size: 1.7rem;
    }

    @media ${devices.lg} {
        font-size: 1.35rem;
    }

    @media ${devices.md} {
        font-size: 1.6rem;
        text-align: center;
    }
`

export const ReportImage = styled.div`
    max-width: 500px;
    width: 100%;
    min-height: 392px;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

    background-size: contain;
    background-position: center;
    /* transform: rotate(4.847deg); */
    background-repeat: no-repeat;
    background-image: image-set(url('/assets/images/phone-screen.png'));

    @media ${devices.md} {
        background-image: image-set(url('/assets/images/phone-screen-mobile.png'));        
    }
`