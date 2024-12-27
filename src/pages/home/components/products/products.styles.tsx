import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Item = styled.li`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px 0;
  padding: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const NomeProduto = styled.h2`
  color: #333;
  font-size: 1.5rem;
`;

export const Descricao = styled.p`
  margin: 5px 0;
  color: #555;
`;

export const Preco = styled.p`
  margin: 5px 0;
  font-weight: bold;
  color: #007b5e;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantidadeMais = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const QuantidadeMenos = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const Carrinho = styled.button`
  background-color: #ffa07a;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  margin-left: 10px;;
  cursor: pointer;
  &:hover {
    background-color: #f8c093;
  }
`;

export const Quantidade = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const MainWrapper = styled.div``;

export const PedidoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
