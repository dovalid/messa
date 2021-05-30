import { Button } from "@chakra-ui/button"
import { CheckIcon, WarningIcon } from "@chakra-ui/icons"
import { Input } from "@chakra-ui/input"
import { Stack, Text } from "@chakra-ui/layout"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal"
import { Collapse } from "@chakra-ui/transition"
import { useState } from "react"

export default function EmailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("")
  const [formState, setFormState] = useState(["initial", ""])

  const handleChange = (e) => setEmail(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState(["loading", ""])

    fetch("https://usebasin.com/f/9e93c2298030", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          setFormState(["success", "Sikeresen feliratkoztál"])
        } else {
          console.log(response)
          setFormState([
            "error",
            "Hiba történt a mentés közben. Próbáld meg később!",
          ])
        }
      })
      .catch((error) => {
        console.log(error)
        setFormState([
          "error",
          "Hiba történt a mentés közben. Próbáld meg később!",
        ])
      })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      size="lg"
      preserveScrollBarGap
    >
      <ModalOverlay />
      <ModalContent mx="4" py="4" px={{ base: "2", md: "3" }} borderRadius="lg">
        <form onSubmit={handleSubmit}>
          <ModalHeader>Hamarosan...</ModalHeader>
          <ModalCloseButton borderRadius="full" top="6" right="6" />
          <ModalBody>
            <Text>
              Köszönjük, hogy érdeklődsz! Platformunk még fejlesztés alatt áll,
              így sajnos még várnod kell a teszt kitöltésével. Ha az elsők
              között szeretnél értesülni, add meg az email címed!
            </Text>
            <Input
              placeholder="messa@gmail.com"
              size="lg"
              mt="6"
              mb="4"
              focusBorderColor="secondary.300"
              type="email"
              value={email}
              required
              onChange={handleChange}
            />
            <Collapse
              in={formState[0] === "success" || formState[0] === "error"}
              animateOpacity
            >
              <Stack direction="row" align="center" spacing="3">
                {formState[0] === "success" ? (
                  <CheckIcon color="green" />
                ) : (
                  <WarningIcon color="red.600" />
                )}
                <Text fontWeight="semibold">{formState[1]}</Text>
              </Stack>
            </Collapse>
          </ModalBody>

          <ModalFooter>
            <Button type="button" variant="ghost" mr={3} onClick={onClose}>
              Bezárás
            </Button>
            <Button
              type="submit"
              colorScheme="primary"
              isLoading={formState[0] === "loading"}
              disabled={formState[0] === "success"}
            >
              Küldés
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
