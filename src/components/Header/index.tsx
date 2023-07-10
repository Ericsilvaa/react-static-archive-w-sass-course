import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";


// Components


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


    </header>
    // </main>
  );
};

export default Header;
