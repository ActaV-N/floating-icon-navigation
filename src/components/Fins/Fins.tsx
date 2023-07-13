'use client';

import styled from '@emotion/styled';

const FinsContainer = styled.div`
  max-width: 310px;
  width: fit-content;
  overflow: auto;
`;

const FinsWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  column-gap: 15px;

  justify-content: space-between;

  background: rgba(255, 255, 255, 0.6);
  border-radius: 24px;

  padding: 0 10px;
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

  // state, ref, querystring hooks

  // form hooks

  // query hooks

  // calculated values

  // effects

  // handlers

  return (
    <FinsContainer>
      <FinsWrapper>{children}</FinsWrapper>
    </FinsContainer>
  );
}

export { Fins };
