/* eslint-disable @typescript-eslint/no-non-null-assertion */
import webpack from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve!.modules!.push(paths.src);
  config.resolve!.extensions!.push('ts', 'tsx');

  // eslint-disable-next-line no-param-reassign
  config.module!.rules! = config.module!.rules!.map((rule: any) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.module!.rules!.push(buildCssLoader(true));

  return config;
};
