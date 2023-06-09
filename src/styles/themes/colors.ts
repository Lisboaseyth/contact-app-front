import { extendTheme } from "@chakra-ui/react";
import { Buttons } from "./buttons";

export const DarkColors = {
  primary_color: '#010409',
  surface_color: '#0D1117',
  surface_color_strong: '#161B22',
  border_default: '#30363D',
  border_muted: '#21262D',
  warning_color: '#D29922',
  warning_color_variant: 'rgba(210, 153, 34, 0.6)',
  warning_surface_color: 'rgba(187, 128, 9, 0.15);',
  warning_border_color: 'rgba(187, 128, 9, 0.4);',
  text_color: '#C9D1D9',
  text_color_muted: '#98A6B3',
  surface_color_strong_hover: '#1F252E',
  text_color_disabled: 'rgba(153, 153, 153, 0.6)',
  button_text_color: '#FFFFFF',
  button_hover_color: 'rgba(255, 255, 255, 0.08);',
  error_color: '#EB4747',
  error_surface_color: 'rgba(153, 51, 51, 0.2)',
  error_border_color: 'rgba(153, 51, 51, 0.4)',
  success_color: '#3B6020',
  success_surface_color: 'rgba(59, 96, 32, 0.15)',
  success_border_color: 'rgba(59, 96, 32, 0.4)',
  transparent: 'rgba(255, 255, 255, 0)',
}

const theme = extendTheme({
  fonts: {
    body: "'Lexend', sans-serif",
  },
  colors: {
    brand: {
      1: "#4529E6",
      2: "#5126EA",
      3: "#B0A6F0",
      4: "#EDEAFD",
    },
    grey: {
      1: "#0B0D0D",
      2: "#212529",
      3: "#495057",
      4: "#868E96",
      5: "#ADB5BD",
      6: "#CED4DA",
      7: "#DEE2E6",
      8: "#E9ECEF",
      9: "#F1F3F5",
      10: "#F8F9FA",
      11: "#FDFDFD",
    },
    blue: {
      1: "#0047B2",
      2: "#0066FF",
      3: "#00296F",
    },
    whiteFixed: "#FFFFFF",
    alert: {
      1: "#CD2B31",
      2: "#FDD8D8",
      3: "#FFE5E5",
    },
    success: {
      1: "#18794E",
      2: "#CCEBD7",
      3: "#DDF3E4",
    },
    random: {
      1: "#E34D8C",
      2: "#C04277",
      3: "#7D2A4D",
      4: "#7000FF",
      5: "#6200E3",
      6: "#36007D",
      7: "#349974",
      8: "#2A7D5F",
      9: "#153D2E",
      10: "#6100FF",
      11: "#5700E3",
      12: "#30007D",
    },
  },
  fontSizes: {
    heading: {
      "1": "2.75rem",
      "2": "2.25rem",
      "3": "2rem",
      "4": "1.75rem",
      "5": "1.5rem",
      "6": "1.25rem",
      "7": "1rem",
    },
    body: {
      "1": "1rem",
      "2": "0.688rem",
    },
    buttonBigText: "1rem",
    buttonMediumText: "0.875rem",
    inputPlaceholder: "1rem",
    inputLabel: "0.875rem",
  },
  fontWeights: {
    extrabold: 800,
    bold: 700,
    semibold: 600,
    medium: 500,
    normal: 400,
  },
  components: {
    Buttons,
  }
});

export default theme;

