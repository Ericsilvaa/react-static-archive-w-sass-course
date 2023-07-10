import cardapio from "./itens.json";
import Item from "./Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface Props {
  busca: string;
  filtro: number | null;
  ordernador: string;
}

export default function Itens({ busca, filtro, ordernador }: Props) {
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  // importante e entender
  function testaFiltro(id: number) {
    if (!filtro) return filtro === id;
    return true;
  }

  // function refatorada
  const ordenarPropriedadeCrescente = (
    lista: typeof cardapio,
    propriedade: "size" | "serving" | "price"
  ) => {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  };

  const ordenar = (novaLista: typeof cardapio) => {
    switch (ordernador) {
      case "porcao":
        return ordenarPropriedadeCrescente(novaLista, "size");
      case "qtd_pessoas":
        return ordenarPropriedadeCrescente(novaLista, "serving");
      case "preco":
        return ordenarPropriedadeCrescente(novaLista, "price");
      default:
        return novaLista;
    }
  };

  useEffect(() => {
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [busca, filtro, ordernador]);

  return (
    // unica iteração do json q está recebendo
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

// onde estamos fazendo o map.. é onde devemos aplicar o filtro
