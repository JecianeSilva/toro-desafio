import {  ContainerInfo, Detail, ReportContainer, ReportImage, ReportWrapper, Title } from './styles';
import { Button } from '../Button';

export const Report = () => {
    return(
        <ReportWrapper>
            <ReportContainer id="report-section">
                <ReportImage />
                <ContainerInfo>
                    <Title>Acesse <span>relatórios exclusivos e recomendações de investimentos</span> de <span>forma gratuita</span></Title>
                    <Detail>Tome decisões informadas, diversifique sua carteira e maximize seu potencial de ganho com os materiais exclusivos produzidos pela nossa equipe de Análise.</Detail>
                    <Button href="/campanha/home" label="Abra sua conta grátis"/>
                </ContainerInfo>
            </ReportContainer>
        </ReportWrapper>
    )
};