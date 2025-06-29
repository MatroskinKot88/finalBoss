// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

// module.exports = {
//   // Входной файл
//   entry: ['./src/js/index.js'],

//   // Выходной файл
//   output: {
//     filename: './js/bundle.js'
//   },

//   // Source maps для удобства отладки
//   devtool: 'source-map',

//   module: {
//     rules: [
//       // Транспилируем js с babel
//       {
//         test: /\.js$/,
//         include: path.resolve(__dirname, 'src/js'),
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       },

//       // Компилируем SCSS в CSS
//       {
//         test: /\.scss$/,
//         use: [
//           MiniCssExtractPlugin.loader, // Extract css to separate file
//           'css-loader', // translates CSS into CommonJS
//           'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
//           'sass-loader' // compiles Sass to CSS, using Node Sass by default
//         ]
//       },

//       // Подключаем шрифты из css
//       {
//         test: /\.(eot|ttf|woff|woff2)$/,
//         use: [
//           {
//             loader: 'file-loader?name=./fonts/[name].[ext]'
//           }
//         ]
//       },

//       // Подключаем картинки из css
//       {
//         test: /\.(svg|png|jpg|jpeg|webp)$/,
//         use: [
//           {
//             loader: 'file-loader?name=./static/[name].[ext]'
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     // Подключаем файл html, стили и скрипты встроятся автоматически
//     new HtmlWebpackPlugin({
//       title: 'Webpack 4 Starter',
//       template: './src/index.html',
//       inject: true,
//       minify: {
//         removeComments: true,
//         collapseWhitespace: false
//       }
//     }),

//     // Кладем стили в отдельный файлик
//     new MiniCssExtractPlugin({
//       filename: 'style.css'
//     }),

//     // Копируем картинки
//     new CopyWebpackPlugin([
//       {
//         from: './src/img',
//         to: 'img'
//       }
//     ])
//   ]
// }

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['./src/js/index.js'],

  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'source-map',

  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/js'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // SCSS
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },

      // Шрифты (обновлённый синтаксис)
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },

      // Изображения (обновлённый синтаксис)
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),

    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ]
}
