import styled from "styled-components";

export const MainWrapper = styled.div`
  margin-top: 100px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TitleWrapper = styled.p``;

export const ListWrapper = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItens = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
  background-color: #f9f9f9;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const AlertWrapper = styled.div`
  box-shadow: 2px 2px 5px rgba(233, 177, 177, 0.1);
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 100px;
  margin-top: 250px;
`;

export const Button = styled.button`
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

export const WrapperQuantidade = styled.div`
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

export const Quantidade = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;