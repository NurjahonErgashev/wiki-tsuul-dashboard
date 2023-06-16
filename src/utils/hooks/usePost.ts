import { useMutation } from "@tanstack/react-query";
import { zapros } from "../axios";
export const usePostData = (url: string, options = {}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return useMutation((data: any) => zapros.post(url, data), { ...options });
};
