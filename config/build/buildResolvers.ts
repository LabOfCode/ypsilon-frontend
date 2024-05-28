import { Configuration } from 'webpack';

import { BuildOptions } from './types/types';

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': options.paths.src,
    },
  };
}
