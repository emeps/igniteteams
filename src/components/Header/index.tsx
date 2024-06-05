import { Container, Logo } from "./styles";

import logoImage from '@assets/rocket.png'

export function Header(){
    return(
        <Container>
            <Logo source={logoImage}/>
        </Container>
    )
}