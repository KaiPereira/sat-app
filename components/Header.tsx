import Link from 'next/link';

import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <nav className={styles.header}>
      <Link href="/">
        <h4 className={styles.brand}>SAT decimator</h4>
      </Link>

      <div className={styles.linksDiv}>
        <Link className={styles.link} href="/question/0">
          Questions
        </Link>
        <Link className={styles.link} href="/question/0">
          Answers
        </Link>
      </div>
    </nav>
  );
};

export default Header;
