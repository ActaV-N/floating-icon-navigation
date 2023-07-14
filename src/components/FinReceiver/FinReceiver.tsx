'use client';

import { useEffect } from 'react';
import { useFin } from '~hooks';

function FinReceiver() {
  // prop destruction
  const { contentMap } = useFin();

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    console.log(contentMap);
  }, [contentMap]);

  // handlers

  return '';
}

export { FinReceiver };
