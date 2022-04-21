const primary = "#6E00FF";
const secondary = "#FF7A49";
const greens = {
  green100: "#2bdc4d",
  green400: "#45c772",
};
const blues = {
  blue200: "#2b99dc",
  blue400: "#4599ad",
};
const browns = {
  brown100: "#c04b31",
  brown200: "#bf4b31",
};
const grays = {
  white: "#fff",
  gray100: "#f8f8f8",
  gray200: "#F2F6FA",
  gray500: "#CED4FF",
  gray900: "#333333",
  black: "#000",
};

const others = {
  red: "#c74545",
  yellow: "#F3BA2F",
  purple: "#f372da",
  logout: "#c24444",
};

export default {
  light: {
    primary,
    secondary,
    text: grays.gray900,
    inputBackground: grays.gray500,
    background: grays.gray200,
    ModalBg: grays.gray100,
    bageBg: "#d8d8d8",
    tint: primary,
    tabIconDefault: "#afb2b5",
    ...greens,
    ...blues,
    ...grays,
    ...browns,
    ...others,
  },
};
