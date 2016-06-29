'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const path = require('path')
const logger = require('morgan')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/speakers', (req, res) => {
  res.sendFile(path.join(__dirname, 'db', 'speakers.json'))
})

app.get('/api/speakers/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'db', `${req.params.id}.json`))
})

app.get('*', (req, res, next) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  } else {
    next()
  }
})

app.listen(3000, () => console.log('Express running on port 3000'))
