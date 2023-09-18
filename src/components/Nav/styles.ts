import styled from "styled-components";
import { devices, breakpoints} from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    max-width: calc(${breakpoints["2xl"]} - 20rem);
    width: 100%;

    @media ${devices.xl} { 
        max-width: calc(${breakpoints.xl} - 16.6rem);
    } 
    @media ${devices.lg} { 
        max-width: calc(${breakpoints.lg} - 13.25rem);
    }
    
    .logo-nav-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
         
        & a img {
            @media ${devices.sm} { 
            max-width: 101px;
            max-height: 19px;
        }
    } 

    }
    @media ${devices.md} { 
        justify-content: space-between;
        gap: 2.8rem;
    } 

    @media ${devices.sm} { 
        gap: 1rem;
    } 
`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;

    @media ${devices.md} { 
        justify-content: space-between;
        gap: 2.8rem;
    }

    @media ${devices.sm} { 
        justify-content: space-between;
        gap: 1rem;
    } 
`
export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 1.6rem;
    border-radius: 0.4rem;
    border: 1px solid ${({theme}) => theme.colors.primary};

    gap: 0.4rem;

    font-family: 'Din Pro Medium';
    font-size: 1.6rem;

    color: ${({theme}) => theme.colors.primary};
    background-color: ${({theme}) => theme.colors.white};
    
    cursor: pointer;
    transition: all 0.25s ease 0s;

    &:active {
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.primary};
    }

    &:hover {
        color: ${({theme}) => theme.colors.white};
        background-color: ${({theme}) => theme.colors.primaryDark};
    }

    
    @media ${devices.sm} { 
        padding: 1.2rem 1.6rem;
        font-size: 1.4rem;
    } 
`
export const LoginButton = styled.a`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    cursor: pointer;
    transition: all 0.25s ease 0s;

    .login-text {
        color: ${({theme}) => theme.colors.neutralDark};
        font-size: 1.4rem;
        line-height: 150%;
    }

    &:hover{
        .login-text {
            color: ${({theme}) => theme.colors.primary};
        }
    }
    .svg {
        color:  ${({theme}) => theme.colors.primaryDarkest};
    }

    @media ${devices.sm} { 
        display: none;
    } 
`

export const MenuButton = styled.a`
    display: none;
    align-items: center;
    gap: 2.8rem;
    cursor: pointer;
    transition: all 0.25s ease 0s;

    @media ${devices.lg} { 
        display: flex;
    } 
`