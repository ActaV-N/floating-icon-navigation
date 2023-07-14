'use client';

import { useFinEvent, type TriggerEventParams, type RegisterHandler, type FinHooks2 } from './use-fin-event';

function useFinSetting() {
  const [triggerEvent, registerHandler] = useFinEvent();

  const triggerSettingEvent = (params: TriggerEventParams) => {
    triggerEvent('setting', { ...params });
    triggerEvent('setting-end', { ...params });
  };

  const registerSettingHandler = (handler: RegisterHandler) => registerHandler('setting', handler);

  const registerSettingEndHandler = (handler: RegisterHandler) => registerHandler('setting-end', handler);

  return [triggerSettingEvent, registerSettingHandler, registerSettingEndHandler] as FinHooks2;
}

export { useFinSetting };
