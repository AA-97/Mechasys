import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI
import { Typography, Container } from "@material-ui/core";

const NotFound = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Container className={classes.root}>
        <Typography variant="h3" className={classes.message}>
          404
        </Typography>
        <Typography variant="h4" className={classes.message}>
          Not Found
        </Typography>
        <Typography variant="h5" className={classes.message}>
          The page you are looking for cannot be found
        </Typography>
      </Container>
    </Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 40,
  },
  message: {
    paddingTop: theme.spacing(2),
  },
}));

export default NotFound;
