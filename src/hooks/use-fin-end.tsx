'use client';

import { useFinEvent, type TriggerEventParams, type RegisterHandler, type FinHooks } from './use-fin-event';

function useFinEnd() {
  const [triggerEvent, registerHandler] = useFinEvent();

  const triggerEndEvent = (params: TriggerEventParams) => triggerEvent('end', { ...params });

  const registerEndHandler = (handler: RegisterHandler) => registerHandler('end', handler);

  return [triggerEndEvent, registerEndHandler] as FinHooks;
}

export { useFinEnd };
