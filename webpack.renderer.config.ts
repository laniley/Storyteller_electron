import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

rules.push({
	test: /\.(jpe?g|png|gif)$/,
	use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
});

rules.push({
	test: /\.(eot|svg|ttf|woff|woff2)$/,
	use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
