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
              right: { base: "-60px", md: "-80px" /* , lg: "0" */ },
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
              Ebben szeretnénk neked segíteni
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
            pb={{ sm: 4, md: 14, "2xl": 16 }}
            pt={{ lg: 10 }}
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
                  Készen állsz? Csak 15 perc
                </Heading>
                <Text pb="4">
                  Ne bízz a szerencsére egy életre szóló döntést, bízz inkább
                  bennünk, mi segítünk jól választani.
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
      <Box as="footer" role="contentinfo" py="8" pt="16">
        <Divider mb="8" display={{ md: "none" }} />
        <Container maxWidth="6xl" px={{ base: 6, md: 10 }}>
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
            <Link href="mailto:messahungary@gmail.com">Kapcsolat</Link>
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
