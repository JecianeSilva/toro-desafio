import Image from "next/image"
import { NavLink } from "../NavLinks"
import { Button, ButtonContainer, Container, LoginButton, MenuButton } from "./styles"
import navItems from "../../api/navItems.json"

export const Nav = () => {
    return(
        <Container> 
            <div className="logo-nav-wrapper">
                <a className="logo logo-desktop" href="/">
                    <Image src={'/assets/logos/toro-logo.svg'} width={114} height={23} alt="Logo da Toro Investimentos" loading="lazy"/>
                </a>
            </div>
            <NavLink navItems={navItems} />
            <ButtonContainer>
                <LoginButton href="/entrar" target="_blank">
                    <Image src={"/assets/icons/user-account.svg"} alt="Login" loading="lazy" width={24} height={24}/>
                    <span className="login-text">Fazer login</span>
                </LoginButton>
                <Button href="/campanha/home" target="_blank">Abra sua conta</Button>
                <MenuButton target="_self" role="button" tabIndex={0}>
                    <Image src={"/assets/icons/mobile-menu.svg"} alt="Abrir Menu" loading="lazy" width={27} height={24}/>
                </MenuButton>
            </ButtonContainer>
        </Container>
    )
}