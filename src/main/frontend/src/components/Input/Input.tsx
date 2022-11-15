import {
  Button,
  Collapse,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import { useState } from "react";

import { InputFormProps } from "./types";
import { AiFillInfoCircle } from "react-icons/ai";

export const InputForm: React.FC<InputFormProps> = ({
  register,
  error,
  placeholder,
  isPassword = false,
  hasTooltip = false,
  isReadOnly = false,
  maskFormatFunction,
  children,
  type,
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
          type={
            isPassword ? (show ? "text" : "password") : type ? type : "text"
          }
          readOnly={isReadOnly}
          _readOnly={{ cursor: "not-allowed" }}
          placeholder={placeholder}
          _active={{ borderColor: "brand.900" }}
          _hover={{ borderColor: "brand.900" }}
          _focus={{ borderColor: "brand.900" }}
          bg="white"
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
        {hasTooltip && (
          <InputRightElement>
            <Popover>
              <PopoverTrigger>
                <Button
                  mt="1rem"
                  bg="none"
                  _hover={{}}
                  _focus={{}}
                  _active={{}}
                >
                  <Icon
                    as={AiFillInfoCircle}
                    cursor="pointer"
                    fontSize="xl"
                    color="brand.900"
                  />
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Info</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>{children}</PopoverBody>
              </PopoverContent>
            </Popover>
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
