import React, { useEffect, useState } from "react";
import { getSettings } from "../data/api";
import initDb from "../data/initDb";
import { updateOrCreateSetting } from "../data/api";
import { APP_BASE_URL } from "../data/constants";
import { ELANGUAGES } from "../models/global";

const useInitApp = () => {
  const [initInProgress, setInitInProgress] = useState<boolean>(true);
  const [settings, setSettings] = useState({});
  const [currentUrl, setCurrentUrl] = useState("");
  const [error, setError] = useState(false);

  function changeSettings(key: string, value: string) {
    setSettings({ ...settings, [key]: value });
    if (key === "lang") {
      _onLanguageChange(value as ELANGUAGES);
    }
  }

  async function _onLanguageChange(value: ELANGUAGES) {
    try {
      await updateOrCreateSetting("lang", value);
      const [, path] = currentUrl.split(APP_BASE_URL);
      const pathArray = path.split("/");
      let newUrl = APP_BASE_URL;
      if (pathArray.length === 1) {
        newUrl += `${value}?from_mobile=true`;
        setCurrentUrl(newUrl);
        return;
      }
      newUrl += `${value}/${pathArray.slice(1).join("/")}`;
      setCurrentUrl(newUrl);
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
        setCurrentUrl(`${APP_BASE_URL}${settingsResult.lang}?from_mobile=true`);
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
};

export default useInitApp;
