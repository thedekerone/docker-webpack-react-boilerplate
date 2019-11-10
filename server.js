import express from 'express'
const isDeveloping = process.env.NODE_ENV !== 'production'
if (isDeveloping) {
  let webpack = require('webpack')
  let webpackMiddleware = require('webpack-dev-middleware')
  let webpackHotMiddleware = require('webpack-hot-middleware')
  let config = require('./webpack.config.js')
  // serve the content using webpack
  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
} else {
  // serve the content using static directory
  app.use(express.static(staticPath))
}
