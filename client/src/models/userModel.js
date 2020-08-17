import { action, thunk } from "easy-peasy";
import axios from "axios";

const userModel = {
  users: [],

  usersRetrieved: action((state, payload) => {
    state.users = payload;
  }),

  getUsers: thunk((actions, payload, { getStoreActions }) => {
    return new Promise((resolve, reject) => {
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
            resolve(users);
          }
        })
        .catch(error => {
          if (error.response) {
            getStoreActions().notifier.update({
              success: false,
              message: "Error, could not retrieve users",
            });
            reject(error);
          }
        });
    });
  }),

  addUser: thunk((actions, payload, { getStoreActions }) => {
    return new Promise((resolve, reject) => {
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
    });
  }),

  searchUser: thunk((actions, payload, { getStoreActions }) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/user/search", {
          firstName: payload.firstName,
          lastName: payload.lastName,
        })
        .then(res => {
          if (res.status === 200) {
            const { users, message } = res.data;

            actions.usersRetrieved(users);
            resolve(users);
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
    });
  }),
  clearUsers: thunk((actions, payload) => {
    actions.usersRetrieved([]);
  }),
};

export default userModel;
