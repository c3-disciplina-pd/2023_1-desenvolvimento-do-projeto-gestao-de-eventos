import { Button } from "@chakra-ui/react";
import { ButtonFormProps } from "./types";

export const ButtonForm: React.FC<ButtonFormProps> = ({
  title,
  type,
  handleClick,
  isLoading,
  ...rest
}) => {
  return (
    <Button type={type} {...rest} isLoading={isLoading} onClick={handleClick && handleClick}>
      {title}
    </Button>
  );
};
