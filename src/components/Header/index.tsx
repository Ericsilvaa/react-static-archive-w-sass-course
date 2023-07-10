import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

const Header = () => {
  return (
    // <main>
    <header className={styles.main}>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <div className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </div>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
      </section>
    </header>
    // </main>
  );
};

export default Header;
