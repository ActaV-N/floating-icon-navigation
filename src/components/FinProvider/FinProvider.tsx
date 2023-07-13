'use client';

import React, { createContext, useRef } from 'react';
import { Subject } from 'rxjs';

export interface Event {
  type: 'start' | 'end';
  current: string;
}

export interface FinContext {
  next: (event: Event) => void;
  current: string;
}

export const FinContext = createContext<FinContext>({
  next: () => {},
  current: '',
});

export interface FinProviderProps {
  children: React.ReactNode;
}

function FinProvider(props: FinProviderProps) {
  // prop destruction
  const { children } = props;

  // lib hooks

  // state, ref, querystring hooks
  const finSubject = useRef<Subject<Event>>(new Subject());

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  return (
    <FinContext.Provider value={{ next: (event) => finSubject.current.next(event), current: '' }}>
      {children}
    </FinContext.Provider>
  );
}

export { FinProvider };
