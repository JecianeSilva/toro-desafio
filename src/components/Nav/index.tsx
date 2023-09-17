import Image from "next/image"
import { NavLink } from "../NavLinks"
import { Button, ButtonContainer, Container, LoginButton } from "./styles"

export const Nav = () => {
    const  navItems = [{
        children: 'Bolsa',
        link: '/bolsa',
    },{
        children: 'Renda Fixa',
        link: '/renda-fixa',
    },{
        children: 'Fundos',
        link: '/fundos',
    },{
        children: 'Plataformas de Trading',
        link: '/plataformas',
    },{
        children: 'Aprenda',
        link: '/aprenda',
    },{
        children: 'Simulador',
        link: '/simulador',
    }]
    return(
        <Container> 
            <div className="logo-nav-wrapper">
                <a className="logo logo-desktop">
                    <Image src={'/assets/logos/toro-logo.svg'} width={114} height={23} alt="Logo da Toro Investimentos" />
                </a>
            </div>
            <NavLink navItems={navItems} />
            <ButtonContainer>
                <LoginButton>
                    <Image src={"/assets/icons/user-account.svg"} alt="Login" loading="lazy" width={24} height={24}/>
                    <span className="login-text">Fazer login</span>
                </LoginButton>
                <Button role="button" tabIndex={0}  href="https://cadastro.toroinvestimentos.com.br/campanha/home" target="_blank">Abra sua conta</Button>
            </ButtonContainer>
        </Container>
    )
}