import React from "react";
import { CgSearch } from "react-icons/cg";

// css
import styles from "./Buscador.module.scss";

interface Props {
  busca: string;
  // esse nome todo mostra ao colocar o mouse pelo state q está enviando
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({ busca, setBusca }: Props) => {
  return (
    <div className={styles.buscador}>
      <input
        type="text"
        value={busca}
        onChange={({ target }) => setBusca(target.value)}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
};

export default Buscador;
