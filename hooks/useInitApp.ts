import { useEffect, useState } from "react";
import * as Network from "expo-network";

import useSettings from "./useSettings";

const useInitApp = () => {
  const [isInProgress, setIsInProgress] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isConnectionDetected, setIsConnectionDetected] = useState(false);
  const { initInProgress, ...settings } = useSettings();

  useEffect(() => {
    async function detectConnection() {
      try {
        const { isConnected } = await Network.getNetworkStateAsync();
        setHasError(!isConnected);
      } finally {
        setIsConnectionDetected(true);
      }
    }
    (async () => {
      try {
        await Promise.all([detectConnection()]);
      } catch {
        setHasError(true);
      } finally {
        setIsInProgress(false);
      }
    })();
  }, []);

  return {
    initInProgress: initInProgress || isInProgress,
    hasError,
    isConnectionDetected,
    ...settings,
  };
};

export default useInitApp;
