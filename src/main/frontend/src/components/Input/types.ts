import { ChakraProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export type InputFormProps = {
  register: UseFormRegisterReturn<string>;
  error?: any;
  placeholder?: string;
  isPassword?: boolean;
  hasTooltip?: boolean;
  isReadOnly?: boolean;
  children?: ReactNode;
  type?: string;
  maskFormatFunction?: (value: string) => string;
} & ChakraProps;
