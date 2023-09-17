import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    .logo-nav-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
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
    font-size: 1.4rem;

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
`
export const LoginButton = styled.a`
    display: flex;
    align-items: center;
    gap: 1.2rem;

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
`