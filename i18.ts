import i18next from "i18next";

import common_en from "./data/translations/en.json";
import common_ru from "./data/translations/ru.json";
import common_hy from "./data/translations/hy.json";

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: "en", // language to use
  resources: {
    en: {
      common: common_en, // 'common' is our custom namespace
    },
    ru: {
      common: common_ru,
    },
    hy: {
      common: common_hy,
    },
  },
});

export default i18next;
