import { Button } from "@chakra-ui/react";
import { ButtonFormProps } from "./types";

export const ButtonForm: React.FC<ButtonFormProps> = ({
  title,
  type,
  ...rest
}) => {
  return (
    <Button type={type} {...rest}>
      {title}
    </Button>
  );
};
