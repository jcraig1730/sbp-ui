import { Middleware } from "redux";
import { addToast, removeToast } from "./toast";

const toastMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type === addToast.type) {
    const toast = action.payload;
    setTimeout(() => {
      store.dispatch(removeToast(toast.id));
    }, toast.timeout || 5000);
  }

  return next(action);
};

export default toastMiddleware;
