import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Image,
  Stack,
  useBoolean,
} from "@chakra-ui/react"
import { useEffect } from "react"

export default function Header({ onOpen }) {
  const [scrolled, setScrolled] = useBoolean()
  const handleScroll = () =>
    window.scrollY > 0 ? setScrolled.on() : setScrolled.off()

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
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
  )
}
