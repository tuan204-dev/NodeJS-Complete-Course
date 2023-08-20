const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootDir = require('./utils/path')

const PORT = 8000

const app = express()

app.set('view engine', 'pug')

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.router)
app.use(shopRoutes)

app.get('/file', (_, res) => {
  res.sendFile(path.join(rootDir, 'dummy.json'))
})

app.get('/image', (_, res) => {
  res.sendFile(path.join(rootDir, 'public', 'imgs', 'image.png'))
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'))
})

console.log(adminData.products)

console.log(rootDir, 'line 35')

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})
