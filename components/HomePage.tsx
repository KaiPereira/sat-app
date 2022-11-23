import Image from 'next/image';

import Button from './Button';

import styles from '../styles/HomePage.module.scss';

const HomePage = () => {
  return (
    <section className={styles.homepage}>
      <div className={styles.contentDiv}>
        <h1 className={styles.heading}>Something - The SAT decimator</h1>
        <h2 className={styles.subheading}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud laboris nisi ut aliquip ex ea commodo
          consequat
        </h2>
        <Button text="Get started" link={'/question/0'} />
      </div>

      <Image
        src="/hero-image.jpg"
        className={styles.image}
        alt=""
        height={300}
        width={300}
      />
    </section>
  );
};

export default HomePage;
