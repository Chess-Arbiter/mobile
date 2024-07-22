import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { I18nextProvider } from "react-i18next";

import useCachedResources from "../hooks/useCachedResources";
import useColorScheme from "../hooks/useColorScheme";
import Navigation from "../navigation";
import { Provider as PaperProvider } from "react-native-paper";
import useInitApp from "../hooks/useInitApp";
import i18 from "../util/i18";
import AppProvider from "../context/AppContext";
import SelectLanguage from "../components/SelectLanguage/SelectLanguage";
import { ELANGUAGES } from "../models/global";
import useDetectLanguage from "../hooks/useDetectLanguage";
import { CombinedDarkTheme, CombinedDefaultTheme } from "../theme/theme";
import ErrorScreen from "../screens/ErrorScreen/ErrorScreen";
import { LANGUAGES } from "../data/constants";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const deviceColorScheme = useColorScheme();
  const {
    initInProgress,
    settings,
    setCurrentUrl,
    changeSettings,
    currentUrl,
    hasError,
    isConnectionDetected,
  } = useInitApp();
  const languageDetected = useDetectLanguage(
    settings.lang || LANGUAGES[0].value
  );
  const colorScheme = settings.theme || deviceColorScheme;

  function onNavigationStateChange(params: { url: string }) {
    setCurrentUrl(params.url);
  }

  if (!isLoadingComplete || initInProgress || !isConnectionDetected) {
    return null;
  } else {
    return (
      <I18nextProvider i18n={i18}>
        {languageDetected ? (
          <AppProvider
            contextData={{
              settings,
              colorScheme,
              changeSettings,
              currentUrl,
              onNavigationStateChange,
            }}
          >
            <PaperProvider
              theme={
                colorScheme === "dark"
                  ? CombinedDarkTheme
                  : CombinedDefaultTheme
              }
            >
              <SafeAreaProvider>
                {!hasError ? (
                  <>
                    <Navigation colorScheme={colorScheme} />
                    <StatusBar />
                    <SelectLanguage
                      onSelect={(value: ELANGUAGES) =>
                        changeSettings("lang", value)
                      }
                      open={!settings["lang"]}
                    />
                  </>
                ) : (
                  <ErrorScreen />
                )}
              </SafeAreaProvider>
            </PaperProvider>
          </AppProvider>
        ) : null}
      </I18nextProvider>
    );
  }
}
