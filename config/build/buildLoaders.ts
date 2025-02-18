import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import ReactRefreshTypeScript from 'react-refresh-typescript';
import { ModuleOptions } from 'webpack';

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
  const svgSpriteLoader = {
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
    parser: {
      dataUrlCondition: {
        maxSize: 8 * 1024, // Изображения < 8KB инлайнить в base64
      },
    },
    use: [
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
            quality: 75, // Сжатие JPEG
          },
          optipng: {
            enabled: true,
          },
          pngquant: {
            quality: [0.65, 0.9], // Сжатие PNG
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          webp: {
            quality: 75, // Конвертация в WebP
          },
        },
      },
    ],
  };

  //CSS
  const cssLoader = {
    test: /\.css$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
  };

  //ts-loader
  // const tsLoader  = {
  //   test: /\.tsx?$/,
  //   use: [
  //     {
  //       loader: 'ts-loader',
  //       options: {
  //         getCustomTransformers: () => ({
  //           before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
  //         }),
  //         transpileOnly: isDev,
  //       },
  //     },
  //   ],
  //   exclude: /node_modules/,
  // };

  //babel-loader
  const babelLoader = buildBabelLoader(options);

  return [
    assetLoader,
    cssLoader,
    //tsLoader,
    babelLoader,
    svgSpriteLoader,
    svgLoader,
    fontsLoader,
  ];
}
