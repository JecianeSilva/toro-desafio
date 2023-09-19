import styled from "styled-components";
import { breakpoints, devices } from "../../styles/theme";

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
    max-width: 1110px;
    width: calc(100%);
    height: 100%;

    padding-top: 8rem;
    padding-bottom: 8rem;

    @media ${devices.xl} {
        max-width: ${breakpoints.lg};
    }

    @media ${devices.lg} {
        max-width: ${breakpoints.md};
    }

    @media ${devices.md} {
        padding: 4rem 2.4rem;
    }
`
export const Title = styled.h2`
    color: ${({theme}) => theme.colors.primaryDarkest};
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 3.2rem;
    line-height: 130%;
    text-align: center;

    & span {
        font-family: 'Din Pro Black';
    }

    @media ${devices.xl} {
        font-size: 3rem;
    }

    @media ${devices.lg} {
        font-size: 2.4rem;
    }
`
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 4rem auto;
    gap: 4rem;
    min-height: calc(69.5rem);

    @media ${devices.xl} {
        margin: 3.74rem auto;
    }

    @media ${devices.lg} {
        margin: 3rem auto;
        flex-direction: column;
        align-items: center;
    }
`

export const ContainerImage = styled.div`
    position: absolute;
    max-width: 51.4rem;
    width: 100%;
    max-height: 60.6rem;
    height: 100%;

    @media ${devices.lg} {
        position: relative;
    }
`

export const CardGrid = styled.div`
    display: grid;
    margin-top: 4rem;
    width: 100%;
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 3.2rem;
    grid-auto-flow: column;

    align-items: center;
    justify-content: space-between;

    @media ${devices.md} {
       display: flex;
       flex-direction: column;
       gap: 2.4rem;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`