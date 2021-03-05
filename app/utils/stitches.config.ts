import { createStyled } from "@stitches/react"
import { CSSProperties } from "react"

export const { styled, css } = createStyled({
  prefix: "",
  tokens: {
    colors: {
      $bg: "white",
      $bg2: "#262626",
      $gray50: "#FAFAFA",
      $gray600: "#666666",
      $blue500: "hsl(206,100%,50%)",
      $purple500: "hsl(252,78%,60%)",
      $green500: "hsl(148,60%,60%)",
      $green600: "#43C9BA",
      $greenFF: "#02FDFF",
      $greenFD: "#F9FDFD",
      $yellow: "#FFD900",
    },
    height: {
      $0: "0",
      $1: "0.25rem",
      $2: "0.5rem",
      $3: "0.75rem",
      $4: "1rem",
      $5: "1.25rem",
      $6: "1.5rem",
      $7: "1.75rem",
      $8: "2rem",
    },
    space: {
      $1: "5px",
      $2: "10px",
      $3: "15px",
      autoX: "0 auto",
    },
    fontSizes: {
      $xs: "0.75rem",
      $sm: "0.875rem",
      $base: "1rem",
      $lg: "1.125rem",
      $xl: "1.25rem",
      $2xl: "1.5rem",
      $3xl: "1.875rem",
      $4xl: "2.25rem",
      $5xl: "3rem",
      $6xl: "4rem",
    },
    fonts: {
      $untitled: "Untitled Sans, apple-system, sans-serif",
      $ibm: "IBM Plex Sans, sans-serif",
      $poppins: "Poppins, sans-serif",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      $mainW: "1200px",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  breakpoints: {
    sm: (rule) => `@media (min-width: 480px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1280px) { ${rule} }`,
    smMax: (rule) => `@media (max-width: 480px) { ${rule} }`,
    mdMax: (rule) => `@media (max-width: 768px) { ${rule} }`,
    lgMax: (rule) => `@media (max-width: 1024px) { ${rule} }`,
    xlMax: (rule) => `@media (max-width: 1280px) { ${rule} }`,
  },
  utils: {
    m: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value,
    }),
    mt: (config) => (value) => ({
      marginTop: value,
    }),
    mr: (config) => (value) => ({
      marginRight: value,
    }),
    mb: (config) => (value) => ({
      marginBottom: value,
    }),
    ml: (config) => (value) => ({
      marginLeft: value,
    }),
    mx: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    p: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (config) => (value) => ({
      paddingTop: value,
    }),
    pr: (config) => (value) => ({
      paddingRight: value,
    }),
    pb: (config) => (value) => ({
      paddingBottom: value,
    }),
    pl: (config) => (value) => ({
      paddingLeft: value,
    }),
    px: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    size: (config) => (value) => ({
      width: value,
      height: value,
    }),
    fontIbm: (config) => (value) => ({
      fontFamily: "$ibm",
      fontWeight: value,
    }),
    fontPoppins: (config) => (value) => ({
      fontFamily: "$poppins",
      fontWeight: value,
    }),
    linearGradient: (config) => (value) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    br: (config) => (value) => ({
      borderRadius: value,
    }),
    flexBetweenCenter: (config) => (value: CSSProperties["flexDirection"] = "row") => ({
      flexDirection: value,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    flexBetweenTop: (config) => (value: CSSProperties["flexDirection"] = "row") => ({
      flexDirection: value,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    }),
    flexCenterLeft: (config) => (value: CSSProperties["flexDirection"] = "row") => ({
      flexDirection: value,
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    }),
    flexCenterCenter: (config) => (value: CSSProperties["flexDirection"] = "row") => ({
      flexDirection: value,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    flexLeftCenter: (config) => (value: CSSProperties["flexDirection"] = "row") => ({
      flexDirection: value,
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    }),
  },
})
