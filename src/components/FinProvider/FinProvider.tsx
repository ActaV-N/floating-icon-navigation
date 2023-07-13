'use client';

import React, { createContext } from 'react';

interface FinContext {}

export const FinContext = createContext<FinContext>({});

interface FinProviderProps {
  children: React.ReactNode;
}

function FinProvider(props: FinProviderProps) {
  // prop destruction
  const { children } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  return <FinContext.Provider value={{}}>{children}</FinContext.Provider>;
}

export { FinProvider };
