import { action, thunk } from "easy-peasy";
import axios from "axios";

// global user array and api call methods stored here
const userModel = {
  users: [],

  usersRetrieved: action((state, payload) => {
    state.users = payload;
  }),

  // api call to get list of all users
  getUsers: thunk((actions, payload, { getStoreActions }) => {
    axios
      .get("/api/user/")
      .then(res => {
        if (res.status === 200) {
          const { users, message } = res.data;
          actions.usersRetrieved(users);

          getStoreActions().notifier.update({
            success: true,
            message: message,
          });
        }
      })
      .catch(error => {
        if (error.response) {
          getStoreActions().notifier.update({
            success: false,
            message: "Error, could not retrieve users",
          });
        }
      });
  }),

  // api call to add a user
  addUser: thunk((actions, payload, { getStoreActions }) => {
    axios
      .post("/api/user", {
        firstName: payload.firstName,
        lastName: payload.lastName,
      })
      .then(res => {
        if (res.status === 200) {
          const { message } = res.data;
          getStoreActions().notifier.update({
            success: true,
            message: message,
          });
        }
      })
      .catch(() => {
        getStoreActions().notifier.update({
          success: false,
          message: "Error, could not add user",
        });
      });
  }),

  // api call to search users
  searchUser: thunk((actions, payload, { getStoreActions }) => {
    axios
      .post("/api/user/search", {
        firstName: payload.firstName,
        lastName: payload.lastName,
      })
      .then(res => {
        if (res.status === 200) {
          const { users, message } = res.data;
          actions.usersRetrieved(users);

          if (users.length > 0) {
            getStoreActions().notifier.update({
              success: true,
              message: message,
            });
          } else {
            getStoreActions().notifier.update({
              success: false,
              message: "No users with given criteria was found.",
            });
          }
        }
      })
      .catch(() => {
        getStoreActions().notifier.update({
          success: false,
          message: "Error, could not search for user",
        });
      });
  }),

  // method to clear list of users in array
  clearUsers: thunk((actions, payload) => {
    actions.usersRetrieved([]);
  }),
};

export default userModel;
