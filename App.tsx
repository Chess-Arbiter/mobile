import React, { useEffect, useState } from "react";
import { ActivityIndicator, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from "react-native-webview";

const LAST_URL_KEY = "lastVisitedUrl";
const defaultUrl = "https://chessarbiter.info/en/laws/intro";

const MyWebView = () => {
  const [url, setUrl] = useState(defaultUrl);
  const [loading, setLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const webviewRef = React.useRef<any>(null);

  useEffect(() => {
    const loadLastUrl = async () => {
      try {
        const lastUrl = await AsyncStorage.getItem(LAST_URL_KEY);
        if (lastUrl) {
          setUrl(lastUrl);
        }
      } finally {
        setLoading(false);
      }
    };
    loadLastUrl();
  }, []);

  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack && webviewRef.current) {
        webviewRef.current.goBack();
        return true;
      }
      return false;
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );
    return () => {
      subscription.remove();
    };
  }, [canGoBack]);

  const handleNavigationStateChange = async (navState: any) => {
    setCanGoBack(navState.canGoBack);
    try {
      await AsyncStorage.setItem(LAST_URL_KEY, navState.url);
    } catch (error) { }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <WebView
      ref={webviewRef}
      style={{ flex: 1, marginTop: 40 }}
      source={{ uri: url }}
      onNavigationStateChange={handleNavigationStateChange}
    />
  );
};

export default MyWebView;
