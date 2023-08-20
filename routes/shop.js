const express = require('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../utils/path')
const adminData = require('./admin')

router.get('/', (req, res) => {
  const products = adminData.products
  res.render('shop', { props: products, docTitle: 'Shop' })
})

router.get('/data', (req, res) => {
  res.sendFile(path.join(rootDir, 'dummy.json'))
})

module.exports = router
