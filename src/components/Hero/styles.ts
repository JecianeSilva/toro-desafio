import styled from "styled-components";
import { breakpoints, devices } from "../../styles/theme";

export const HeroWrapper = styled.div`
    background: ${({theme}) => theme.colors.white};
    margin-top: 65px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`    
export const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1110px;
    width: calc(100%);

    padding-top: 8rem;
    padding-bottom: 8rem;

    @media ${devices.xl} {
        max-width: ${breakpoints.lg};
    }

    @media ${devices.lg} {
        max-width: ${breakpoints.md};
    }

    @media ${devices.md} {
        flex-direction: column;
        gap: 8rem;
        padding: 4rem 2.4rem;
    }
`
export const ContainerInfo = styled.div` 
    width: 44.4rem;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        color: ${({theme}) => theme.colors.primaryDarkest};
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: 'Din Pro Bold';
        font-size: 4rem;
        line-height: 130%;
    }

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
    }

    @media ${devices.sm} {
        width: 100%;
    }
`
export const InfoList = styled.ol`
    color: ${({theme}) => theme.colors.neutralMedium} ;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 1.8rem;
    line-height: 150%;
    opacity: 0.8;
    margin-left: 2rem;
    margin-bottom: 4rem;
    margin-top: 2.4rem;

    list-style: disc;

    @media ${devices.md} {
       font-size: 1.6rem;
    }
`
export const Button = styled.a`
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

    @media ${devices.md} {
        max-width: 100%;
    }
`
export const SantanderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2.4rem;

    & span {
        color: ${({theme}) => theme.colors.neutralMedium} ;
        font-size: 1.2rem;
        line-height: 1.668rem;
    }
`
export const ContainerImage = styled.div`
`
export const HeroImage = styled.div`
    max-width: 555px;
    width: 100%;
    min-height: 356px;
    height: 100%;

    margin: 3.48rem 3.87rem 3.34rem 3.93rem;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;

    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-image: image-set(url('/assets/images/grafico.png') 1x, url('/assets/images/grafico2x.png') 2x);

    @media ${devices.xl} {
        max-width: 520px;
        max-height: 334px;
        margin: 3.26rem 3.63rem 3.13rem 3.68rem;
    }

    @media ${devices.lg} {
        max-width: 416px;
        max-height: 266px;
        margin: 2.61rem 2.9rem 2.5rem 2.94rem;
    }

    @media ${devices.md} {
        background-image: image-set(url('/assets/images/grafico-mobile.png') 1x, url('/assets/images/grafico-mobile2x.png') 2x);
        width: 100%;
        height: 100%;
    }
    
`