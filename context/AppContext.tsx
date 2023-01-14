import React, { createContext, ReactNode } from "react";

export const AppContext = createContext({});

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

export default AppProvider;
