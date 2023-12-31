const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../utils/path')

const products = []

router.get('/add-product', (req, res) => {
  console.log(products)
  res.render('add-product')
})

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title })
  res.redirect('/')
})

module.exports = { router, products }
