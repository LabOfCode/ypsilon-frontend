import RingLoader from 'react-spinners/RingLoader';

interface SpinerProps {
  loading: boolean;
  size: number;
}

const override = {
  marginRight: '6px',
  borderColor: '#0FB7D1',
};

export const Spiner = ({ loading, size }: SpinerProps) => {
  return (
    <RingLoader
      color="#0FB7D1"
      loading={loading}
      cssOverride={override}
      size={size}
      aria-label="Loading ..."
      data-testid="loader"
    />
  );
};
