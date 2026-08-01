export const spacing = {
  small: "8px",
  medium: "16px",
  large: "32px",
  xlarge: "48px",
};

// The raw palettes, only referenced when defining the CSS custom properties in
// Layout – everywhere else use the semantic `colors` below so that components
// automatically follow the system light/dark preference.
export const palette = {
  light: {
    primary: "#328aff",
    background: "#FFFFFF",
    backgroundSecondary: "#F2F2F2",
    border: "rgba(0, 0, 0, 0.2)",
    text: "#181A1B",
    textSecondary: "#5E6573",
    textTertiary: "#C5CCD3",
    textMenu: "rgba(0, 0, 0, 0.75)",
  },
  dark: {
    primary: "#66A6FF",
    background: "#181A1B",
    backgroundSecondary: "#26282A",
    border: "rgba(255, 255, 255, 0.2)",
    text: "#E8EBED",
    textSecondary: "#9BA3AF",
    textTertiary: "#4A4F55",
    textMenu: "rgba(255, 255, 255, 0.75)",
  },
};

export const colors = {
  primary: "var(--primary)",
  background: "var(--background)",
  backgroundSecondary: "var(--background-secondary)",
  border: "var(--border)",
  text: "var(--text)",
  textSecondary: "var(--text-secondary)",
  textTertiary: "var(--text-tertiary)",
  textMenu: "var(--text-menu)",
};

export const typography = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  fontFamilyMono: "Roboto Mono, Menlo, monospace",
};
