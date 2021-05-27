import { extendTheme, theme as baseTheme } from "@chakra-ui/react"

const colors = {
  primary: {
    300: "#F6B4B5",
    400: "#E4737E",
    500: "#DB5461",
    600: "#C6525D",
    700: "#AF4953",
  },
  secondary: {
    300: "#73C1C6",
    400: "#086375",
    500: "#0B5563",
  },
  gray: {
    100: "#F2F2F2",
    200: "#E0E0E0",
    300: "#BDBDBD",
    400: "#828282",
    500: "#666666",
    800: "#212529",
  },
}

const theme = extendTheme({
  colors,
  fonts: {
    body: "Inter",
    heading: "Inter",
  },
  shadows: {
    outline: "0 0 0 4px rgba(170, 170, 170, 0.6)",
  },
  components: {
    Button: {
      baseStyle: {
        /* fontWeight: "bold", */
        /* borderRadius: baseTheme.radii.lg, */
      },
      sizes: {
        xl: {
          fontSize: "lg",
          h: baseTheme.space[14],
          px: baseTheme.space[8],
        },
      },
    },
  },
})

export default theme
