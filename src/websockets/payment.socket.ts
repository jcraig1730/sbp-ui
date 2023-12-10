import { getApiSocketUrl } from "@/utils";
import { io } from "socket.io-client";

export const createPaymentSocket = (
  intentId: string,
  onSuccess: () => Promise<void>,
  onFail: () => void
) => {
  const socket = io(getApiSocketUrl() + "?id=" + intentId);
  socket.id;
  socket.on("payment-success", onSuccess);
  socket.on("payment-failure", onFail);
};
