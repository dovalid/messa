import {
  Box,
  Container,
  Divider,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"

export default function Footer() {
  return (
    <Box as="footer" role="contentinfo" bg="gray.100" color="gray.600">
      <Container maxWidth="6xl" px={{ base: 6, md: 10 }} py="16">
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="8"
          justify="space-between"
        >
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Image src="logo.svg" alt="MESSA logo" w="20" ignoreFallback />
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
  )
}
