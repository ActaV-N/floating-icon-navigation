'use client';

import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { useAnimate } from 'framer-motion';
import { OFFSET_ERROR } from '~const';
import { useFin, useFinEnd, useFinSetting } from '~hooks';

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

  padding: ${OFFSET_ERROR}px;

  position: relative;
  overflow: auto;
`;

const IndicatorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  padding: ${OFFSET_ERROR}px;
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
  const { nextPath, indicatorX } = useFin();
  const [triggerEnd] = useFinEnd();
  const [triggerSetting, registerSetting] = useFinSetting();
  const [scope, animate] = useAnimate();

  // state, ref, querystring hooks
  const [initialized, setInitialized] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    registerSetting(async (event) => {
      await animate(scope.current, { x: event.indicatorX, scale: 0.8, opacity: 0 }, { duration: 0 });
      await animate(scope.current, { scale: 1, opacity: 1 });

      setInitialized(true);
    });
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const initialFin = containerRef.current.querySelector<HTMLDivElement>('.fin-index--container');
      if (!initialFin) throw Error('Need activated Fin component');

      const path = initialFin.dataset.path ?? '';
      let indicatorX = initialFin.offsetLeft - OFFSET_ERROR;

      if (indicatorX < 0) indicatorX = 0;
      triggerSetting({
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

      triggerEnd({
        currentPath: nextPath!,
      });
    };

    if (initialized) {
      indicatorAnimation();
    }
  }, [indicatorX, initialized]);

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
