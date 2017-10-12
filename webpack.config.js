const path = require('path')

module.exports = {
  entry: "./node_modules/@alicloud/sms-sdk/index.js",
  target: "node",
  output: {
    path: __dirname,
    filename: 'index.js',
    library: "alicloud-sms-sdk",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, "node_modules/@alicloud"),
      ],
      loader: "babel-loader",
      options: {
        presets: [
          ["env", {
            "targets": {
              "node": ["6.0.0"],
            },
          }],
        ],
      },
    }]
  },
}
