import { breakpoints } from "./theme/breakpoints";
import { colors } from "./theme/colors";
import { fontSize } from "./theme/fontSize";
import { space } from "./theme/space";

export const theme = {
  colors,
  space,
  fontSize,
  breakpoints,
} as const;
