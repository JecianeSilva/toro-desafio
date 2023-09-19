import Image from 'next/image';
import { ButtonContainer, CardGrid, Container, ContainerImage, ContainerInfo, EvaWrapper, Title } from './styles';
import { Card } from '../Card';
import { Button } from '../Button';

export const EVA = () => {

    const cardList = [{
        image:"/assets/icons/actions.svg",
        alt:"Icon File",
        title: "Ações",
        text: "Potencial de crescimento e valorização expressiva no longo prazo, assim como oportunidade de receber dividendos periódicos das empresas."
    },{
        image:"/assets/icons/fiis.svg",
        alt:"Icon Buildings",
        title: "FIIs",
        text: "Ganhe renda passiva através de alugueis mensais, enquanto diversifica seus investimentos em imóveis sem a necessidade de comprar um imóvel físico."
    },{
        image:"/assets/icons/bdr.svg",
        alt:"Icon Globe",
        title: "BDRs",
        text: "Acesso a empresas globais sem precisar investir em ações no exterior, proporcionando ampla diversificação geográfica e setorial."
    },{
        image:"/assets/icons/etf.svg",
        alt:"Icon paper",
        title: "Ações",
        text: "Exposição simplificada a diferentes setores e índices de mercado, possibilitando diversificação instantânea em diversos ativos."
    }]
    return(
        <EvaWrapper>
            <Container id="eva-section">
                <Title>Conheça os <span>benefícios dos diversos ativos de Bolsa</span> e <span>alavanque seus resultados no longo prazo</span></Title>
                
                <ContainerInfo>
                    <CardGrid>
                        {cardList.map((card, index) => <Card key={index} image={card.image} alt={card.alt} title={card.title} text={card.text}/>)}
                    </CardGrid>

                    <ButtonContainer>
                        <Button label="Abra sua conta grátis" href="https://cadastro.toroinvestimentos.com.br/campanha/home" />
                    </ButtonContainer>

                    <ContainerImage>
                        <Image src={'/assets/images/evaristo2x.png'} alt="Foto do Cliente Evaristo" width={514} height={606}/>
                    </ContainerImage>
                </ContainerInfo>
                           
            </Container>
        </EvaWrapper>
    )
};