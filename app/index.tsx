import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { WebView } from "react-native-webview";

const LAST_URL_KEY = "lastVisitedUrl";

const MyWebView = () => {
  const defaultUrl = "https://chessarbiter.info/en/laws/intro";
  const [url, setUrl] = useState(defaultUrl);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLastUrl = async () => {
      try {
        const lastUrl = await AsyncStorage.getItem(LAST_URL_KEY);
        if (lastUrl) {
          setUrl(lastUrl);
        }
      } catch (error) {
        console.error("Failed to load last URL:", error);
      } finally {
        setLoading(false);
      }
    };
    loadLastUrl();
  }, []);

  // Save the last URL when navigation changes
  const handleNavigationStateChange = async (navState: any) => {
    try {
      await AsyncStorage.setItem(LAST_URL_KEY, navState.url);
    } catch (error) {
      console.error("Failed to save URL:", error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <WebView
      style={{ marginTop: 40 }}
      source={{ uri: url }}
      onNavigationStateChange={handleNavigationStateChange}
    />
  );
};

export default MyWebView;