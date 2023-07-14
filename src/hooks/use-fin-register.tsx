'use client';

import { useFinEvent, type TriggerEventParams, type RegisterHandler, type FinHooks } from './use-fin-event';

function useFinRegister() {
  const [triggerEvent, registerHandler] = useFinEvent();

  const triggerRegisterEvent = (params: TriggerEventParams) => triggerEvent('register', { ...params });

  const registerRegisterHandler = (handler: RegisterHandler) => registerHandler('register', handler);

  return [triggerRegisterEvent, registerRegisterHandler] as FinHooks;
}

export { useFinRegister };
