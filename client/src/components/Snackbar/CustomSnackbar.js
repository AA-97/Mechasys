import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

import { useStoreActions, useStoreState } from "easy-peasy";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomSnackbar = () => {
  const { message, success, open } = useStoreState(state => state.notifier);
  const { close } = useStoreActions(actions => actions.notifier);

  const handleClose = (event, reason) => {
    close();
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        {success ? (
          <Alert onClose={handleClose} severity="success">
            {message}
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error">
            {message}
          </Alert>
        )}
      </Snackbar>
    </div>
  );
};

export default CustomSnackbar;
