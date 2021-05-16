import LeftNavigation from "../components/LeftNavigation";
import { makeStyles } from "@material-ui/core/styles";
import TopNav from "../components/TopNav";
const useStyles = makeStyles({
  container: {
    display: "flex",
  },
});

const Layout = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TopNav />
      <LeftNavigation></LeftNavigation>
      {props.children}
    </div>
  );
};

export default Layout;
