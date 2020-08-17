import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStoreActions } from "easy-peasy";

// components
import Form from "../Form/Form";
import ViewUsers from "../User/ViewUsers";

// Material UI
import { Typography } from "@material-ui/core";

const Home = () => {
  const classes = useStyles();

  const { clearUsers } = useStoreActions(actions => actions.user);

  useEffect(() => {
    clearUsers();
  }, []);

  return (
    <Fragment>
      <section className={classes.mainImage}>
        <Typography variant="overline" className={classes.title}>
          Welcome
        </Typography>
      </section>
      <div className={classes.root}>
        <Form />
        <ViewUsers />
      </div>
    </Fragment>
  );
};

const mainImage = require("../../Images/background.jpg");

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 70,
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
  },
  mainImage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    height: "40vh",
    backgroundImage: `url(${mainImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
}));

export default Home;
