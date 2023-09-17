import Image from 'next/image';
import {  ContainerInfo, Detail, ReportContainer, ReportImage, ReportWrapper, Title } from './styles';
import { Card } from '../Card';
import { Button } from '../Button';

export const Report = () => {
    return(
        <ReportWrapper>
            <ReportImage />
            <ReportContainer id="report-section">
               <ContainerInfo>
                    <Title>Acesse <span>relatórios exclusivos e recomendações de investimentos</span> de <span>forma gratuita</span></Title>
                    <Detail>Tome decisões informadas, diversifique sua carteira e maximize seu potencial de ganho com os materiais exclusivos produzidos pela nossa equipe de Análise.</Detail>
                    <Button href="" label="Abra sua conta grátis"/>
               </ContainerInfo>
            </ReportContainer>
        </ReportWrapper>
    )
};