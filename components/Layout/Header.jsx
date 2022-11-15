import Link from "next/link";
import Button from "../UI/Button";
import classes from "./Header.module.scss";

const Header = () => {
   return (
      <nav className={classes.header}>
         <h5 className={classes.brand}>Something</h5>
         <div className={classes.linksDiv}>
            <Link className={classes.link} href="/">
               Home
            </Link>
            <Link className={classes.link} href="/">
               Login
            </Link>
            <Button link="/" text="Signup" />
         </div>
      </nav>
   );
};

export default Header;
