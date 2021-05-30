import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  Stack,
  Image,
  Text,
  useBoolean,
  useBreakpointValue,
  useDisclosure,
  Grid,
  Divider,
} from "@chakra-ui/react"
import { useEffect } from "react"
import AnimationSection from "../components/AnimationSection"
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
              A szakterületed kiválasztása életed egyik legmeghatározóbb
              döntése.
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
        <AnimationSection />

        <Box as="section">
          <Container
            maxWidth="6xl"
            px={{ base: 4, md: 10 }}
            pb={{ base: 20, md: 24, lg: 28, "2xl": 32 }}
          >
            <Grid
              templateColumns={{ md: "4fr 3fr" }}
              gap="6"
              bg="secondary.500"
              color="white"
              borderRadius="lg"
              overflow="hidden"
            >
              <Stack
                spacing={6}
                p={{ base: 8, md: 12, lg: 16 }}
                alignItems="flex-start"
              >
                <Heading size="lg" fontWeight="extrabold">
                  Készen állsz?
                </Heading>
                <Text pb="4">
                  Ne bízz a szerencsére egy életre szóló döntést, bízz inkább
                  bennünk, mi segítünk jól választani. Csak 15 percet vesz
                  igénybe.
                </Text>
                <Button
                  flexShrink="0"
                  bg="white"
                  color="secondary.500"
                  shadow="md"
                  size={buttonSize}
                  alignSelf={{
                    base: "normal",
                    sm: "flex-end",
                    md: "flex-start",
                  }}
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

              <Box pos="relative" display={{ base: "none", md: "block" }}>
                <Image
                  src="screenshot.svg"
                  h="full"
                  pos="absolute"
                  bottom="-8"
                  right="-6"
                  shadow="lg"
                  borderRadius="lg"
                  overflow="hidden"
                  objectFit="cover"
                  objectPosition="0 0"
                />
              </Box>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box as="footer" role="contentinfo" bg="gray.100" color="gray.600">
        <Container maxWidth="6xl" px={{ base: 6, md: 10 }} py="16">
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing="8"
            justify="space-between"
          >
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Image src="logo.svg" alt="MESSA logo" w="20" />
              <Text>Medical Specialization via Self Assessment</Text>
            </Stack>
            <Stack spacing={{ base: "2", lg: "4" }}>
              <Text
                fontWeight="semibold"
                color="gray.500"
                textTransform="uppercase"
                fontSize="sm"
              >
                Kapcsolat
              </Text>
              <Link href="mailto:messahungary@gmail.com">
                messahungary@gmail.com
              </Link>
            </Stack>
          </Stack>
          <Divider my="8" />
          <Text>&copy; {new Date().getFullYear()} Minden jog fenntartva</Text>
        </Container>
      </Box>
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
