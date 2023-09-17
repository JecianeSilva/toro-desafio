import Image from 'next/image';
import { ButtonContainer, Column, Container, EvaWrapper, Row, Title } from './styles';
import { Card } from '../Card';
import { Button } from '../Button';

export const EVA = () => {

    const cardList = [{
        image:"/assets/icons/user-account.svg",
        alt:"Icone de File",
        title: "Ações",
        text: "Potencial de crescimento e valorização expressiva no longo prazo, assim como oportunidade de receber dividendos periódicos das empresas."
    },{
        image:"/assets/icons/user-account.svg",
        alt:"Icone de File",
        title: "FIIs",
        text: "Potencial de crescimento e valorização expressiva no longo prazo, assim como oportunidade de receber dividendos periódicos das empresas."
    },{
        image:"/assets/icons/user-account.svg",
        alt:"Icone de File",
        title: "BDRs",
        text: "Potencial de crescimento e valorização expressiva no longo prazo, assim como oportunidade de receber dividendos periódicos das empresas."
    },{
        image:"/assets/icons/user-account.svg",
        alt:"Icone de File",
        title: "Ações",
        text: "Potencial de crescimento e valorização expressiva no longo prazo, assim como oportunidade de receber dividendos periódicos das empresas."
    }]
    return(
        <EvaWrapper>
            <Container id="eva-section">
                <Title>Conheça os <span>benefícios dos diversos ativos de Bolsa</span> e <span>alavanque seus resultados no longo prazo</span></Title>
                <Row>
                    <Column>
                        {cardList.slice(0,2).map((card) => <Card image={card.image} alt={card.alt} title={card.title} text={card.text}/>)}
                    </Column>
                    <Column>
                        <div style={{position:'absolute', display: 'flex', justifyContent:"center", alignItems: 'center'}}>
                            <img src={'./assets/images/evaristo.png'} alt="Foto de Evaristo" style={{zIndex: 1}}/>
                            <div style={{backgroundColor: '#DBC7FF', position: 'absolute', bottom: 0, width:'51.24rem', height: '45.82rem'}}></div>
                        </div>
                    </Column>
                    <Column>
                        {cardList.slice(2,4).map((card) => <Card image={card.image} alt={card.alt} title={card.title} text={card.text}/>)}
                    </Column>
                </Row>
                <ButtonContainer>
                    <Button label="Abra sua conta grátis" href="https://cadastro.toroinvestimentos.com.br/campanha/home" />
                </ButtonContainer>
            </Container>
        </EvaWrapper>
    )
};