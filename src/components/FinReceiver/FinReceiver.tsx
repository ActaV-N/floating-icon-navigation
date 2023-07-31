'use client';

import styled from '@emotion/styled';
import { motion, useAnimate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useFin, useFinEnd, useFinStart } from '~hooks';

const FinReceiverContainer = motion(styled.div``);

export interface FinReceiverProps {
  className?: string;
}

function FinReceiver(props: FinReceiverProps) {
  // prop destruction
  const { className } = props;

  // lib hooks
  const [scope, animate] = useAnimate();

  const { contentMap, currentPath, initialize } = useFin();
  const [_, registerEnd] = useFinEnd();
  const [__, registerStart] = useFinStart();

  // state, ref, querystring hooks
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [children, setChildren] = useState<React.ReactNode>(contentMap[currentPath]);

  // form hooks

  // query hooks

  // calculated values

  // effects
  useEffect(() => {
    if (!isLoading) {
      animate(
        scope.current,
        {
          opacity: 1,
        },
        { duration: 0.2 },
      );
    }
  }, [isLoading]);

  useEffect(() => {
    registerEnd(async (event) => {
      setIsLoading(false);
      setChildren(contentMap[event.currentPath]);
      if (scope.current) {
        animate(
          scope.current,
          {
            opacity: 1,
          },
          { duration: 0.2 },
        );
      }
    });

    registerStart(() => {
      animate(
        scope.current,
        {
          opacity: 0,
        },
        { duration: 0.2 },
      );
    });

    initialize();
  }, []);

  // handlers

  if (isLoading) {
    return <></>;
  }

  return (
    <FinReceiverContainer className={className} initial={{ opacity: 0 }} ref={scope}>
      {children}
    </FinReceiverContainer>
  );
}

export { FinReceiver };
