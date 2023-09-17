import Image from "next/image"
import { CardContainer, Description, Title } from "./styles"

export const Card = ({image, alt, text, title}) => {
    return (
        <CardContainer>
            <Image src={image} alt={alt} width={24} height={24} loading="lazy" />
            <Title>{title}</Title>
            <Description>{text}</Description>
        </CardContainer>
    )
}