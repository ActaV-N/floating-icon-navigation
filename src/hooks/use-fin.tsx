'use client';

import { useContext } from 'react';
import { FinContext } from '~components/FinProvider';

function useFin() {
  const { currentPath, nextPath, indicatorX, contentMap, initialize, initialized } = useContext(FinContext);

  return { currentPath, nextPath, indicatorX, contentMap, initialize, initialized };
}

export { useFin };
