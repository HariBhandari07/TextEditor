export const CHAR_STYLE_MAP = [
  { prefix: "# ", blockType: "header-one", offset: 1 },
  { prefix: "*** ", inlineStyle: "UNDERLINE", offset: 3 },
  { prefix: "** ", inlineStyle: "RED_COLOR", offset: 2 },
  { prefix: "* ", inlineStyle: "BOLD", offset: 1 },
  { prefix: "``` ", blockType: "code-block", offset: 3 },
];

export const STYLE_MAP = {
  'RED_COLOR': {
    color: 'red',
  },
};
