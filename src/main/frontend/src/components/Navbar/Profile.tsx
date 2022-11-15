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
import Cookies from "js-cookie";

import { AiOutlineLogout } from "react-icons/ai";
import { BsFillCalendar2EventFill, BsFillGearFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { useGetUser, UserType } from "../../configs";

export const Profile = () => {
  const navigate = useNavigate();
  const authUser = Cookies.get("userCPF");

  const { data: user } = useGetUser({ cpf: authUser ?? "" });

  const handleLogout = () => {
    Cookies.remove("userCPF");
    localStorage.removeItem("accessToken");
    window.location.reload();
  };

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
          <Avatar name={`${user?.firstName} ${user?.lastName}`} />
          <Text
            ml="1rem"
            color="white"
            fontSize="md"
            fontWeight="600"
            noOfLines={1}
            maxW="10rem"
          >
            {user?.firstName} {user?.lastName}
          </Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        w="100%"
        bg="brand.600"
        borderRadius="1rem"
        border="none"
        mt="0.5rem"
      >
        <PopoverArrow bg="brand.900" />
        <PopoverBody display="flex" flexDirection="column" border="none">
          {user?.type === UserType.Admin && (
            <Button
              bg="brand.900"
              rightIcon={<BsFillCalendar2EventFill />}
              mt="1rem"
              color="white"
              _active={{}}
              _hover={{}}
              _focus={{}}
              onClick={() => navigate("/criar-evento")}
            >
              Criar Evento
            </Button>
          )}
          <Button
            bg="brand.900"
            rightIcon={<BsFillGearFill />}
            mt="1rem"
            color="white"
            _active={{}}
            _hover={{}}
            _focus={{}}
            onClick={() => navigate("/editar-perfil")}
          >
            Configurações
          </Button>
          <Button
            bg="brand.900"
            rightIcon={<AiOutlineLogout />}
            mt="1rem"
            color="white"
            _active={{}}
            _hover={{}}
            _focus={{}}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
