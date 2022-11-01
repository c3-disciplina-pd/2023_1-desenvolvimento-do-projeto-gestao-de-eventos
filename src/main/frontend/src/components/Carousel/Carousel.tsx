import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";

import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import EventMock from "../../assets/images/EventMock.svg";
import { ButtonForm } from "../Button";

export const CarouselMainPage = ({}) => {
  const navigate = useNavigate();

  return (
    <Flex w="60%" h="50%">
      <Carousel
        autoPlay
        infiniteLoop
        statusFormatter={() => ""}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <Button
              onClick={onClickHandler}
              position="absolute"
              zIndex={99999}
              top="calc(50% - 15px)"
              width="2rem"
              height="2rem"
              cursor="pointer"
              bg="none"
              _active={{}}
              _hover={{}}
              _focus={{}}
            >
              <Icon
                as={BsFillArrowLeftCircleFill}
                fontSize="3xl"
                color="brand.600"
              />
            </Button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <Button
              onClick={onClickHandler}
              position="absolute"
              zIndex={99999}
              top="calc(50% - 15px)"
              width="2rem"
              height="2rem"
              right="0"
              cursor="pointer"
              bg="none"
              _active={{}}
              _hover={{}}
              _focus={{}}
            >
              <Icon
                as={BsFillArrowRightCircleFill}
                fontSize="3xl"
                color="brand.600"
              />
            </Button>
          )
        }
      >
        <Flex w="100%" h="100%" justify="center" align="center" p="0.5rem">
          <Box h="100%" w="90%">
            <Image src={EventMock} />
            <ButtonForm
              title="Ver mais"
              color="white"
              bg="brand.900"
              w="30%"
              position="relative"
              bottom="3rem"
              handleClick={() => navigate("/")}
              _active={{}}
              _hover={{}}
              _focus={{}}
            />
          </Box>
        </Flex>
        <Flex w="100%" h="100%" justify="center" align="center" p="0.5rem">
          <Box h="100%" w="90%">
            <Image src={EventMock} />
            <ButtonForm
              title="Ver mais"
              color="white"
              bg="brand.900"
              w="30%"
              position="relative"
              bottom="3rem"
              handleClick={() => navigate("/")}
              _active={{}}
              _hover={{}}
              _focus={{}}
            />
          </Box>
        </Flex>
        <Flex w="100%" h="100%" justify="center" align="center" p="0.5rem">
          <Box h="100%" w="90%">
            <Image src={EventMock} />
            <ButtonForm
              title="Ver mais"
              color="white"
              bg="brand.900"
              w="30%"
              position="relative"
              bottom="3rem"
              handleClick={() => navigate("/")}
              _active={{}}
              _hover={{}}
              _focus={{}}
            />
          </Box>
        </Flex>
        <Flex w="100%" h="100%" justify="center" align="center" p="0.5rem">
          <Box h="100%" w="90%">
            <Image src={EventMock} />
            <ButtonForm
              title="Ver mais"
              color="white"
              bg="brand.900"
              w="30%"
              position="relative"
              bottom="3rem"
              handleClick={() => navigate("/")}
              _active={{}}
              _hover={{}}
              _focus={{}}
            />
          </Box>
        </Flex>
      </Carousel>
    </Flex>
  );
};
