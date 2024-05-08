import React, { createContext, ReactNode, useContext } from "react";
import { ColorSchemeName } from "react-native";
import { WebViewErrorEvent } from "react-native-webview/lib/WebViewTypes";
import { ELANGUAGES } from "../models/global";

interface IContextData {
  settings: {
    lang: ELANGUAGES;
    theme: ColorSchemeName;
  };
  colorScheme: "light" | "dark";
  changeSettings: (key: string, value: string) => Promise<void> | undefined;
  currentUrl: string;
  onNavigationStateChange: (params: { url: string }) => void;
  onError?: (event: WebViewErrorEvent) => void;
}

const AppContext = createContext<IContextData>({} as IContextData);

const AppProvider = ({
  children,
  contextData,
}: {
  children: ReactNode;
  contextData: IContextData;
}) => {
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default AppProvider;
