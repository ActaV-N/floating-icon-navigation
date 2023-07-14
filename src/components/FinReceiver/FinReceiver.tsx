'use client';

import { useEffect, useState } from 'react';
import { useFin, useFinEnd } from '~hooks';

function FinReceiver() {
  // prop destruction

  // lib hooks
  const { contentMap, currentPath } = useFin();
  const [_, registerEnd] = useFinEnd();

  // state, ref, querystring hooks
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [children, setChildren] = useState<React.ReactNode>(contentMap[currentPath]);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    registerEnd((event) => {
      setIsLoading(false);
      setChildren(contentMap[event.currentPath]);
    });
  }, []);

  // handlers

  if (isLoading) {
    return <></>;
  }

  return <>{children}</>;
}

export { FinReceiver };
