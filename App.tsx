import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { I18nextProvider } from "react-i18next";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Provider as PaperProvider } from "react-native-paper";
import useInitApp from "./hooks/useInitApp";
import i18 from "./i18";
import DetectLanguage from "./DetectLanguage";
import AppProvider from "./context/AppContext";
import SelectLanguage from "./components/SelectLanguage/SelectLanguage";
import { ELANGUAGES } from "./models/global";

export default function App() {
  const [languageDetected, setLanguageDetected] = useState<boolean>(false);
  const isLoadingComplete = useCachedResources();
  const deviceColorScheme = useColorScheme();
  const {
    initInProgress,
    error,
    settings,
    setCurrentUrl,
    changeSettings,
    currentUrl,
  } = useInitApp();
  const colorScheme = "light";

  function onNavigationStateChange(params) {
    setCurrentUrl(params.url);
  }

  if (!isLoadingComplete || initInProgress) {
    return null;
  } else {
    return (
      <I18nextProvider i18n={i18}>
        {languageDetected ? (
          <AppProvider
            contextData={{
              settings,
              changeSettings,
              currentUrl,
              onNavigationStateChange,
            }}
          >
            <PaperProvider>
              <SafeAreaProvider>
                <Navigation colorScheme={colorScheme} />
                <StatusBar />
                <SelectLanguage
                  onSelect={(value: ELANGUAGES) =>
                    changeSettings("lang", value)
                  }
                  open={!settings["lang"]}
                />
              </SafeAreaProvider>
            </PaperProvider>
          </AppProvider>
        ) : (
          <DetectLanguage
            onDetect={() => setLanguageDetected(true)}
            language={settings.lang}
          />
        )}
      </I18nextProvider>
    );
  }
}
