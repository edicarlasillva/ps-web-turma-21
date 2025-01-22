import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.border};
  text-align: center;
  padding: 20px 10px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.textColor};

  p {
    margin: 5px 0;
  }
`
