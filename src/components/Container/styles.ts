import styled from "styled-components";
import { breakpoints, devices } from "../../styles/theme";

export const ContainerSection = styled.section`
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