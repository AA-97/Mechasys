import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStoreActions } from "easy-peasy";

// Material UI imports
import {
  Typography,
  Container,
  Card,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";

// form component to add or search a user
const Form = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
  };

  const handleSearch = event => {
    if (event) event.preventDefault();
    setIsSearching(true);
  };

  // call submit or search methods when user clicks on button
  useEffect(() => {
    if (isSubmitting) {
      addUser({ firstName: values.firstName, lastName: values.lastName });
      setIsSubmitting(false);
      setValues({ firstName: "", lastName: "" });
    }
  }, [isSubmitting]);

  const { addUser, searchUser } = useStoreActions(actions => actions.user);

  useEffect(() => {
    if (isSearching) {
      searchUser({ firstName: values.firstName, lastName: values.lastName });
      setIsSearching(false);
      setValues({ firstName: "", lastName: "" });
    }
  }, [isSearching]);

  return (
    <Fragment>
      <Container className={classes.root}>
        <Card className={classes.card}>
          <Typography variant="h4" className={classes.title}>
            Add or Search User
          </Typography>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12} md={4} lg={4}>
              <TextField
                label="First Name"
                color="primary"
                onChange={handleChange("firstName")}
                value={values.firstName || ""}
              />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <TextField
                label="Last Name"
                color="primary"
                onChange={handleChange("lastName")}
                value={values.lastName || ""}
              />
            </Grid>
            <Grid item xs={6} md={2} lg={2}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={6} md={2} lg={2}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Fragment>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    padding: "50px 0px",
  },
  card: {
    borderRadius: 10,
    padding: "10px",
  },
  title: {
    padding: "10px 0px",
  },
  button: {
    backgroundColor: "#00BFFF",
    margin: "30px 10px",
  },
}));

export default Form;
