import {
  Collapse,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import { useState } from "react";

import { InputFormProps } from "./types";

export const InputForm: React.FC<InputFormProps> = ({
  register,
  error,
  placeholder,
  isPassword = false,
  maskFormatFunction,
  ...rest
}) => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(!show);

  return (
    <>
      <InputGroup
        {...rest}
        w="50%"
        mt="1rem"
        display="flex"
        alignItems="center"
      >
        <Input
          h="3.5rem"
          type={isPassword ? (show ? "text" : "password") : "text"}
          placeholder={placeholder}
          _active={{ borderColor: "brand.900" }}
          _hover={{ borderColor: "brand.900" }}
          _focus={{ borderColor: "brand.900" }}
          {...register}
          {...(maskFormatFunction && {
            onChange: (event) => {
              event.target.value = maskFormatFunction(event.target.value);
              register && register.onChange(event);
            },
          })}
        />
        {isPassword && (
          <InputRightElement>
            <Icon
              mt="1rem"
              as={show ? BsEyeSlash : BsEye}
              cursor="pointer"
              onClick={handleShow}
              fontSize="xl"
              color="brand.700"
            />
          </InputRightElement>
        )}
      </InputGroup>
      <Flex w="50%" align="left">
        <Collapse in={error} animateOpacity>
          <Text fontSize="sm" color="red" mt="0.2rem">
            {error?.message && error?.message}
          </Text>
        </Collapse>
      </Flex>
    </>
  );
};