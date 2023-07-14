'use client';

import { useFinEvent, type TriggerEventParams, type RegisterHandler } from './use-fin-event';

function useFinSetting() {
  const [triggerEvent, registerHandler] = useFinEvent();

  const triggerSettingEvent = (params: TriggerEventParams) => triggerEvent('setting', { ...params });

  const registerSettingHandler = (handler: RegisterHandler) => registerHandler('setting', handler);

  return [triggerSettingEvent, registerSettingHandler];
}

export { useFinSetting };
