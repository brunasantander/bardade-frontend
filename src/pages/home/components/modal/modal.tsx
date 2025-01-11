import { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  Title,
  Input,
  ButtonGroup,
  Button,
  CancelButton
} from "./modal-styles";
export const Modal = ({ isOpen, onClose, onSubmit }: any) => {
  const [tableNumber, setTableNumber] = useState("");
  const [tableName, setTableName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(tableNumber, tableName);
    setTableNumber("");
    setTableName("");
    onClose();
  };

  const closeModal = () => {
    setTableNumber("");
    setTableName("");
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Informe o número e nome da mesa</Title>
        <Input
          type="text"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          placeholder="Número da Mesa"
        />
        <Input
          type="text"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
          placeholder="Nome da Mesa"
        />
        <ButtonGroup>
          <Button onClick={handleSubmit}>Confirmar</Button>
          <CancelButton onClick={closeModal}>Cancelar</CancelButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};
