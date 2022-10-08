import { Button } from "@chakra-ui/react";
import { ButtonFormProps } from "./types";

export const ButtonForm: React.FC<ButtonFormProps> = ({
  title,
  type,
  ...rest
}) => {
  return (
    <Button
      type={type}
      {...rest}
      w="50%"
      mt="2rem"
      color="white"
      bg="brand.900"
      h="3.5rem"
      _active={{}}
      _hover={{}}
      _focus={{}}
    >
      {title}
    </Button>
  );
};
