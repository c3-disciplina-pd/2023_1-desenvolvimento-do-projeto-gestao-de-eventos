import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import Background from "../../assets/images/Background.svg";
import Circles from "../../assets/images/Circles.svg"
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const CartComponent = () => {
    return (
        <Flex
            maxW="100%"
            minH="100vh"
            h="auto"
            direction="column"
            overflowX="hidden"
            bgImage={Background}
            >
                <Navbar />
                
                {/* Cart text flex */}
                <Flex
                  justify="center"
                  direction="column"
                  align="center">
                    <Text 
                        fontSize="2rem" 
                        m="1rem 0" 
                        color="brand.900"
                        fontWeight="bold"
                        >
                        Carrinho
                    </Text>
                </Flex>

                {/* Content flex */}
                <Flex
                  maxW="100%"
                  minH="75vh"
                  h="auto"
                  direction="row"
                  align="center"
                  justify="center"
                  gap="5px">

                    {/* Cart parent flex (LEFT) */}
                    <Flex
                      bg="brand.900"
                      w="50%"
                      minH="65vh"
                      maxH="65vh"
                      borderRadius="1.5rem"
                      bgImage={Circles}
                      bgSize="45%"
                      bgRepeat="no-repeat"
                      bgPos="bottom 0 left 0"
                      justify="center"
                      align="center">

                        {/* Cart glass content area (LEFT) */}
                        <Flex
                          bg="rgba(183, 233, 246, 0.2)"
                          justify="center"
                          align="center"
                          w="85%"
                          minH="50vh"
                          maxH="50vh"
                          borderRadius="1.5rem"
                          boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
                          style={{backdropFilter: "blur(4.5px)"}}
                          border="0.1rem solid"
                          borderColor="white"
                          >
                            <Text
                              color="white"
                              fontSize="1.5rem"
                              fontWeight="bold"
                              fontStyle="italic"
                              >
                              Seu carrinho está vazio!
                            </Text>
                        </Flex>
                    </Flex>

                    {/* Payment area parent flex (RIGHT) */}
                    <Flex
                      bg="brand.600"
                      borderRadius="1.5rem"
                      w="35%"
                      minH="65vh"
                      maxH="65vh"
                      gap="15px"
                      justify="center"
                      align="center"
                      direction="column">
                        <Text
                          fontSize="1.5rem"
                          fontWeight="bold"
                          color="white"
                          >
                          Pagamento
                        </Text>

                        {/* TODO: Payment area content (RIGHT) */}
                        <Flex
                          align="center"
                          justify="center"
                          direction="column"
                          w="100%"
                          minH="50vh"
                          maxH="50vh">
                            <Text>Payment area position placeholder text</Text>
                            <Text>Payment area position placeholder text</Text>
                            <Text>Payment area position placeholder text</Text>
                            <Text>Payment area position placeholder text</Text>
                            <Text>Payment area position placeholder text</Text>
                            <Text>Payment area position placeholder text</Text>
                        </Flex>
                    </Flex>
                </Flex>

                <Footer />
        </Flex>
    )
}