'use client';

import React, { useContext, useMemo } from 'react';
import styled from '@emotion/styled';
import { cx } from '@emotion/css';
import { DEFAULT_COLOR } from './const';
import { EASE_IN_OUT } from '~const';
import { FinContext } from '~components/FinProvider';

const FinContainer = styled.div`
  width: 48px;
  height: 48px;

  border-radius: 24px;
  overflow: hidden;

  position: relative;

  cursor: pointer;
`;

const FinWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s ${EASE_IN_OUT};
  &:not(.fin-active): hover {
    background-color: rgba(30, 30, 30, 0.3);
  }
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
  path: string;
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
  const { icon, active, path } = props;

  // lib hooks
  const { next, currentPath } = useContext(FinContext);

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
  const handleNavigate = () => {
    if (active) return;
    next({
      currentPath,
      nextPath: path,
      type: 'start',
    });
  };

  return (
    <FinContainer>
      <FinWrapper onClick={handleNavigate} className={cx(`fin-${path}`, active && 'fin-active')} data-path={path}>
        <FinIcon color={color}>{icon}</FinIcon>
      </FinWrapper>
    </FinContainer>
  );
}

export { Fin };
