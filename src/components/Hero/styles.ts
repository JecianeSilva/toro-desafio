import styled from "styled-components";

export const HeroWrapper = styled.div`
    background: ${({theme}) => theme.colors.white};
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`    
export const HeroContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    width: calc(100% - 40px);

    padding-top: 8rem;
    padding-bottom: 8rem;
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
        font-weight: 700;
        line-height: 130%;
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

    list-style: circle;
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
    width: 100%;
    max-width: 55.5rem;
    min-height: 35.55rem;
    height: 100%;

    margin: 3.48rem 3.86rem 3.33rem 3.92rem;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-shrink: 0;
    width: 100%;
    height: 100%;

    background-size: cover;
    background-image: image-set(url('/assets/images/grafico.png') 1x, url('/assets/images/grafico2x.png') 2x);
    
`