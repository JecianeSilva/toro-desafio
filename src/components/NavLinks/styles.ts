import styled from "styled-components";
import { devices } from "../../styles/theme";

export const Container = styled.nav`
    display: flex;
    align-items: flex-start;
    gap: 4rem;
    
    @media ${devices.xl} { 
        gap: 3rem;
    } 
    @media ${devices.lg} { 
        gap: 2rem;
        display: none;
    }
`