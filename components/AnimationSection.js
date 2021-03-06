import { memo, useEffect, useRef, useState } from "react"
import lottie from "lottie-web/build/player/lottie_light"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  Container,
  IconButton,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react"
import { ReactSVG } from "react-svg"
import { AnimatePresence, motion } from "framer-motion"
import animJson from "../public/animation.json"
import Head from "next/head"

const animationStates = [
  {
    scroll: 0,
    frame: 50,
    text: `A szakterület választás útvesztőjében nehéz a számodra legjobb utat
           megtalálnod, hiszen számos lehetőség közül kell választanod.`,
  },
  {
    scroll: 700,
    frame: 70,
    text: `A MESSA honlapján teszt alapú ajánló rendszerrel, szakterületekhez
           tartozó leírásokkal és szakorvosi beszámolókkal segítünk az útbaigazításban.`,
  },
  {
    scroll: 1800,
    frame: 120,
    text: `A teszt alapján megmutatjuk, melyik szakterületek megfontolása lehet a leghasznosabb számodra.`,
  },
  {
    scroll: 2900,
    frame: 165,
    text: `Célunk, hogy végül rátalálj arra a szakterületre, ahol a leginkább ki tudsz teljesedni orvosként.`,
  },
]

const MotionText = motion(Text)
//have to use memo so it doesn't rerender on every state change
const Illustration = memo(() => (
  <ReactSVG
    src="doctors.svg"
    loading={() => <img src="doctors.svg" />}
    fallback={() => <img src="doctors.svg" />}
  />
))

export default function AnimationSection({}) {
  const lottieElement = useRef()
  const scrollElement = useRef()
  const [currentState, setCurrentState] = useState(0)
  const [motionHelper, setMotionHelper] = useState(1)
  const [lottieInstance, setLottieInstance] = useState()
  const [isFullscreen] = useMediaQuery(
    "(min-height: 500px) and (max-height: 1100px)"
  )

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: lottieElement.current,
      animationData: animJson,
      loop: false,
      initialSegment: [0, animationStates[0].frame],
    })
    instance.setSpeed(1.5)
    setLottieInstance(instance)

    return () => {
      instance.destroy()
      setCurrentState(0)
    }
  }, [])

  const transitionTo = (direction) => {
    const step = direction === "next" ? 1 : -1
    setMotionHelper(step)
    const from = animationStates[currentState].frame + 1
    const to = animationStates[currentState + step].frame
    lottieInstance?.playSegments([from, to], true)
    setCurrentState(currentState + step)
  }
  const handlePrev = () => transitionTo("prev")
  const handleNext = () => transitionTo("next")

  const handleScroll = (e) => {
    const pos = scrollElement.current.offsetTop
    if (pos > animationStates[currentState + 1]?.scroll) handleNext()
    if (pos < animationStates[currentState]?.scroll) handlePrev()
  }

  useEffect(() => {
    if (isFullscreen) document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [currentState, lottieInstance, isFullscreen])

  return (
    <Box
      sx={{
        "@media screen and (min-height: 500px) and (max-height: 1100px)": {
          height: "4500px",
        },
      }}
      pos="relative"
    >
      <Head>
        <link rel="stylesheet" href="doctors.css" />
      </Head>
      <Box
        ref={scrollElement}
        pos="sticky"
        top="50px"
        as="section"
        bg="gray.100"
        overflow="hidden"
        display="flex"
        alignItems="center"
      >
        <Container
          maxWidth="6xl"
          pt={{ base: 12, md: 20, lg: 28 }}
          pb="8"
          px={{ base: 4, sm: 6, md: 16 }}
          sx={{
            "@media screen and (max-height: 1100px)": {
              minHeight: "100vh",
            },
            "@media screen and (min-height: 1101px)": {
              height: "1000px",
            },
          }}
          display="flex"
          flexDir="column"
          justifyContent="space-around"
        >
          <Stack
            align="center"
            spacing={{ base: 10, xl: 12 }}
            mb={8}
            px={{ lg: "24" }}
            direction={{ base: "column", md: "row" }}
          >
            <Box
              ref={lottieElement}
              boxSize={{ base: "110px", sm: "120px", xl: "150px" }}
              flexShrink="0"
            />
            <Box
              pos="relative"
              h={{ base: "32", md: "24" }}
              w="full"
              display="flex"
              alignItems={{ md: "center" }}
            >
              <AnimatePresence>
                <MotionText
                  key={currentState}
                  pos="absolute"
                  fontSize={{ base: "lg", md: "2xl" }}
                  fontWeight="bold"
                  textAlign={{ base: "center", md: "left" }}
                  initial={{ opacity: 0, y: motionHelper * 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: motionHelper * -1 * 60 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                >
                  {animationStates[currentState].text}
                </MotionText>
              </AnimatePresence>
            </Box>
          </Stack>
          <Box
            pos="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: { base: "calc(60%)", lg: "calc(65%)" },
              width: "100vw",
              height: "1000px",
              background: "white",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: "-1",
            }}
            pb="6"
            className={`state${currentState}`}
          >
            <Illustration />
          </Box>
        </Container>
        <TransitionButton
          icon={<ChevronLeftIcon />}
          disabled={currentState === 0}
          onClick={handlePrev}
          side="left"
        />
        <TransitionButton
          icon={<ChevronRightIcon />}
          disabled={currentState === 3}
          onClick={handleNext}
          side="right"
        />
      </Box>
    </Box>
  )
}

function TransitionButton({ icon, disabled, onClick, side }) {
  return (
    <IconButton
      icon={icon}
      size="lg"
      variant="ghost"
      pos="absolute"
      {...{ [side]: { base: 0, lg: "12" } }}
      transform="translateY(-80px)"
      isRound
      disabled={disabled}
      onClick={onClick}
      sx={{
        "@media screen and (min-height: 500px) and (max-height: 1100px)": {
          display: "none",
        },
      }}
    />
  )
}
