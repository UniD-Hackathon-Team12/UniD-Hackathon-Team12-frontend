import _axios from "axios";
import { myPageType } from "./pages/MyPage";
import { novelType } from "./pages/NovelKind";

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
  if (!res?.data?.isSuccess) return null;
  else return true;
};

export const signinAPI = async (id: string, pw: string) => {
  const res = await axios.post<ResponseI<{ user_id: number; jwt: string }>>(
    "/user/signin",
    {
      nickname: id,
      pw: pw,
    }
  );
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};

export interface NovelInfoI {
  novel_id: number;
  category: novelType;
  max_num: number;
  n_content: string;
  like_count: number;
  relay_count: number;
  active: boolean;
  keywords: string[];
  // user_id: string | number;
}

export const getMyPageAPI = async () => {
  const res = await axios.get<
    ResponseI<[NovelInfoI[], NovelInfoI[], NovelInfoI[]]>
  >("/user/mypage");
  if (!res?.data?.isSuccess) return null;
  const data: { [x in myPageType]: NovelInfoI[] } = {
    written: res.data.result[0],
    participated: res.data.result[1],
    liked: res.data.result[2],
  };
  return data;
};

export const getKeywordRankAPI = async () => {
  const res = await axios.get<
    ResponseI<{ rank_id: number; keywords: string; count: number }[]>
  >("/keyword/rank");
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};

export const getFamousNovelAPI = async () => {
  const res = await axios.get<ResponseI<NovelInfoI[]>>("/novel/all");
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};

export const getCategoryNovelAPI = async (category: novelType) => {
  const res = await axios.get<ResponseI<NovelInfoI[]>>(
    `/novel/part/${category}`
  );
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};

export const createNovelAPI = async (info: {
  category: novelType;
  keyword: string[];
  maxCount: number;
  firstStory: string;
  userId: number;
}) => {
  const { category, keyword, maxCount, firstStory, userId } = info;
  const res = await axios.post<ResponseI<number>>(`/novel/${category}/create`, {
    keywords: keyword,
    max_num: maxCount,
    n_content: firstStory,
    user_id: userId,
  });
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};

export const getEachNovelAPI = async (novelId: number | string) => {
  const res = await axios.get<
    ResponseI<(NovelInfoI & { r_content: string })[]>
  >(`/novel/${novelId}`);
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};

export const makeCommentAPI = async (
  novelId: number,
  userId: number,
  content: string
) => {
  const res = await axios.post<ResponseI<{ active: boolean }>>(
    `/novel/${novelId}/relay`,
    {
      novel_id: novelId,
      r_content: content,
      user_id: userId,
    }
  );
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};

export const addNovelKeywordAPI = async (
  novelId: number,
  keyword: string | string[]
) => {
  const data = typeof keyword === "string" ? [keyword] : keyword;
  const res = await axios.patch<ResponseI<number>>(
    `/novel/${novelId}/keyword`,
    {
      keywords: data,
    }
  );
  if (!res?.data?.isSuccess) return null;
  return true;
};

export const getKeywordSearchAPI = async (keyword: string) => {
  if (keyword.length === 0) {
    const res = await getKeywordRankAPI();
    if (!res) return [];
    return res.map((t) => t.keywords);
  }
  const res = await axios.get<ResponseI<string[]>>(
    `/novel/keyword/search/${keyword}`
  );
  if (!res?.data?.isSuccess) return [];
  return res.data.result;
};

export const NovelLikeAPI = async (novelId: number, userId: number) => {
  const res = await axios.patch(`/novel/${novelId}/like`, {
    user_id: userId,
  });
  if (!res?.data?.isSuccess) return null;
  return true;
};

export const NovelKeywordSearchAPI = async (keyword: string) => {
  const res = await axios.post<ResponseI<NovelInfoI[]>>("/novel/1/search", {
    keyword: keyword,
  });
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};

export const NovelContentSearchAPI = async (content: string) => {
  const res = await axios.post<ResponseI<NovelInfoI[]>>("/novel/2/search", {
    r_content: content,
  });
  if (!res?.data?.isSuccess) return null;
  return res.data.result;
};
