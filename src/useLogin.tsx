import useSWR, { mutate } from "swr";
import { axios } from "./api";

export const loginStorageKey = "loginStorageKey";
export interface loginStorageI {
  user_id: number;
  nickname: string;
  jwt: string;
}

export const setLoginInfo = (info?: loginStorageI) => {
  if (!info) {
    localStorage.removeItem(loginStorageKey);
  } else {
    localStorage.setItem(loginStorageKey, JSON.stringify(info));
  }
  mutate("login");
};

export const useLogin = () => {
  const d = useSWR<{ login: false } | { login: true; data: loginStorageI }>(
    "login",
    () => {
      const d = localStorage.getItem(loginStorageKey);
      if (!d) return { login: false };
      const data = JSON.parse(d) as loginStorageI;
      axios.defaults.headers.common["X-ACCESS-TOKEN"] = `${data.jwt}`;
      return {
        login: true,
        data,
      };
    }
  );
  return d;
};

export const useLoginCheck = () => {
  const { data } = useLogin();
  function f<T>(toReturn: T) {
    if (data?.login) return toReturn;
    return null;
  }
  return f;
};
