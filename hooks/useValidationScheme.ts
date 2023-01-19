import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function useValidationScheme(getScheme: any) {
  const scheme = useRef(null);
  const [t] = useTranslation();
  if (!scheme.current) {
    scheme.current = getScheme(t);
  }

  return scheme.current;
}
