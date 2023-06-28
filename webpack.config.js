const HtmlWebPackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dotenv = require("dotenv");

const webpack = require("webpack");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const fs = require("fs");

const path = require("path");

const deps = require("./package.json").dependencies;

module.exports = (env) => {
  const currentPath = path.join(__dirname);

  const basePath = currentPath + "/.env";

  const envPath = basePath + "." + env.ENVIRONMENT;

  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

  // Set the path parameter in the dotenv config

  const fileEnv = dotenv.config({ path: finalPath }).parsed;

  console.log(fileEnv, "env log");

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);

    return prev;
  }, {});

  return {
    output: {
      publicPath: process.env.HOME_PAGE,
    },

    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],

      fallback: {
        crypto: false,

        stream: false,
      },
    },

    devServer: {
      port: 3000,

      historyApiFallback: true,
    },

    module: {
      rules: [
        {
          test: /\.(css|s[ac]ss)$/i,

          use: ["style-loader", "css-loader"],
        },

        {
          test: /\.less$/,

          use: [
            "style-loader",

            "css-loader",

            {
              loader: "less-loader",

              options: {
                lessOptions: {
                  javascriptEnabled: true,

                  // ... other less options ...
                },
              },
            },
          ],
        },

        {
          test: /\.(ts|tsx|js|jsx)$/,

          exclude: /node_modules/,

          use: {
            loader: "babel-loader",
          },
        },

        {
          test: /\.(png|jpe?g|gif|svg)$/i,

          use: [
            {
              loader: "file-loader",

              options: {
                name: "[name].[ext]",

                outputPath: "images/", // Output path for the image files

                publicPath: "images/", // Public URL path for the image files
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "Home",

        filename: "remoteEntry.js",

        remotes: {
          PDP: `PDP@${process.env.PDP_PAGE}remoteEntry.js`,
        },

        exposes: {
          "./Header": "./src/components/common/Header.js",

          "./Footer": "./src/components/common/Footer.js",

          "./sharedStore": "./src/sharedStore.js",
        },

        shared: {
          ...deps,

          react: {
            singleton: true,

            requiredVersion: deps.react,
          },

          "react-dom": {
            singleton: true,

            requiredVersion: deps["react-dom"],
          },
        },
      }),

      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),

      new MiniCssExtractPlugin(),

      new webpack.DefinePlugin(envKeys),
    ],
  };
};
