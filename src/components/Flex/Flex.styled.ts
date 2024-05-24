import styled from 'styled-components';

export interface FlexStyledProps {
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
}

export const FlexStyled = styled.div<FlexStyledProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
`;
