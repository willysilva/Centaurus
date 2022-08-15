import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      magenta: "#E63888",
      "dark-high": "rgba(0,0,0,0.80)",
      "dark-medium": "rgba(0,0,0,0.60)",
      "dark-low": "rgba(0,0,0,0.44)",
      "light-solid": "#FFFFFF",
      "light-high": "rgba(255,255,255,0.80)",
    },
    fontSizes: {
      display: "3rem",
      headingLarger: "2.5rem",
      headingMedium: "2rem",
      headingSmall: "1.5rem",
      headingExtraSmall: "1.5rem",
      subHeading: "1rem",
      bodyMedium: "1rem",
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    fontFamilies: {
      default: "'Roboto', sans-serif",
    },
    lineHeights: {
      display: "52px",
      headingLarger: "44px",
      headingMedium: "24px",
      headingSmall: "20px",
      headingExtraSmall: "18px",
      subHeading: "20px",
      bodyMedium: "24",
    },
    letterSpacings: {
      display: "-1.2rem",
      headingLarger: "-1rem",
      headingMedium: "-0.8rem",
      headingSmall: "-0.6rem",
    },
  },
  media: {
    bp1: `(min-width: 640px)`,
  },
});
