'use client';

import React, { createContext, useCallback, useEffect, useRef, useState } from 'react';
import { Subject } from 'rxjs';

export type EventType = 'start' | 'end' | 'setting' | 'register' | 'setting-end';
export interface Event {
  type: EventType;
  currentPath: string;
  children?: React.ReactNode;
  nextPath?: string;
  indicatorX?: number;
}

type Handler = (event: Event, ...args: any[]) => Promise<void> | void;
export interface EventHandler {
  type: EventType;
  handler: Handler;
}

type ContentMap = Record<string, React.ReactNode>;
export interface FinContext {
  next: (event: Event) => void;
  currentPath: string;
  nextPath?: string;
  indicatorX?: number;
  contentMap: ContentMap;
  register: (handler: EventHandler | EventHandler[]) => void;
}

export const FinContext = createContext<FinContext>({
  next: () => {},
  currentPath: '',
  contentMap: {},
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
  const finSubject = useRef<Subject<Event>>(new Subject());
  const handlers = useRef<EventHandler[]>([]);

  // Event, context state
  const contentMap = useRef<ContentMap>({});
  const [currentPath, setCurrentPath] = useState<string>('');
  const [nextPath, setNextPath] = useState<string>();
  const [indicatorX, setIndicatorX] = useState<number>();

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
    finSubject.current.subscribe(async (event: Event) => {
      if (event.type === 'register') {
        contentMap.current[event.currentPath] = event.children;
      }

      handlers.current.forEach(async (eventHandler) => {
        if (eventHandler.type === event.type) {
          event.currentPath && setCurrentPath(event.currentPath);
          setNextPath((nextPath) => event.nextPath ?? nextPath);
          setIndicatorX((indicatorX) => event.indicatorX ?? indicatorX);

          await eventHandler.handler(event);
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
        contentMap: contentMap.current,
        register,
      }}
    >
      {children}
    </FinContext.Provider>
  );
}

export { FinProvider };
