import { useMutation } from "@tanstack/react-query";
import { postEarlyAccess, InputType, OutputType } from "../endpoints/early-access_POST.schema";

export const useEarlyAccessSignup = () => {
  return useMutation<OutputType, Error, InputType>({
    mutationFn: (data: InputType) => postEarlyAccess(data),
  });
};