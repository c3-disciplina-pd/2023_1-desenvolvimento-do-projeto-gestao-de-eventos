import { Button } from "@chakra-ui/react";
import { ButtonFormProps } from "./types";

export const ButtonForm: React.FC<ButtonFormProps> = ({
  title,
  type,
  handleClick,
  ...rest
}) => {
  return (
    <Button type={type} {...rest} onClick={handleClick && handleClick}>
      {title}
    </Button>
  );
};
