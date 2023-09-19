import { ButtonContainer } from "./styles"

export const Button = ({label = '', href, ...props}) => {
    return (
        <ButtonContainer {...props} href={href} target="_blank">
            {label}
        </ButtonContainer>
    )
}