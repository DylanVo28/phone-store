/** @type {import('next').NextConfig} */

const path = require('path')

const withImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  publicRuntimeConfig:{
    APP_NAME: process.env.APP_NAME,
    API_DEVELOPMENT: process.env.API_DEVELOPMENT,
    API_PRODUCTION: process.env.API_PRODUCTION,
    PRODUCTION:false,
    DOMAIN_DEVELOPMENT: process.env.DOMAIN_DEVELOPMENT,
    DOMAIN_PRODUCTION: process.env.DOMAIN_PRODUCTION,
    FB_APP_ID: process.env.FB_APP_ID
  },
  images:{
    domains: [
      'media4.giphy'
    ]
  }
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
