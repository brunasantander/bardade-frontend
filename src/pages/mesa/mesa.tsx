import { Modal } from "./components/modal";
import { Mesa } from "../../entities/mesa";
import {
  Container,
  Cliente,
  Item,
  Lista,
  MainWrapper,
  NomeMesa,
  Preco,
  Wrapper,
  AlertWrapper,
} from "./mesa-styles";
import { useState, useEffect } from "react";
import { Items } from "../../entities/items";

export const Mesas = () => {
  const [mesas, setMesas] = useState<Mesa[]>([]);
  const [selectedMesa, setSelectedMesa] = useState<Mesa | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState<Items[]>([]);

  useEffect(() => {
    fetch("https://bardade-backend.onrender.com/api/table", { method: "get" })
      .then((response) => response.json())
      .then((value: Mesa[]) => {
        setMesas(value);
      });
  }, []);

  const handleItemClick = (mesa: Mesa) => {
    setSelectedMesa(mesa);
    setIsModalOpen(true);

    fetch(`https://bardade-backend.onrender.com/api/table/${mesa.id}`, {
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        setOrders(data);
      });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMesa(null);
    setOrders([]);
  };
  return (
    <Container>
      <h1>Mesas</h1>
      {mesas.length > 0 ? (
        <>
          <Lista>
            {mesas.map((mesa) => (
              <Item key={mesa.id} onClick={() => handleItemClick(mesa)}>
                <MainWrapper>
                  <NomeMesa>{mesa.number}</NomeMesa>
                  <Cliente>{mesa.client}</Cliente>
                  <Preco>R$ {mesa.total.toFixed(2)}</Preco>
                </MainWrapper>
              </Item>
            ))}
          </Lista>
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              selectedTable={selectedMesa}
              orders={orders}
            />
          )}
        </>
      ) : (
        <Wrapper>
          <AlertWrapper>
            <p>Nenhuma mesa aberta ainda</p>
          </AlertWrapper>
        </Wrapper>
      )}
    </Container>
  );
};
