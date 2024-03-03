import webpack from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { BuildOptions } from './types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
          }),
          transpileOnly: isDev,
        },
      },
    ],
  };

  return [
    svgLoader,
    fileLoader,
    typescriptLoader,
    cssLoader,
  ];
}
