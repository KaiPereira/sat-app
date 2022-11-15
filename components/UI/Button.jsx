import Link from "next/link";
import classes from "./Button.module.scss";
const Button = props => {
   return (
      <Link className={classes.button} href={props.link}>
         {props.text}
      </Link>
   );
};

export default Button;
