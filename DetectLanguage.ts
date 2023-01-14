import { useTranslation } from "react-i18next";
import { ELANGUAGES } from "./models/global";

type DetectLanguageProps = {
  onDetect: () => void;
  language: ELANGUAGES;
};

export default function DetectLanguage({
  onDetect,
  language,
}: DetectLanguageProps) {
  const [t, i18n] = useTranslation("common");
  if (language) {
    i18n.changeLanguage(language);
  }
  onDetect();
  return null;
}
