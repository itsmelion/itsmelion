import { isPlainObject } from 'lodash';
/*
  @description exposes user language to global context
  Checks navigator language, then localStorage.lang, then query parameter,
*/

const defaultLang = process.env.REACT_APP_DEFAULT_LANG || 'en';

export default class LanguageService {
  constructor(
    languagesAvailable,
    defaultLanguage = defaultLang,
    queryParamModifier = 'lang',
  ) {
    this.languagesAvailable = languagesAvailable;
    this.defaultLanguage = defaultLanguage;
    this.queryParamModifier = queryParamModifier;
  }

  getQueryParam(parameter = this.queryParamModifier) {
    let param;
    const query = window.location.search.substring(1);
    const params = query.split('&');
    const result = params.map((item) => {
      const pair = item.split('=');
      if (pair[0] === parameter) return pair[1];
      return false;
    });

    result.forEach((res) => {
      if (res) param = res;
    });

    return decodeURI(param);
  }

  getLanguage() {
    const browserLang = window.navigator.userLanguage
      || window.navigator.language;
    const lang = `${browserLang[0]}${browserLang[1]}`.toLowerCase();
    const local = localStorage.getItem('lang');
    const queryLang = this.getQueryParam();
    const language = (this.languagesAvailable.includes(queryLang) && queryLang)
      || local
      || (this.languagesAvailable.includes(lang) && lang)
      || this.defaultLanguage;

    if (!browserLang) return this.defaultLanguage;

    return language;
  }
}

// Setup application Language (locale) to global context
const startLanguage = () => {
  if (typeof window !== 'undefined') {
    const languageService = new LanguageService(['pt', 'en', 'he']);
    window.lang = languageService.getLanguage();
    localStorage.setItem('lang', window.lang);

    return window.lang;
  }

  return 'en';
};

export const trans = (lang => (obj) => {
  if (!obj || !isPlainObject(obj)) {
    // eslint-disable-next-line no-console
    console.warn(obj);
    // eslint-disable-next-line no-console
    console.error('Data above is not an Object with language or is undefined.');
    return obj;
  }

  if (obj && !obj[lang]) {
    // eslint-disable-next-line no-console
    console.warn(`Non existent language.. trying defaults. DEFAULT: ${defaultLang}\n; Available: [${Object.keys(obj).toString()}]`);
    return obj[defaultLang] || obj[Object.keys(obj)[0]] || obj;
  }

  return obj[lang];
})(startLanguage());
