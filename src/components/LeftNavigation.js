import { Drawer } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import * as Material from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Payment, Dashboard, Group, EmojiPeople } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    width: "180px",
  },
  dividerStyle: {
    marginTop: "48px",
  },
  leftNavFooter: {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    paddingBottom: 40,
    paddingLeft: 40,
  },
  outlined: {},
});

const LeftNavigation = (props) => {
  const classes = useStyles();
  //const history = useHistory();
  //using array destructure
  const { history } = props;

  /*
   * Contains each navigation item and its details
   */
  const pages = [
    {
      title: "Overview",
      icon: <Dashboard />,
      url: "/",
      onClick: () => {
        history.push("/");
      },
    },
    {
      title: "Users",
      icon: <Group />,
      url: "/users",
      onClick: () => {
        history.push("/users");
      },
    },
    {
      title: "Billing Info",
      icon: <Payment />,
      url: "/billingInfo",
      onClick: () => {
        history.push("/billinginfo");
      },
    },
    {
      title: "Sign Off",
      icon: <EmojiPeople />,
      url: "/signoff",
      onClick: () => {
        history.push("/signoff");
      },
    },
  ];

  return (
    <div>
      <Drawer anchor="left" className={classes.root} variant="permanent">
        <Material.Divider className={classes.dividerStyle} />
        <Material.List>
          {pages.map((page, index) => (
            <Material.ListItem button key={page.title} onClick={page.onClick}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <Material.ListItemText primary={page.title} />
            </Material.ListItem>
          ))}
        </Material.List>
        <div className={classes.leftNavFooter}>
          <Button
            variant="outlined"
            color="inherit"
            className={classes.outlined}
          >
            Sign off
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

//withRouter() enables this component to be passed in a history object in its Props.
export default withRouter(LeftNavigation);
