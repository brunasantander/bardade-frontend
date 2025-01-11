import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 0;
  list-style: none;
`;

export const Item = styled.button`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #fff;
`;


export const NomeMesa = styled.h2`
  color: #333;
  font-size: 1.5rem;
`;

export const Cliente = styled.p`
  margin: 5px 0;
  color: #555;
`;

export const Preco = styled.p`
  margin: 5px 0;
  font-weight: bold;
  color: #007b5e;
`;

export const MainWrapper = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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