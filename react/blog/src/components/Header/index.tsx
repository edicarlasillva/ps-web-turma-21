import logo from "../../assets/logo.png";
import { useTheme } from "../../contexts/hooks/useTheme";

import { Container, Logo, Title, Wrapper } from "./styles";

export function Header() {
  const { toggleTheme } = useTheme();

  return (
    <Wrapper>
      <Container>
        <div>
          <Title>Meu Blog</Title>
          <p>Por favor, faça login para continuar.</p>
        </div>

        <Logo src={logo} />

        <button onClick={toggleTheme}>Alternar Tema</button>
      </Container>
    </Wrapper>
  );
}
