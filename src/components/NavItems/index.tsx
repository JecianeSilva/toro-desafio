import { NavItem } from "./styles";

export const NavItems = ({link, children}) => {
    return (
        <a href={link}>
            <NavItem>
                {children}
            </NavItem>
        </a>
    )
}