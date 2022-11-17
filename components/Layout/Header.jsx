import Link from "next/link";
import Button from "../UI/Button";
import classes from "./Header.module.scss";

const Header = () => {
   return (
      <nav className={classes.header}>
         <Link href="/">
            <h5 className={classes.brand}>Something</h5>
         </Link>
         <div className={classes.linksDiv}>
            <Link className={classes.link} href="/">
               Home
            </Link>
            <Link className={classes.link} href="/question/0">
               Questions
            </Link>
            <Button link="/results" text="Answers" />
         </div>
      </nav>
   );
};

export default Header;
