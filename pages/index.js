import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Link,
  Stack,
  Image,
  Text,
  useBoolean,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react"
import { useEffect } from "react"
import EmailModal from "../components/EmailModal"

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrolled, setScrolled] = useBoolean()
  const handleScroll = () =>
    window.scrollY > 0 ? setScrolled.on() : setScrolled.off()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const buttonSize = useBreakpointValue({ base: "lg", lg: "xl" })

  return (
    <>
      <Box
        as="header"
        pos="fixed"
        w="100%"
        bg="white"
        zIndex="sticky"
        shadow={scrolled ? "md" : null}
        transition="box-shadow .1s"
      >
        <Container
          maxWidth="6xl"
          px={{ base: 6, md: 10 }}
          py={{ base: 4, lg: 4 }}
        >
          <Stack direction="row" justify="space-between">
            <Image src="logo.svg" alt="MESSA logo" w="20" />
            <Button
              colorScheme="primary"
              size="md"
              opacity={scrolled ? "1" : "0"}
              pointerEvents={scrolled ? "all" : "none"}
              rightIcon={<ArrowForwardIcon />}
              onClick={onOpen}
            >
              Teszt kitöltése
            </Button>
          </Stack>
        </Container>
      </Box>
      <Box as="main" pt={12}>
        <Box as="section">
          <Container
            maxWidth="6xl"
            py={{ base: 16, sm: 20, lg: 32 }}
            px={{ base: 6, md: 10 }}
            bgImage="url(star.svg)"
            bgRepeat="no-repeat"
            bgSize={{ base: "300px", sm: "350px", md: "500px", lg: "550px" }}
            bgPos={{
              base: "bottom -50px right -60px",
              md: "bottom -100px right -80px",
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
              A szakterületed kiválasztása életed egyik legmeghatározóbb
              döntése. Ebben szeretnénk neked segíteni
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
        <Box
          as="section"
          /* parsing gray.100 is buggy because of the calc function
             so have to pass the css variable explecitly  */
          bgImage={{
            base: "linear-gradient(var(--chakra-colors-gray-100) calc(100% - 100px), white 100px)",
            sm: "linear-gradient(var(--chakra-colors-gray-100) calc(100% - 130px), white 130px)",
            md: "linear-gradient(var(--chakra-colors-gray-100) calc(100% - 180px), white 180px)",
            lg: "linear-gradient(var(--chakra-colors-gray-100) calc(100% - 200px), white 200px)",
          }}
        >
          <Container
            maxWidth="5xl"
            py={{ base: 12, md: 20, lg: 24 }}
            px={{ base: 6, md: 16 }}
          >
            <Stack
              align="center"
              spacing={{ base: 6, md: 10 }}
              mb={6}
              px={{ sm: "12", lg: "24" }}
              direction={{ base: "column", md: "row" }}
            >
              <Image src="anim.svg" boxSize="120px"></Image>
              <Text
                fontSize={{ base: "lg", lg: "xl" }}
                fontWeight="bold"
                textAlign={{ base: "center", md: "left" }}
              >
                A szakterület választás útvesztőjében nehéz a számodra legjobb
                utat megtalálnod, hiszen számos lehetőség közül kell
                választanod.
              </Text>
            </Stack>
            <img src="doctors.svg"></img>
          </Container>
        </Box>
        <Box as="section">
          <Container
            maxWidth="6xl"
            mt={{ base: "-20px", lg: "-100px" }}
            px={{ base: 6, md: 10 }}
            py={{ base: 6, lg: 20 }}
          >
            <Stack
              justify="space-between"
              direction={{ base: "column", md: "row" }}
              align={{ sm: "flex-end", md: "center" }}
              spacing={{ base: 8, md: 20, lg: 48 }}
              bg="secondary.500"
              p={{ base: 8, lg: 16 }}
              color="white"
              borderRadius="lg"
            >
              <Stack spacing={6}>
                <Heading size="lg" fontWeight="extrabold">
                  Készen állsz? Csak 15 perc
                </Heading>
                <Text>
                  Ne bízz a szerencsére egy életre szóló döntést, bízz inkább
                  bennünk, mi segítünk jól választani.
                </Text>
              </Stack>
              <Button
                flexShrink="0"
                bg="white"
                color="secondary.500"
                shadow="md"
                size={buttonSize}
                _hover={{
                  bg: "rgba(255, 255, 255, 0.85)",
                }}
                _active={{
                  bg: "rgba(255, 255, 255, 0.7)",
                }}
                rightIcon={<ArrowForwardIcon />}
                onClick={onOpen}
              >
                Teszt kitöltése
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Box as="footer" role="contentinfo">
        <Container maxWidth="6xl" py="8" px={{ base: 6, md: 10 }}>
          <Divider mb="8" />
          <Stack
            direction="row"
            spacing="4"
            align="center"
            justify="space-between"
          >
            <Stack direction="row" spacing="8" align="center">
              <Image src="logo.svg" alt="MESSA logo" w="20" />
              <Text fontSize="sm" display={{ base: "none", sm: "block" }}>
                &copy; {new Date().getFullYear()} Minden jog fenntartva
              </Text>
            </Stack>
            <Link href="mailto:hellomessa@gmail.com">Kapcsolat</Link>
          </Stack>
          <Text
            fontSize="sm"
            pt="6"
            textAlign="center"
            display={{ base: "block", sm: "none" }}
          >
            &copy; {new Date().getFullYear()} MESSA minden jog fenntartva
          </Text>
        </Container>
      </Box>
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
