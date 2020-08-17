import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStoreActions } from "easy-peasy";

// components
import ViewUsers from "../User/ViewUsers";

const NameList = () => {
  const classes = useStyles();

  const { getUsers } = useStoreActions(actions => actions.user);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className={classes.root}>
      <ViewUsers />
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 40,
    backgroundColor: "#F0F8FF",
    height: "90vh",
  },
}));

export default NameList;
