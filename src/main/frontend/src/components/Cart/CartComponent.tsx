import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";

import Background from "../../assets/images/Background.svg";
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
                <Footer />
        </Flex>
    )
}