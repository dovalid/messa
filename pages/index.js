import { Box, useDisclosure } from "@chakra-ui/react"
import AnimationSection from "../components/AnimationSection"
import EmailModal from "../components/EmailModal"
import Header from "../components/Header"
import Hero from "../components/Hero"
import CallToActionSection from "../components/CallToActionSection"
import Footer from "../components/Footer"

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Header onOpen={onOpen} />
      <Box as="main" pt={12}>
        <Hero onOpen={onOpen} />
        <AnimationSection />
        <CallToActionSection onOpen={onOpen} />
      </Box>
      <Footer />
      <EmailModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
