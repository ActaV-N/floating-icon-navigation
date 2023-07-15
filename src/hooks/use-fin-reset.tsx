'use client';

import { useContext } from 'react';
import { FinContext } from '~components/FinProvider';

function useFinReset() {
  const { reset } = useContext(FinContext);

  return reset;
}

export { useFinReset };
