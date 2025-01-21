import { useState } from "react";
import {
  Button,
  ModalButtonConfirm,
  ModalContainer,
  ModalContent,
  ModalOverlay,
  ButtonModalCancel,
} from "./styles";

export function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToogleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <ModalContainer>
      <Button onClick={handleToogleModal}>Abrir Modal</Button>

      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Confirmar compra</h2>
            <p>Tem certeza que deseja prosseguir com esta compra?</p>
            <p>
              Valor total: <strong>R$100,00</strong>
            </p>

            <ModalButtonConfirm onClick={handleToogleModal}>
              Confirmar
            </ModalButtonConfirm>
            <ButtonModalCancel onClick={handleToogleModal}>
              Cancelar
            </ButtonModalCancel>
          </ModalContent>
        </ModalOverlay>
      )}
    </ModalContainer>
  );
}
