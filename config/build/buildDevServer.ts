import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    static: {
      directory: options.paths.output,
      publicPath: '/ypsilon-frontend/',
    },
    port: options.port ?? 3000,
    open: true,
    hot: true,
    historyApiFallback: {
      rewrites: [{ from: /\/*/, to: `${options.paths.publicpath}/index.html` }],
    },
  };
}
