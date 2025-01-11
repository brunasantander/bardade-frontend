import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  color: #000;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 80%;
  padding: 8px;
  border: 2px solid #c0c0c0;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: #ffa07a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #f8c093;
  }

  &:focus {
    outline: none;
  }
`;

export const CancelButton = styled(Button)`
  background-color: #f8c093;

  &:hover {
    background-color: #ffa07a;
  }
`;
