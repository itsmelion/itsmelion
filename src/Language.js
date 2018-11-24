/*
  @description exposes user language to global context
  Checks navigator language, then localStorage.lang, then query parameter,
*/

export default class Language {
  constructor(
    languagesAvailable,
    defaultLanguage = 'en',
    queryParamModifier = 'lang',
  ) {
    this.languagesAvailable = languagesAvailable;
    this.defaultLanguage = defaultLanguage;
    this.queryParamModifier = queryParamModifier;
  }

  getQueryParam(parameter) {
    parameter = parameter || this.queryParamModifier;
    let param;
    const query = window.location.search.substring(1);
    const params = query.split('&');
    const result = params.map(item => {
      const pair = item.split('=');
      if (pair[0] === parameter) return pair[1];
      return false;
    });

    result.forEach(res => {
      if (res) param = res;
    });

    return param;
  }

  getLanguage() {
    const browserLang =
      window.navigator.userLanguage || window.navigator.language;
    const lang = `${browserLang[0]}${browserLang[1]}`.toLowerCase();
    const local = localStorage.getItem('lang');
    const queryLang = this.getQueryParam('lang');
    const language =
      (this.languagesAvailable.includes(queryLang) && queryLang) ||
      local ||
      (this.languagesAvailable.includes(lang) && lang) ||
      this.defaultLanguage;

    if (queryLang) return language;
    if (local) return local;
    if (!browserLang) return this.defaultLanguage;

    return language;
  }
}
