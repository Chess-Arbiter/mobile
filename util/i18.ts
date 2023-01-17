import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from "../data/translations//en/en.json";
import errors_en from "../data/translations/en/errors.json";

import common_ru from "../data/translations/ru/ru.json";
import errors_ru from "../data/translations/ru/errors.json";

import common_hy from "../data/translations/hy/hy.json";
import errors_hy from "../data/translations/hy/errors.json";

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "ru", // language to use
  resources: {
    en: {
      common: common_en,
      errors: errors_en,
    },
    ru: {
      common: common_ru,
      errors: errors_ru,
    },
    hy: {
      common: common_hy,
      errors: errors_hy,
    },
  },
});

export default i18next;
