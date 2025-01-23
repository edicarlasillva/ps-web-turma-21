import styled, { css } from 'styled-components'

interface ButtonProps {
  $primary?: boolean
}

export const Avatar = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
`

export const Button = styled.button<ButtonProps>`
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.colors.primary};

  ${({ $primary }) =>
    $primary &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.backgroundColor};
    `}
  font-size: 1em;
  margin: 1em 0.5rem 1rem 0;
  padding: 0.25em 1em;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const RoundedButton = styled(Button)`
  border-radius: 20px;
  padding: 0.5em 1.5em;
  font-weight: bold;
`

export const Article = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 20px;

  .category {
    font-size: 13px;
    margin: 20px 0;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }

  .post-info {
    margin: 20px 0;
    display: flex;
    gap: 10px;

    div {
      display: flex;
      flex-direction: column;
    }

    span {
      font-size: 13px;
      line-height: 20px;
      color: ${({ theme }) => theme.colors.textColor};
    }
  }

  .description {
    color: ${({ theme }) => theme.colors.textColor};
    margin-bottom: 10px;
  }
`