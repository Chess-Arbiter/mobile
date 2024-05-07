import React, { createContext, ReactNode, useContext } from "react";

const AppContext = createContext<any>({});

const AppProvider = ({
  children,
  contextData,
}: {
  children: ReactNode;
  contextData: any;
}) => {
  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}

export default AppProvider;
