import { User } from "@/api/dtoTypes";
import { createSlice } from "@reduxjs/toolkit";

export interface ToastI {
  id: string;
  type: "success" | "error" | "info";
  message: string;
  timeout?: number;
}

export interface ToastState {
  toasts: ToastI[];
}

const initialState: ToastState = { toasts: [] };

const toastSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addToast: (state, action: { payload: ToastI }) => {
      state.toasts.push(action.payload);
    },
    removeToast: (state, action: { payload: string }) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;
export default toastSlice.reducer;
