'use client';

import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { cx } from '@emotion/css';
import { EASE_IN_OUT, DEFAULT_COLOR, OFFSET_ERROR } from '~const';
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
  index?: boolean;
  activeColor?: string;
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
  const { icon, index, path, activeColor } = props;

  // lib hooks
  const { next, currentPath, register } = useContext(FinContext);

  // state, ref, querystring hooks
  const [active, setActive] = useState<boolean>(false);
  const me = useRef<HTMLDivElement>(null);

  // form hooks

  // query hooks

  // calculated values
  const color = useMemo(() => activeColor ?? DEFAULT_COLOR, [activeColor]);

  const myPositionX = useMemo(() => {
    if (me.current) {
      return me.current.offsetLeft - OFFSET_ERROR;
    }

    return undefined;
  }, [me.current]);

  // effects
  useEffect(() => {
    register([
      {
        type: 'setting',
        handler: (event) => {
          if (event.currentPath === path) {
            setActive(true);
          }
        },
      },
      {
        type: 'start',
        handler: (event) => {
          if (event.nextPath === path) setActive(true);
          else setActive(false);
        },
      },
    ]);
  }, []);

  // handlers
  const handleNavigate = () => {
    if (active) return;
    next({
      currentPath,
      nextPath: path,
      indicatorX: myPositionX,
      type: 'start',
    });
  };

  return (
    <FinContainer ref={me} className={`fin-${path}--container`}>
      <FinWrapper
        onClick={handleNavigate}
        className={cx(`fin-${path}--wrapper`, index && 'fin-index', active && 'fin-active')}
        data-path={path}
      >
        <FinIcon color={color}>{icon}</FinIcon>
      </FinWrapper>
    </FinContainer>
  );
}

export { Fin };
