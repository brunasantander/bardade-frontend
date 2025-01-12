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
  PaymentMethodsWrapper,
  PaymentMethods,
  PriceWrapper,
} from "./modal-styles";
import { Items } from "../../../entities/items";
import { Key, useState } from "react";
import { PaymentModal } from "../components/pagamento/modal";

export const Modal = ({ isOpen, onClose, selectedTable, orders }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
  };

  const closeTable = () => {
    console.log(paymentMethod);
    fetch(
      `https://bardade-backend.onrender.com/api/table/${selectedTable.id}/${paymentMethod}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        setIsModalOpen(true);
      })
      .catch(() => {
        alert("Ocorreu um erro ao fechar a mesa");
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
          <PriceWrapper>
            <Total>Total Geral: </Total>
            <TotalPreco> R${calculateTotal().toFixed(2)}</TotalPreco>
          </PriceWrapper>
          <PaymentMethodsWrapper
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <PaymentMethods value="">
              Selecionar Método de Pagamento
            </PaymentMethods>
            <PaymentMethods value="débito">Débito</PaymentMethods>
            <PaymentMethods value="crédito">Crédito</PaymentMethods>
            <PaymentMethods value="dinheiro">Dinheiro</PaymentMethods>
            <PaymentMethods value="pix">Pix</PaymentMethods>
          </PaymentMethodsWrapper>
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
