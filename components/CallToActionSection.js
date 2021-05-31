import { ArrowForwardIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react"

export default function CallToActionSection({ onOpen }) {
  const buttonSize = useBreakpointValue({ base: "lg", lg: "xl" })

  return (
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
              bennünk, mi segítünk jól választani. Csak 15 percet vesz igénybe.
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
  )
}
