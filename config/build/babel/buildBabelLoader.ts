import { BuildOptions } from '../types/types';

export function buildBabelLoader({ mode }: BuildOptions) {
  const isDev = mode === 'development';

  const presets = [
    '@babel/preset-env',
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ];

  const plugins = ['@babel/plugin-syntax-dynamic-import', 'babel-plugin-styled-components'];

  if (isDev) {
    plugins.push('react-refresh/babel');
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: presets,
        plugins: plugins,
      },
    },
  };
}
