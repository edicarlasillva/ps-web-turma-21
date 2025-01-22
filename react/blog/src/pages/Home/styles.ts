import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

export const Container = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  padding: 0 15px;

  input {
    flex: 1;
    padding: 10px;
    border: 2px solid ${({ theme }) => theme.colors.border};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1rem;
  }

  button {
    padding: 10px 20px;
    border: none;
    color: ${({ theme }) => theme.colors.backgroundColor};
    font-size: 1rem;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
  }
`