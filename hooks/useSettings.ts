import { useEffect, useState } from "react";
import { getSettings } from "../data/api";
import initDb from "../data/initDb";
import { updateOrCreateSetting } from "../data/api";
import { APP_BASE_URL } from "../data/constants";
import { ELANGUAGES } from "../models/global";
import { useTranslation } from "react-i18next";
import { setURLSearchParam } from "../util/url";
import { ColorSchemeName } from "react-native";

export default function useInitApp() {
  const [initInProgress, setInitInProgress] = useState<boolean>(true);
  const [, i18n] = useTranslation();
  const [settings, setSettings] = useState({
    lang: ELANGUAGES.EN,
    theme: "light" as ColorSchemeName,
  });
  const [currentUrl, setCurrentUrl] = useState("");
  const [error, setError] = useState(false);

  function changeSettings(key: string, value: string) {
    setSettings({ ...settings, [key]: value });

    if (key === "lang") {
      return _onLanguageChange(value as ELANGUAGES);
    }
    if (key === "theme") {
      _onThemeChange(value);
    }
    updateOrCreateSetting(key, value);
  }

  async function _onLanguageChange(value: ELANGUAGES) {
    try {
      await updateOrCreateSetting("lang", value);
      i18n.changeLanguage(value);
      const [, path] = currentUrl.split(APP_BASE_URL);
      const pathArray = path.split("/");
      let newUrl = APP_BASE_URL;
      if (pathArray.length === 1) {
        newUrl += `${value}?mobile=true`;
        setCurrentUrl(newUrl);
        return;
      }
      newUrl += `${value}/${pathArray.slice(1).join("/")}`;
      setCurrentUrl(newUrl);
    } catch (err) {
      console.log(err);
    }
  }

  async function _onThemeChange(value: string) {
    try {
      await updateOrCreateSetting("theme", value);
      setCurrentUrl(setURLSearchParam(currentUrl, "theme", value));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    (async function () {
      try {
        await initDb();
        const settings = await getSettings();
        const settingsResult = settings.rows._array.reduce(
          (acc, { setting, value }) => {
            acc[setting] = value;
            return acc;
          },
          {}
        );
        setCurrentUrl(
          `${APP_BASE_URL}${settingsResult.lang}/laws/article1?mobile=true&theme=${settingsResult.theme}`
        );
        setSettings(settingsResult);
        setInitInProgress(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);
  return {
    error,
    initInProgress,
    settings,
    changeSettings,
    currentUrl,
    setCurrentUrl,
  };
}
