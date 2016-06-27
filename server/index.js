'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())

app.get('/', (req, res) => {
  res.status(200).json({ saludo: 'Hola' })
})

app.listen(3000, () => console.log('Express running on port 3000'))
