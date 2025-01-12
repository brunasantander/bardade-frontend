import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { AddToCartModal } from "../addToCartModal/addToCartmodal";;
import { typeMapping } from "../../mapper/typeMapper";

export const Cardapio = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [amounts, setAmounts] = useState<{ [id: string]: number }>({});
  var [cart] = useState<Produto[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setSelectedProduct] = useState<Produto | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://bardade-backend.onrender.com/api/products", { method: "get" })
      .then((response) => response.json())
      .then((value: Produto[]) => {
        setProdutos(value);
      });
  }, []);

  const handleQuantidadeChange = (id: number, delta: number) => {
    setAmounts((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const adicionarAoCarrinho = (produto: Produto) => {
    setSelectedProduct(produto);
    cart.push(produto);
    setIsModalOpen(true);
  };

  const handleModalSubmit = async () => {
    if (cart.length > 0) {
      let total = 0;
      let amount = 0;
      let cartItem: { amount: number; id: number; name: string; type: string; price: number; }[] = [];
      cart.forEach((item) => {
        amount = amounts[item.id] || 1;
        total += amount * item.price;
        cartItem.push({...item, amount: amount});
      });

      navigate("/pedidos", { state: { cart: cartItem, total: total} });
    }
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
                <Quantidade>{amounts[produto.id] || 1}</Quantidade>
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
      <AddToCartModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </Container>
  );
};
