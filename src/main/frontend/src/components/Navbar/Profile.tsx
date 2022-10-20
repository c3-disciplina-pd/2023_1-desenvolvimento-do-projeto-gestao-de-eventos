import {
  Avatar,
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { ButtonOptions } from "./utils";

export const Profile = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          bg="none"
          display="flex"
          justifyContent="space-between"
          w="100%"
          _active={{}}
          _hover={{}}
          _focus={{}}
        >
          <Avatar name="Davi Mateus" />
          <Text ml="1rem" color="white" fontSize="1rem" fontWeight="600">
            Davi Mateus
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent w="100%" bg="brand.600" borderRadius="1rem" border="none" mt="0.5rem">
        <PopoverArrow bg="brand.900" />
        <PopoverBody display="flex" flexDirection="column" border="none">
          {ButtonOptions.map(({ name, Icon }) => (
            <Button
              bg="brand.900"
              rightIcon={<Icon />}
              key={name}
              mt="1rem"
              color="white"
              _active={{}}
              _hover={{}}
              _focus={{}}
            >
              {name}
            </Button>
          ))}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
