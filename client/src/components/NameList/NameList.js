import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStoreActions } from "easy-peasy";

// components
import ViewUsers from "../User/ViewUsers";

// Material UI
import { Container } from "@material-ui/core";

const NameList = () => {
  const classes = useStyles();

  const { getUsers } = useStoreActions(actions => actions.user);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Fragment>
      <Container className={classes.root}>
        <ViewUsers />
      </Container>
    </Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 40,
  },
}));

export default NameList;
