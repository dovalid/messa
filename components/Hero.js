import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react"

export default function Hero({ onOpen }) {
  const buttonSize = useBreakpointValue({ base: "lg", lg: "xl" })
  return (
    <Box as="section" overflow="hidden">
      <Container
        maxWidth="6xl"
        py={{ base: 16, sm: 20, lg: 32 }}
        px={{ base: 6, md: 10 }}
        pos="relative"
        overflow="visible"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: { base: "-60px", md: "-80px", lg: "-40px" },
          bottom: { base: "-50px", md: "-100px" },
          backgroundImage: "url(star.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            base: "300px",
            sm: "350px",
            md: "500px",
            lg: "550px",
          },
          backgroundPosition: "bottom 0 right 0",
          zIndex: "-1",
        }}
      >
        <Heading
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", xl: "6xl" }}
          fontWeight="extrabold"
          letterSpacing="tight"
          mb="6"
        >
          Találd meg az orvosi szakterületed
        </Heading>
        <Heading
          fontSize={{ base: "lg", sm: "xl" }}
          fontWeight="medium"
          color="gray"
          mb="10"
        >
          A szakterületed kiválasztása életed egyik legmeghatározóbb döntése.
          <br />
          Ebben szeretnénk neked segíteni.
        </Heading>
        <Button
          colorScheme="primary"
          size={buttonSize}
          rightIcon={<ArrowForwardIcon />}
          onClick={onOpen}
        >
          Teszt kitöltése
        </Button>
      </Container>
    </Box>
  )
}
