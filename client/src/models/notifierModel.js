import { action } from "easy-peasy";

const notifierModel = {
  success: true,
  open: false,
  message: "",

  open: action((state, payload) => {
    state.open = true;
  }),

  close: action((state, payload) => {
    state.open = false;
  }),

  update: action((state, payload) => {
    state.open = true;
    state.success = payload.success;
    state.message = payload.message;
  }),
};

export default notifierModel;
