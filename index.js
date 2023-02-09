const FOREGROUND = '#BCC0CC'
const BACKGROUND = '#2A2D2C'
const DARKBACKGROUND = '#232524'
const BORDER = '#1E232F'

const BLACK = '#6A6D6C'
const RED = '#E47267'
const GREEN = '#25D483'
const YELLOW = '#DBEC79'
const BLUE = '#71BAEF'
const PURPLE = '#C181E4'
const ORANGE = '#F4BF5D'
const WHITE = '#DADDDC'
const LIGHTBLACK = '#8A8D8C'
const LIGHTRED = '#E69F99'
const LIGHTGREEN = '#58D59B'
const LIGHTYELLOW = '#E3EDAB'
const LIGHTBLUE = '#A4D0EF'
const LIGHTPURPLE = '#D5AFE9'
const LIGHTORANGE = '#F1D093'
const LIGHTWHITE = '#FAFDFC'

const colors = {
  black: BLACK,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  magenta: PURPLE,
  cyan: ORANGE,
  white: WHITE,
  lightBlack: LIGHTBLACK,
  lightRed: LIGHTRED,
  lightGreen: LIGHTGREEN,
  lightYellow: LIGHTYELLOW,
  lightBlue: LIGHTBLUE,
  lightMagenta: LIGHTPURPLE,
  lightCyan: LIGHTORANGE,
  lightWhite: LIGHTWHITE
}

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    colors,
    foregroundColor: FOREGROUND,
    backgroundColor: BACKGROUND,
    cursorColor: PURPLE,
    cursorShape: 'BLOCK',
    lineHeight: 1.2,
    selectionColor: LIGHTPURPLE,
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
      border-top: 1px solid ${PURPLE} !important;
      border-bottom: none !important;
      background: ${BACKGROUND} !important;
    }
    `
  })
