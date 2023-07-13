'use client';

import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { DEFAULT_COLOR } from './const';
import { EASE_IN_OUT } from '~const';

const FinContainer = styled.div`
  width: 48px;
  height: 48px;

  border-radius: 24px;
  overflow: hidden;
`;

const FinWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FinIcon = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 26px;
  height: 26px;

  color: ${(props) => props.color};

  transition: color 0.2s ${EASE_IN_OUT};
`;

export interface FinProps {
  icon: React.ReactNode;
  active?: boolean | string;
}

/**
 * Floating Icon Navigation's Icon Component
 *
 * @component
 * @example
 * return (
 *   <Fin icon={`IconCopmonent`} active={`color string` or `boolean`} />
 * )
 */
function Fin(props: FinProps) {
  // prop destruction
  const { icon, active } = props;

  // lib hooks

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values
  const color = useMemo(() => {
    if (typeof active === 'string') {
      return active;
    }

    return DEFAULT_COLOR;
  }, [active]);

  // effects

  // handlers

  return (
    <FinContainer>
      <FinWrapper>
        <FinIcon color={color}>{icon}</FinIcon>
      </FinWrapper>
    </FinContainer>
  );
}

export { Fin };
