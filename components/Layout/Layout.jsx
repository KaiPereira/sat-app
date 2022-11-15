import classes from "./Layout.module.scss";
import Header from "./Header";

const Layout = props => {
   return (
      <div className={classes.layout}>
         <Header />
         <main>{props.children}</main>;
      </div>
   );
};

export default Layout;
