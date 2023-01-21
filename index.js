const FOREGROUND = '#BCC0CC'
const BACKGROUND = '#2A2D2C'
const DARKBACKGROUND = '#232524'
const BORDER = '#1E232F'

const BLACK = '#6A6D6C'
const RED = '#E47267'
const GREEN = '#25D483'
const YELLOW = '#E8DA7D'
const ORANGE = '#F4BF5D'
const PURPLE = '#C181E4'
const CYAN = '#71BAEF'
const WHITE = '#DADDDC'
const LIGHTBLACK = '#8A8D8C'
const LIGHTRED = '#E69F99'
const LIGHTGREEN = '#58D59B'
const LIGHTYELLOW = '#EBE3AD'
const LIGHTORANGE = '#F1D093'
const LIGHTPURPLE = '#D5AFE9'
const LIGHTCYAN = '#A4D0EF'
const LIGHTWHITE = '#FAFDFC'

const colors = {
  black: BLACK,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: ORANGE,
  magenta: PURPLE,
  cyan: CYAN,
  white: WHITE,
  lightBlack: LIGHTBLACK,
  lightRed: LIGHTRED,
  lightGreen: LIGHTGREEN,
  lightYellow: LIGHTYELLOW,
  lightBlue: LIGHTORANGE,
  lightMagenta: LIGHTPURPLE,
  lightCyan: LIGHTCYAN,
  lightWhite: LIGHTWHITE
}

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    colors,
    foregroundColor: FOREGROUND,
    backgroundColor: BACKGROUND,
    cursorColor: YELLOW,
    cursorShape: 'BLOCK',
    lineHeight: 1.2,
    selectionColor: LIGHTYELLOW,
    borderColor: BORDER,
    fontSize: 14,
    css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background: ${DARKBACKGROUND} !important;
    }
    .tab_tab {
      color: ${FOREGROUND}60;
      background: ${DARKBACKGROUND} !important;
      border: 0 !important;
      border-top: none !important;
    }
    .tab_tab.tab_active {
      color: ${FOREGROUND};
      border-top: 1px solid ${YELLOW} !important;
      border-bottom: none !important;
      background: ${BACKGROUND} !important;
    }
    `
  })
