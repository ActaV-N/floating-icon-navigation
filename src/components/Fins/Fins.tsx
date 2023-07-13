'use client';

import styled from '@emotion/styled';
import { useContext, useEffect, useRef } from 'react';
import { useAnimate } from 'framer-motion';
import { FinContext } from '~components/FinProvider';
import { OFFSET_ERROR } from '~const';

const FinsContainer = styled.div`
  max-width: 310px;
  width: fit-content;
`;

const FinsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  column-gap: 15px;

  justify-content: space-between;

  background: rgba(255, 255, 255, 0.6);
  border-radius: 29px;

  padding: 5px 10px;

  position: relative;
  overflow: auto;
`;

const IndicatorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: 5px 10px;
`;

const Indicator = styled.div`
  position: absolute;

  height: 48px;
  aspect-ratio: 1;

  border-radius: 24px;

  background: #fff;
`;

export interface FinsProps {
  children: React.ReactNode;
}

/**
 * Fins Component, children should be a list of Fin component
 * @component
 * @example
 * return (
 *   <Fins>
 *     <Fin `props` />
 *     <Fin `props` />
 *     <Fin `props` />
 *   </Fins>
 * )
 */
function Fins(props: FinsProps) {
  // prop destruction
  const { children } = props;

  // lib hooks
  const { next, nextPath, indicatorX } = useContext(FinContext);
  const [scope, animate] = useAnimate();

  // state, ref, querystring hooks
  const containerRef = useRef<HTMLDivElement>(null);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    if (containerRef.current) {
      const initialFin = containerRef.current.querySelector<HTMLDivElement>('.fin-index--container');
      if (!initialFin) throw Error('Need activated Fin component');

      const path = initialFin.dataset.path ?? '';
      let indicatorX = initialFin.offsetLeft - OFFSET_ERROR;

      if (indicatorX < 0) indicatorX = 0;
      next({
        type: 'setting',
        currentPath: path,
        indicatorX,
      });
    }
  }, [containerRef]);

  useEffect(() => {
    const indicatorAnimation = async () => {
      await animate(scope.current, {
        x: indicatorX,
      });

      next({
        currentPath: nextPath!,
        type: 'end',
        nextPath: undefined,
      });
    };

    indicatorAnimation();
  }, [indicatorX]);

  // handlers

  return (
    <FinsContainer ref={containerRef}>
      <FinsWrapper>
        <IndicatorContainer>
          <Indicator ref={scope} className='indicator' />
        </IndicatorContainer>
        {children}
      </FinsWrapper>
    </FinsContainer>
  );
}

export { Fins };
