import { ContainerSection } from "./styles"

export const Container = ({children, id, ...props}) => {
    return(
        <ContainerSection id={id} {...props}>
            {children}
        </ContainerSection>
    )
}