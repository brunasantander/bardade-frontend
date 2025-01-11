import {
  Overlay,
  ModalWrapper,
  ButtonGroup,
  Button,
  Title,
  Table,
  Total,
  TotalPreco,
  TotalWrapper,
} from "./modal-styles";
import { Items } from "../../../entities/items";
import { Key, useState } from "react";
import { PaymentModal } from "../components/pagamento/modal";

export const Modal = ({ isOpen, onClose, selectedTable, orders }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
  };

  const closeTable = () => {
    fetch(`http://localhost:3000/api/table/${selectedTable.id}`, {
      method: "DELETE",
    }).then(() => {
      setIsModalOpen(true);
    });
  };

  const calculateTotal = () => {
    return orders.reduce(
      (acc: number, order: { amount: number; price: number }) =>
        acc + order.amount * order.price,
      0
    );
  };

  return (
    <Overlay>
      <ModalWrapper>
        <Title>Pedidos da Mesa {selectedTable.number}</Title>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: Items, index: Key | null | undefined) => (
              <tr key={index}>
                <td>{order.productName}</td>
                <td>R$ {order.price.toFixed(2)}</td>
                <td>{order.amount}</td>
                <td>R$ {(order.amount * order.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <TotalWrapper>
          <Total>Total Geral: </Total>
          <TotalPreco> R${calculateTotal().toFixed(2)}</TotalPreco>
        </TotalWrapper>
        <ButtonGroup>
          <Button onClick={closeModal}>Fechar</Button>
          <Button onClick={closeTable}>Pagar</Button>
        </ButtonGroup>
      </ModalWrapper>
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Overlay>
  );
};
