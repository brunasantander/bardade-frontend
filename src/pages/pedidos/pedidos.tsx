import { useState } from "react";
import { Modal } from "../home/components/modal/modal";
import { CartSendModal } from "./components/modal/modal";
import {
  AlertWrapper,
  Button,
  ListItens,
  ListWrapper,
  MainWrapper,
  Quantidade,
  QuantidadeMais,
  QuantidadeMenos,
  Wrapper,
  WrapperQuantidade,
} from "./pedidos-styles";
import { useLocation } from "react-router-dom";

export const Orders = () => {
  const { state } = useLocation();
  const { cart, total } = state || {};
  const [cartItems, setCartItems] = useState(cart || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const closeCart = async () => {
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    const updatedCart = cartItems.filter((_: any, i: number) => i !== index);
    setCartItems(updatedCart);
  };

  const handleQuantidadeChange = (id: number, delta: number) => {
    setCartItems((prevCart: any[]) =>
      prevCart.map((item: { id: number; amount: number; }) =>
        item.id === id ? { ...item, amount: Math.max(1, item.amount + delta) } : item
      )
    );
  };

  const handleModalSubmit = async (tableNumber: string, tableName: string) => {
    if (cartItems.length > 0) {
      const body = {
        products: cartItems,
        total: total,
        tableNumber: tableNumber,
        tableName: tableName,
      };

      fetch("http://localhost:3000/api/table", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then(() => {
        setIsCartModalOpen(true);
      });
    }
  };

  return (
    <MainWrapper>
      <h1>Pedidos</h1>
      {cartItems.length > 0 ? (
        <>
          <ListWrapper>
            {cartItems.map((item: any, index: number) => (
              <ListItens key={index}>
                <span>
                  {item.name}
                </span>
                <WrapperQuantidade>
                  <QuantidadeMenos
                    onClick={() => handleQuantidadeChange(item.id, -1)}
                  >
                    -
                  </QuantidadeMenos>
                  <Quantidade>{item.amount}</Quantidade>
                  <QuantidadeMais
                    onClick={() => handleQuantidadeChange(item.id, 1)}
                  >
                    +
                  </QuantidadeMais>
                  <Button onClick={() => handleDelete(index)}>Remover</Button>
                </WrapperQuantidade>
              </ListItens>
            ))}
          </ListWrapper>
          <Button onClick={closeCart}>Fechar pedido</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleModalSubmit}
          />
          <CartSendModal
            isOpen={isCartModalOpen}
            onClose={() => setIsCartModalOpen(false)}
          />
        </>
      ) : (
        <Wrapper>
          <AlertWrapper>
            <p>Nenhum pedido realizado ainda.</p>
          </AlertWrapper>
        </Wrapper>
      )}
    </MainWrapper>
  );
};
