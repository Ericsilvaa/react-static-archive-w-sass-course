import React from "react";
import filtros from "./filtros.json";

// styles
import styles from "./Filtros.module.scss";
import classNames from 'classnames';


// duas maneira diferentes de declaração
type IOpcao = (typeof filtros)[0];


interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>;
}

const Filtros = ({filtro, setFiltro}: Props) => {
  function selecionarFiltro(opcao: IOpcao) {
    // verificação do toggle
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button
          className={classNames({
            // utilizando 2 metodos de acesso! aqui garante o dinamismo.
            [styles.filtros__filtro]: true, 
            [styles["filtros__filtro--ativo"]]: filtro === opcao.id,
          })}
          key={opcao.id}
          onClick={() => selecionarFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
};

export default Filtros;


/*
  Utilizando css modules e ter classes condicionais
  necessario install:
    'npm install classnames'
  Será uma function.... classNames({ })

*/