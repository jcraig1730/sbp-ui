import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import toastReducer from "./slices/toast";
import toastMiddleware from "./slices/toastMiddleware";
import imageModal from "./slices/imageModal";

const store = configureStore({
  reducer: {
    auth: authReducer,
    toast: toastReducer,
    imageModal: imageModal,
  },
  middleware: [toastMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
