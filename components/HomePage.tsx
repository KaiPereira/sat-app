import Image from "next/image";

import Button from "./UI/Button";

import styles from "../styles/HomePage.module.scss";

const HomePage = () => {
   return (
      <section className={styles.homePage}>
         <div className={styles.contentDiv}>
            <h1 className={styles.heading}>Something - The SAT decimator</h1>
            <h2 className={styles.subHeading}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
               laboris nisi ut aliquip ex ea commodo consequat
            </h2>
            <Button text="Get started" link={"/question/0"} />
         </div>

         <Image src="hero-image.png" className={styles.image} alt="" />
      </section>
   );
};

export default HomePage;
