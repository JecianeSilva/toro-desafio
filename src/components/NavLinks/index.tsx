import { NavItems } from "../NavItems";
import { Container } from "./styles";

export const NavLink = ({navItems = []}) => {
    return (
        <Container aria-label="nav links">
            {navItems.map(link =>
                <NavItems key={link.link} {...link} />
            )}       
        </Container>
    )
}