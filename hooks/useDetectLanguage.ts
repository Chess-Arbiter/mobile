import { useState } from "react";
import i18next from "i18next";
import { ELANGUAGES } from "../models/global";

export default function useDetectLanguage(language: ELANGUAGES) {
  const [isLanguageDetected, setIsLanguageDetected] = useState(false);

  if (language && !isLanguageDetected) {
    i18next.changeLanguage(language);
    setIsLanguageDetected(true);
  }

  return isLanguageDetected;
}
