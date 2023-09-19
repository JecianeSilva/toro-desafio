import { ContainerSection } from "./styles"

export const Container = ({children, flexDirection = 'row', justifyContent = "space-between",id, ...props}) => {
    return(
        <ContainerSection flex-direction={flexDirection} justify-content={justifyContent} {...props}>
            {children}
        </ContainerSection>
    )
}