import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// Material UI
import { Typography, Card, Container } from "@material-ui/core";

// component used for not found pages
const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Card className={classes.card}>
          <Typography variant="h3" className={classes.message}>
            404
          </Typography>
          <Typography variant="h4" className={classes.message}>
            Not Found
          </Typography>
          <Typography variant="h5" className={classes.message}>
            The page you are looking for cannot be found
          </Typography>
        </Card>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 40,
    backgroundColor: "#F0F8FF",
    height: "90vh",
  },
  message: {
    padding: theme.spacing(2),
  },
  card: {
    borderRadius: 10,
    padding: "10px",
  },
  container: {
    paddingTop: theme.spacing(10),
  },
}));

export default NotFound;
