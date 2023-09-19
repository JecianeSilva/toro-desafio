import Image from 'next/image';
import { Button, ContainerInfo, HeroContainer, HeroImage, HeroWrapper, InfoList, SantanderContainer } from './styles';

export const Hero = () => {
    return(
        <HeroWrapper>
            <HeroContainer id="hero-section">
                <ContainerInfo>
                    <h1>Aumente seu potencial de ganho com quem vence na Bolsa há anos</h1>   
                    <InfoList>
                        <li>Assessoria Exclusiva gratuita.</li>
                        <li>Recomendações de investimentos por experts.</li>
                        <li>Corretagem Zero.</li> 
                    </InfoList>
                    <Button role="button" tabIndex={0}  href="/campanha/home" target="_blank">Abra sua conta grátis</Button>
                    <SantanderContainer>
                        <span>Uma empresa</span>
                        <Image src='/assets/logos/logo-santander.svg' width={156} height={15} alt="Santander" loading='lazy' />
                    </SantanderContainer>
                </ContainerInfo>
                <HeroImage />
            </HeroContainer>
        </HeroWrapper>
    )
};