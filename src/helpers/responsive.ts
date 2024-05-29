import { useMediaQuery } from 'react-responsive';

export function responsive() {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });

  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1439px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width: 743px)',
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
