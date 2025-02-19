import { Configuration } from 'webpack';

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

export function buildOptimization(): Configuration['optimization'] {
  return {
    minimize: true, // Включить минимизацию
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false, // Удаляет комментарии
          },
          compress: {
            drop_console: true, // Убирает console.log
          },
        },
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all', // Разделять все модули
      minSize: 30 * 1024, // Минимальный размер файла 30KB
      maxSize: 244 * 1024, // Максимальный размер чанка (как в предупреждении Webpack)
      maxInitialRequests: 5, // Макс. число запросов при первой загрузке
      maxAsyncRequests: 7, // Макс. число асинхронных запросов
      automaticNameDelimiter: '-', // Разделитель в именах файлов
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: -10,
          enforce: true, // Всегда разделять библиотеки
        },
        common: {
          test: /[\\/]src[\\/]/,
          minChunks: 2, // Общие модули, используемые 2+ раз
          name: 'common',
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  };
}
