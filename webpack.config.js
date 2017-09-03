import webpack from 'webpack';
import path from 'path';

let BUILD_DIR = path.resolve(__dirname, 'public');
let APP_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: APP_DIR + '/components/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
}; 

export default config;