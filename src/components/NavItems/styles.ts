import styled from "styled-components";
import { devices } from "../../styles/theme";

export const NavItem = styled.li`
    color: ${({theme}) => theme.colors.neutralMedium};
    font-size: 1.6rem;
    line-height: 150%;

    transition: all 0.25s ease 0s;

    &:hover {
        color: ${({theme}) => theme.colors.neutralDarkest};
    }

    @media ${devices.xl} { 
        font-size: 1.4rem;
    } 
    @media ${devices.lg} { 
        font-size: 1.3rem;
    }
`