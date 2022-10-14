import { ChakraProps } from "@chakra-ui/react";

export type ButtonFormProps = {
  type?: "button" | "submit" | "reset" | undefined;
  title: string;
  handleClick?: () => void;
  isLoading?: boolean;
} & ChakraProps;
