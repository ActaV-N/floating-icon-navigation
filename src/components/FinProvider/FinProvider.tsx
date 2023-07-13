'use client';

import React, { createContext, useEffect, useRef, useState } from 'react';
import { Subject } from 'rxjs';

export interface Event {
  type: 'start' | 'end' | 'setting';
  currentPath: string;
}

export interface FinContext {
  next: (event: Event) => void;
  currentPath: string;
}

export const FinContext = createContext<FinContext>({
  next: () => {},
  currentPath: '',
});

export interface FinProviderProps {
  children: React.ReactNode;
}

function FinProvider(props: FinProviderProps) {
  // prop destruction
  const { children } = props;

  // lib hooks

  // state, ref, querystring hooks
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPath, setCurrentPath] = useState<string>('');
  const finSubject = useRef<Subject<Event>>(new Subject());

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    finSubject.current.subscribe((event: Event) => {
      console.log(event.type, event.currentPath);
      if (event.type === 'setting') {
        setCurrentPath(event.currentPath);
      }
    });
    setIsLoading(false);
  }, []);

  // handlers

  if (isLoading) return <></>;

  return (
    <FinContext.Provider value={{ next: (event) => finSubject.current.next(event), currentPath }}>
      {children}
    </FinContext.Provider>
  );
}

export { FinProvider };
