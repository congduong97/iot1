const CHECK_LOGIC = {};

const STRINGS_VN = {};
const STRINGS_JAPANESE = {
  //common string
};
const STRINGS_ENGLISH = {};

const LANGUAGE_LIST = [
  {code: 'ja', value: 'Japanese'},
  {code: 'en', value: 'English'},
  {code: 'vn', value: 'Việt Nam'},
  {code: 'ko', value: 'Korean'},
];

// let language;
const STRINGS = {
  ...STRINGS_VN,
  ...STRINGS_ENGLISH,
  ...STRINGS_JAPANESE,
};

const settingLanguage = async initLanguage => {};

settingLanguage();

export {STRINGS, LANGUAGE_LIST, CHECK_LOGIC};
