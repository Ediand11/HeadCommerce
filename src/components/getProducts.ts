import axios, { AxiosResponse } from "axios";
import { CartData } from "./types";

const LIMIT_POST_FETCH = 5;

export const getProducts = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<CartData | undefined> => {
  try {
    const pageSkip = pageParam;
    const response: AxiosResponse<CartData> = await axios.get(
      `https://dummyjson.com/carts?skip=${pageSkip}&limit=${LIMIT_POST_FETCH}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
