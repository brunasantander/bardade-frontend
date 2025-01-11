import { Button, ButtonGroup, ModalContent, ModalOverlay, Title } from "./modal-styles";
import { useNavigate } from "react-router-dom";

export const PaymentModal = ({ isOpen, onClose }: any) => {
    const navigate = useNavigate();
  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
    navigate("/");
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Pagamento realizado com sucesso!</Title>
        <ButtonGroup>
          <Button onClick={closeModal}>Fechar</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};
