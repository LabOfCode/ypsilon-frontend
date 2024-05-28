import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface FlexStProps {
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  gap?: string;
  margin?: string;
  wrap?: boolean;
}

const FlexSt = styled.div<FlexStProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
  margin: ${({ margin }) => margin || '0'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};
`;

const Flex: FC<PropsWithChildren<FlexStProps>> = (props: FlexStProps) => {
  return <FlexSt {...props} />;
};

export default Flex;
