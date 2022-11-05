import _axios from "axios";

export const axios = _axios.create({
  baseURL: "/",
  validateStatus: (status) => true,
});

export interface ResponseSuccessI<T> {
  isSuccess: true;
  code: number;
  message: string;
  result: T;
}

export interface ResponseFailI {
  isSuccess: false;
  code: number;
  message: string;
}

export type ResponseI<T> = ResponseSuccessI<T> | ResponseFailI;

export const signupAPI = async (id: string, pw: string) => {
  const res = await axios.post<ResponseI<{ user_id: number; jwt: string }>>(
    "/user/signup",
    {
      nickname: id,
      pw: pw,
    }
  );
  if (!res.data.isSuccess) return false;
  else return true;
};

// export const signinAPI = async (id: string, pw: string) => {
//   const res = await axios.post()
// }
