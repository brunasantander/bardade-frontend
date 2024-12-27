import { useState, useEffect } from "react";
import { Produto } from "../../../../entities/produtos";
import {
  Carrinho,
  Container,
  Descricao,
  Item,
  Lista,
  MainWrapper,
  NomeProduto,
  PedidoWrapper,
  Preco,
  Quantidade,
  QuantidadeMais,
  QuantidadeMenos,
  Wrapper,
} from "./products.styles";
import { typeMapping } from "../../mapper/typeMapper";
export const Cardapio = () => {
  var [produtos, setProdutos] = useState<Produto[]>([]);
  const [quantidades, setQuantidades] = useState<{ [id: string]: number }>({});
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products", { method: "get" })
      .then((response) => response.json())
      .then((value: Produto[]) => {
        setProdutos(value);
        produtos = value;
      });
  }, []);

  const handleQuantidadeChange = (id: number, delta: number) => {
    setQuantidades((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const adicionarAoCarrinho = (produto: Produto) => {
    const quantidade = quantidades[produto.id];
    const itemCarrinho = { ...produto, quantidade };
    setCarrinho((prev) => [...prev, itemCarrinho]);
  };

  return (
    <Container>
      <h1>Cardápio</h1>
      <Lista>
        {produtos.map((produto) => (
          <Item key={produto.id}>
            <MainWrapper>
              <NomeProduto>{produto.name}</NomeProduto>
              <Descricao>{typeMapping[produto.type]}</Descricao>
              <Preco>R$ {produto.price.toFixed(2)}</Preco>
            </MainWrapper>
            <PedidoWrapper>
              <Wrapper>
                <QuantidadeMenos
                  onClick={() => handleQuantidadeChange(produto.id, -1)}
                >
                  -
                </QuantidadeMenos>
                <Quantidade>{quantidades[produto.id] || 1}</Quantidade>
                <QuantidadeMais
                  onClick={() => handleQuantidadeChange(produto.id, 1)}
                >
                  +
                </QuantidadeMais>
              </Wrapper>
              <Carrinho onClick={() => adicionarAoCarrinho(produto)}>
                Adicionar ao Pedido
              </Carrinho>
            </PedidoWrapper>
          </Item>
        ))}
      </Lista>
    </Container>
  );
};
