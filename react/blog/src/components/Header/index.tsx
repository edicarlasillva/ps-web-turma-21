import logo from "../../assets/logo.png";

import { Container, Logo, Title, Wrapper } from "./styles";

export function Header() {
  return (
    <Wrapper>
      <Container>
        <div>
          <Title>Meu Blog</Title>
          <p>Por favor, faça login para continuar.</p>
        </div>

        <Logo src={logo} />
      </Container>
    </Wrapper>
  );
}
