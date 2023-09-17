import styled from "styled-components";

export const NavItem = styled.li`
    color: ${({theme}) => theme.colors.neutralMedium};
    font-size: 1.6rem;
    line-height: 150%;

    transition: all 0.25s ease 0s;

    &:hover {
        color: ${({theme}) => theme.colors.neutralDarkest};
    }
`