import {
  ModalOverlay,
  ModalContent,
  Title,
  ButtonGroup,
  Button,
  CancelButton
} from "./addToCartmodal-styles";
export const AddToCartModal = ({ isOpen, onClose, onSubmit }: any) => {
  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit();
    onClose();
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Novo item adicionado ao carrinho, deseja fechar o pedido ?</Title>
        <ButtonGroup>
          <Button onClick={closeModal}>Fechar</Button>
          <CancelButton onClick={handleSubmit}>Continuar</CancelButton>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};
