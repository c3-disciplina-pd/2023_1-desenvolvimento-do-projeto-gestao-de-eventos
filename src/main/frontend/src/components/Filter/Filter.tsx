import { Flex, Select, Text } from "@chakra-ui/react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export const Filter = () => {
  return (
    <Flex
      w="95%"
      bg="brand.900"
      justify="center"
      align="center"
      minH="4rem"
      h="auto"
      borderRadius="1rem"
    >
      <Text mr="2.5rem" color="white" fontWeight="bold" fontSize="xl">
        Filtrar por:
      </Text>
      <Flex w="50%" justify="space-between">
        <Select
          color="white"
          fontWeight="400"
          icon={<BsFillArrowDownCircleFill />}
          w="30%"
          bg="brand.600"
          border="none"
        >
          <option selected hidden disabled value="">
            Categoria
          </option>
          <option value="option1" style={{ color: "black" }}>
            Option 1
          </option>
          <option value="option2" style={{ color: "black" }}>
            Option 2
          </option>
          <option value="option3" style={{ color: "black" }}>
            Option 3
          </option>
        </Select>
        <Select
          color="white"
          fontWeight="400"
          icon={<BsFillArrowDownCircleFill />}
          w="30%"
          bg="brand.600"
          border="none"
        >
          <option selected hidden disabled value="">
            Data
          </option>
          <option value="option1" style={{ color: "black" }}>
            Option 1
          </option>
          <option value="option2" style={{ color: "black" }}>
            Option 2
          </option>
          <option value="option3" style={{ color: "black" }}>
            Option 3
          </option>
        </Select>
        <Select
          color="white"
          fontWeight="400"
          icon={<BsFillArrowDownCircleFill />}
          w="30%"
          bg="brand.600"
          border="none"
        >
          <option selected hidden disabled value="">
            Preço
          </option>
          <option value="option1" style={{ color: "black" }}>
            Option 1
          </option>
          <option value="option2" style={{ color: "black" }}>
            Option 2
          </option>
          <option value="option3" style={{ color: "black" }}>
            Option 3
          </option>
        </Select>
      </Flex>
    </Flex>
  );
};
