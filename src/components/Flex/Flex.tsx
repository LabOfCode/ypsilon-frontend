import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

interface FlexStyledProps {
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
}

const FlexStyled = styled.div<FlexStyledProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
  margin: ${({ margin }) => margin || '0'};
`;

const Flex: FC<PropsWithChildren<FlexStyledProps>> = (props: FlexStyledProps) => {
  return <FlexStyled {...props} />;
};

export default Flex;
