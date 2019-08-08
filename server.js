const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()
//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))
const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)