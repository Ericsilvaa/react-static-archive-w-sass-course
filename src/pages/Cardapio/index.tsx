import { useState } from "react";

// components
import Header from "components/Header";
import Buscador from "components/Buscador";



// css
import styles from './Cardapio.module.scss'

const Cardapio = () => {
  const [busca, setBusca] = useState("");

  return (
    <main className={styles.cardapio}>
      <Header />
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
      </section>
    </main>
  );
};

export default Cardapio;
