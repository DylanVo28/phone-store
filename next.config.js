/** @type {import('next').NextConfig} */

const path = require('path')

const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig:{
    APP_NAME: 'MOBI8',
    API_DEVELOPMENT: "http://localhost:8000/api",
    API_PRODUCTION: "https://mobi8.pvssolution.com/api",
    PRODUCTION:false,
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
    DOMAIN_PRODUCTION: "https://mobi8.pvssolution.com",
    FB_APP_ID: "749452959524618"

  },
  
}


module.exports = nextConfig,withImages({
  target: 'serverless',
  webpack: function (config, { webpack }) {
      config.module.rules.push({
          test: /\.(eot|svg|gif|md)$/,
          loaders: ['style-loader', 'css-loader', 'less-loader']
      })
      config.plugins.push(new webpack.DefinePlugin({
          'process.env': {
              ENV: JSON.stringify(process.env.ENV),
          }
      }))
      return config
  }
})
