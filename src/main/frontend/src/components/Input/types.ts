import { ChakraProps } from "@chakra-ui/react";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputFormProps = {
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder?: string;
  isPassword?: boolean;
} & ChakraProps;
