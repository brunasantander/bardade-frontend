import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  height: 100%;
  max-height: 600px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const TableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 20px; /* Espaço para os botões */
`;

export const ButtonGroup = styled.div`
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

export const Button = styled.button`
  background-color: #ffa07a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #f8c093;
  }

  &:focus {
    outline: none;
  }
`;

export const Title = styled.h2`
  color: #000;
  margin-bottom: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f8c093;
    color: #ffffff;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
  }
`;

export const Total = styled.p`
  font-weight: bold;
  margin: 0;
`;

export const TotalPreco = styled.p`
  color: green;
  font-weight: bold;
  margin: 0;
  margin-left: 5px;
`;

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const PaymentMethodsWrapper = styled.select``;

export const PaymentMethods = styled.option``;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: start;
`;
