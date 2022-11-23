import Link from 'next/link';

import styles from '../styles/Button.module.scss';

interface ButtonProps {
  text: string;
  link: string;
}

const Button = ({ text, link }: ButtonProps) => {
  return (
    <Link className={styles.button} href={link}>
      {text}
    </Link>
  );
};

export default Button;
