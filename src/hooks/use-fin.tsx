'use client';

import { useContext } from 'react';
import { FinContext } from '~components/FinProvider';

function useFin() {
  const { currentPath, nextPath, indicatorX } = useContext(FinContext);

  return { currentPath, nextPath, indicatorX };
}

export { useFin };
