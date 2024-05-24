import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { ModuleOptions, runtime } from 'webpack';

import { buildBabelLoader } from './babel/buildBabelLoader';
import { BuildOptions } from './types/types';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === 'development';

  //fonts
  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      publicPath: 'fonts/',
      outputPath: 'fonts/',
    },
  };

  //SVG sprite
  const sbgSpriteLoader = {
    test: /\.svg$/i,
    include: /.*_sprite\.svg/,
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          publicPath: '',
          runtimeCompat: true,
        },
      },
    ],
  };

  //SVG
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    exclude: /.*_sprite\.svg/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                },
              },
            ],
          },
        },
      },
    ],
  };

  //assets images
  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      publicPath: 'images/',
      outputPath: 'images/',
    },
  };

  //CSS
  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  };

  //ts-loader
  const tsLoader = {
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDev,
        },
      },
    ],
    exclude: /node_modules/,
  };

  //babel-loader
  const babelLoader = buildBabelLoader(options);

  return [
    assetLoader,
    cssLoader,
    //tsLoader,
    babelLoader,
    svgLoader,
    fontsLoader,
  ];
}
