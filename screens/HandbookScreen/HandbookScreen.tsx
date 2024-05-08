import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text } from "react-native-paper";
import { useRef } from "react";
import { BackHandler, View } from "react-native";
import { WebView } from "react-native-webview";
import { useAppContext } from "../../context/AppContext";
import { useTranslation } from "react-i18next";

const PAGE_STATUSES = {
  loaded: "loaded",
  failed: "failed",
  loading: "loading,",
};

export default function TabOneScreen() {
  const [status, setStatus] = useState(PAGE_STATUSES.loading);
  const [t] = useTranslation("common");
  const { currentUrl, onNavigationStateChange, onError } = useAppContext();

  const pageRef = useRef<any>();
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (!pageRef.current) return false;
        pageRef.current.goBack();
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [pageRef.current])
  );

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {status !== PAGE_STATUSES.failed && (
        <WebView
          onError={onError}
          source={{ uri: currentUrl }}
          onLoad={() => setStatus(PAGE_STATUSES.loaded)}
          ref={pageRef}
          onNavigationStateChange={onNavigationStateChange}
        />
      )}
      {status === PAGE_STATUSES.failed && <Text>Empty</Text>}
      {status === PAGE_STATUSES.loading && (
        <Text
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 16,
            textAlign: "center",
          }}
        >
          {t("please_wait")}
        </Text>
      )}
    </View>
  );
}
