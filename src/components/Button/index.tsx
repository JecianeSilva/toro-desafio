import { ButtonContainer } from "./styles"

export const Button = ({label = 'Abra sua conta grátis', href, ...props}) => {
    return (
        <ButtonContainer {...props} role="button" tabIndex={0}  href={href} target="_blank">
            {label}
        </ButtonContainer>
    )
}