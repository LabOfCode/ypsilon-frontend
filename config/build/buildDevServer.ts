import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  const isDev = options.mode === 'development';

  return {
    static: {
      directory: options.paths.output,
    },
    historyApiFallback: {
      index: isDev ? '/index.html' : '/ypsilon-frontend/index.html',
    },
    port: options.port ?? 3000,
    open: true,
    hot: true,
    devMiddleware: {
      publicPath: isDev ? '' : '/ypsilon-frontend/',
    },
  };
}
