'use client';

import { useContext } from 'react';
import { FinContext, type EventType, type Event, type EventHandler } from '~components/FinProvider';

export type TriggerEventParams = Omit<Event, 'type'>;
export type RegisterHandler = EventHandler['handler'];

export type FinHooks = [
  (params: TriggerEventParams) => (type: EventType, params: TriggerEventParams) => void,
  (handler: RegisterHandler) => (type: EventType, handler: RegisterHandler) => void,
];

function useFinEvent() {
  const { next, register } = useContext(FinContext);

  const triggerEvent = (type: EventType, params: TriggerEventParams) =>
    next({
      type,
      ...params,
    });

  const registerHandler = (type: EventType, handler: RegisterHandler) =>
    register({
      type,
      handler,
    });

  return [triggerEvent, registerHandler] as [typeof triggerEvent, typeof registerHandler];
}

export { useFinEvent };
