import {
  ModalOverlay,
  ModalContent,
  Title,
  ButtonGroup,
  Button,
} from "./modal-styles";
import { useNavigate } from "react-router-dom";

export const CartSendModal = ({ isOpen, onClose }: any) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
    navigate("/");
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Title>Pedido enviado para cozinha !</Title>
        <ButtonGroup>
          <Button onClick={closeModal}>Fechar</Button>
        </ButtonGroup>
      </ModalContent>
    </ModalOverlay>
  );
};
