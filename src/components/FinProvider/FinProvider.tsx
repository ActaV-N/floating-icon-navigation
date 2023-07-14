'use client';

import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { Subject } from 'rxjs';

export type EventType = 'start' | 'end' | 'setting' | 'register';
export interface Event {
  type: EventType;
  currentPath: string;
  nextPath?: string;
  indicatorX?: number;
}

type Handler = (event: Event, ...args: any[]) => void;
export interface EventHandler {
  type: EventType;
  handler: Handler;
}

export interface FinContext {
  next: (event: Event) => void;
  currentPath: string;
  nextPath?: string;
  indicatorX?: number;
  register: (handler: EventHandler | EventHandler[]) => void;
}

export const FinContext = createContext<FinContext>({
  next: () => {},
  currentPath: '',
  register: () => {},
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

  // Event, context state
  const [currentPath, setCurrentPath] = useState<string>('');
  const [nextPath, setNextPath] = useState<string>();
  const [indicatorX, setIndicatorX] = useState<number>();

  const finSubject = useRef<Subject<Event>>(new Subject());
  const handlers = useRef<EventHandler[]>([]);

  // form hooks

  // query hooks

  // calculated values
  const register = useCallback(
    (eventHandler: EventHandler | EventHandler[]) =>
      eventHandler instanceof Array ? handlers.current.push(...eventHandler) : handlers.current.push(eventHandler),
    [],
  );

  // effects
  useEffect(() => {
    finSubject.current.subscribe((event: Event) => {
      handlers.current.forEach((eventHandler) => {
        if (eventHandler.type === event.type) {
          setCurrentPath(event.currentPath);
          setNextPath(event.nextPath);
          setIndicatorX(event.indicatorX);
          eventHandler.handler(event);
        }
      });
    });
    setIsLoading(false);
  }, [register]);

  // handlers

  if (isLoading) return <></>;

  return (
    <FinContext.Provider
      value={{
        next: (event) => finSubject.current.next(event),
        currentPath,
        nextPath,
        indicatorX,
        register,
      }}
    >
      {children}
    </FinContext.Provider>
  );
}

export { FinProvider };
