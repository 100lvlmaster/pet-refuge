import create from "zustand";
import { Token } from "./types";
const tokenKey = `localStoragetoken`;
const tokenToStorage = (token: Token) => {
  localStorage.setItem(tokenKey, JSON.stringify(token));
  return;
};
const tokenFromStorage = () => {
  const data = localStorage.getItem(tokenKey);
  if (data) {
    return JSON.parse(data) as Token;
  }
  return undefined;
};

interface UserStore {
  token: Token | undefined;
  setToken: (token: Token) => void;
  initToken: () => void;
  clearToken: () => void;
}

const userStore = create<UserStore>((set) => ({
  token: undefined,
  setToken: (token: Token) =>
    set((state) => {
      state.token = token;
      tokenToStorage(token);
    }),
  initToken: () =>
    set((state) => {
      const token = tokenFromStorage();
      state.token = token;
    }),
  clearToken: () =>
    set((state) => {
      localStorage.setItem(tokenKey, "");
      state.token = undefined;
    }),
}));

export { userStore };
