'use client';

import { createContext, useContext } from 'react';

const DarkContext = createContext(false);

export function DarkProvider({
  dark,
  children,
}: {
  dark: boolean;
  children: React.ReactNode;
}) {
  return <DarkContext.Provider value={dark}>{children}</DarkContext.Provider>;
}

export function useDark() {
  return useContext(DarkContext);
}
