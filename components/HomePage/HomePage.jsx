import classes from "./HomePage.module.scss";
import heroImage from "../../images/heroImage.jpg";
import Button from "../../components/UI/Button";

const homePage = () => {
   return (
      <section className={classes.homePage}>
         <div className={classes.contentDiv}>
            <h1 className={classes.heading}>Something - The SAT decimator</h1>
            <h2 className={classes.subHeading}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
               laboris nisi ut aliquip ex ea commodo consequat
            </h2>
            <Button text="Get started" link={"/question/0"} />
         </div>
         <img src={heroImage.src} className={classes.image} alt="" />
      </section>
   );
};

export default homePage;
