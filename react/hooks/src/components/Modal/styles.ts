import styled from 'styled-components'

export const ModalContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;

  h2 {
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 10px;
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-bottom: 30px;
  background-color: blueviolet;
`

export const ModalButtonConfirm = styled(Button)`
  background-color: #00875f;
  margin-right: 0.5rem;

  &:hover {
    background-color: #006e4c;
  }
`

export const ButtonModalCancel = styled(Button)`
  background-color: #ab222e;

  &:hover {
    background-color: #8b1f2a;
  }
`