import Image from 'next/image';
import { ButtonContainer, CardGrid, ContainerImage, ContainerInfo, EvaContainer, EvaWrapper, Title } from './styles';
import { Card } from '../Card';
import { Button } from '../Button';

import cardList from '../../api/cardList.json'

export const EVA = () => {
    return(
        <EvaWrapper>
            <EvaContainer id="eva-section">
                <Title>Conheça os <span>benefícios dos diversos ativos de Bolsa</span> e <span>alavanque seus resultados no longo prazo</span></Title>   

                <ContainerInfo>
                    <CardGrid>
                        {cardList.map((card, index) => <Card key={index} image={card.image} alt={card.alt} title={card.title} text={card.text}/>)}
                    </CardGrid>

                    <ButtonContainer>
                        <Button label="Abra sua conta grátis" href="/campanha/home" target="_blank"/>
                    </ButtonContainer>

                    <ContainerImage>
                        <Image src={'/assets/images/evaristo2x.png'} alt="Foto do Cliente Evaristo" width={514} height={606} loading='lazy' objectFit='contain'/>
                    </ContainerImage>
                </ContainerInfo>
                           
            </EvaContainer>
        </EvaWrapper>
    )
};