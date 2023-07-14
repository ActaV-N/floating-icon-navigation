'use client';

import { useFinEvent, type TriggerEventParams, type RegisterHandler } from './use-fin-event';

function useFinStart() {
  const [triggerEvent, registerHandler] = useFinEvent();

  const triggerStartEvent = (params: TriggerEventParams) => triggerEvent('start', { ...params });

  const registerStartHandler = (handler: RegisterHandler) => registerHandler('start', handler);

  return [triggerStartEvent, registerStartHandler];
}

export { useFinStart };
